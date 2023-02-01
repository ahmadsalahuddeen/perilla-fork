import React, { useEffect } from "react";
import { useActions } from "../../hooks/useAction";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { EmployeeAuthData, EmployeeAuthState } from "../../models/employee";
import { GetAllProjectsState, ProjectData } from "../../models/project";
import style from "../../styles/projectPage.module.scss";
import NoDataCopmonent from "../layout/NoDataCopmonent";
import Spinner from "../layout/SpinnerComponent";
import ProjectBox from "./ProjectBox";

const ProjectListComponent = () => {
  const { getAllProjects, getMyProjects } = useActions();
  const { data, error, loading }: GetAllProjectsState = useTypedSelector(
    (state) => state.allProjects
  );

  const employeeData: EmployeeAuthState = useTypedSelector(
    (state) => state.employee
  );

  useEffect(() => {
    if (employeeData.data?.role === "employees") {
      getAllProjects("", "pending", "employee");
    } else {
      getAllProjects("", "pending", "hr");
    }
  }, []);

  return (
    <div className={style.projectList}>
      {loading && <Spinner />}
      {!loading && !data?.data.length && (
        <NoDataCopmonent text="No Projects found" />
      )}
      {data?.data.map((el: ProjectData) => {
        return <ProjectBox key={el.id} projectData={el} />;
      })}
    </div>
  );
};

export default ProjectListComponent;
