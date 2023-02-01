import { BadRequestError } from "@hr-management/common";
import { Request, Response, NextFunction } from "express";
import { DepenteniciesData } from "../../entities/interfaces";

export = (dependencies: DepenteniciesData): any => {
  const {
    useCases: { getProjectsUnderClient_usecase },
  } = dependencies;

  const getProjectsUnderUser = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      let companyName =
        req.currentUser?.id.companyName || req.currentTenant?.id.companyName;

      console.log(companyName, req.params.clientId);
      const projectsData = await getProjectsUnderClient_usecase(
        dependencies
      ).execute(companyName, req.params.clientId);

      if (!projectsData) {
        throw new BadRequestError("No projects found");
      }

      res.json({ data: projectsData });
    } catch (error: any) {
      throw new Error(error);
    }
  };
  return getProjectsUnderUser;
};
