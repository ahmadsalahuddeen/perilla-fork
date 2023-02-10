import React from "react";
import styles from "../../../styles/chat.module.scss";
import VideocamIcon from "@mui/icons-material/Videocam";
import CallIcon from '@mui/icons-material/Call';

const ChatTopBar = () => {
  return (
    <div className={styles.chatRightTop}>
      <div>
        <img
          src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYWFRgWFhUYGBgZGhoaGhocHBoaGhwhHBgaGhwaGhocIS4lHB4rHxoYJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QHhISGjQhISE0NDQxNDQ0NDQ0NDE0MTQ0NDQ0NDQ9NDQ0NDQxNDQ0NDQ0NDE0NDQxNDQ0ND80MTExP//AABEIAOEA4QMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAADBAIFAAEGBwj/xAA9EAACAQIEBAQEBAMHBAMAAAABAgADEQQSITEFQVFhBnGBkRMiMqGxwdHwQlLhBxQkcoKS8RUjYuIzY8L/xAAYAQEBAQEBAAAAAAAAAAAAAAAAAQIDBP/EACERAQEAAgICAgMBAAAAAAAAAAABAhEhMQMSMlFBYXEi/9oADAMBAAIRAxEAPwAoBMIE13m1HtJKIGsmsIPOSCQiqDzt6QNqg95vJ3mBPL99pNEgaVIVafe83Tp3jCIOkBcJaGWn2hSum0ki+coEaQm1pW5RjINzpKjGeJKNKqqFxqSCdwpsdz52HrIHwjAwiU4o3iPDAXNVR5XMXxfirDoFZXVw1rW89faUW3woIp02inB+P0a5yq2V/wCU8/LrLMOtytxcct5AuaciKWt+gjppQeWUAdJAgRgrB/DhALyLCHamJApYygSr3M0620vCFOcg4gB225yBIhmEgUgDI5wTob6RgqOkGRAD8E95kLnmQF1hCbcpiJJ5D1mVRHtCqnaay84ZP2YGIkOgPSaQXEYRNIGlU+UOqTaJ1EMq85RBEkMTiEpjM7WH2ENWsVYA2NvUdD5TgeOcWqm9NwHAb61up069Nh7SWrJtvxp4i0+EmoOuYXBHqN5wb02b5mJO+/v6S1quiurWup3F9uvl6Rio6Wv9Q5MDrbow7bXmdrIoVe3UecIo1FxvH2rJ9LAFeTc18wNCJXV0Kbaj7ekijI2VsyMVYd5YUuI1A+cuzHY6kG37tKQvfW0NSqd5oer+GfEXxkyuVDrob6Zuh8zL6kwa9uVvvPHKNW4upswtf9Z0vhTxP8N2SsdGZFB5Aai/bleJWbHfukiFEcyAi4Nx2gTTmmSzLpBEfsx1qcEacoVy8rSLJpGWQiBdoCpJkbRgwT7wAE2vIQzCRyH0gC1/dpqG+GOsyAAD2k0E0F6wiDrMqkqCEVDNokMlMwNovaMIvaYtO8OiWgbCXhGAVSSbAC+smizmPGPG/hr8NRqRqWuAPLkTA5zxTxNc6mgxUkXsCbXPTp3EqqGLqNpUW6tzH5HmO0ZwdJG+bJr11y+e1o5Urjmo6bA/cazna6SKfF4SxvqVPrJVcJlXRiOdjqD3HMRqs+bRdCemvuLQiYKqy2y5huNDf995Nteu3M16V9gO9jp7RNkO3t+k6ytwSq2uQj0g04FULaofOX3h6VyGQg6RjDoSbdfsf0nYP4bLDUWMQfgrKfL0+8syiXCxUuChDcyNR9j7wHFkZWV1+lgCD17HuNpbY3AOw21la7ugKOpynkeRtuJds2V1/wDZ34r+jDNc3LnU7CwsBfvm9BPT1YEXFp83Yhcr3U99OU9g/s58SJVpJhiCHRd7AAgdNbzUZrr8kG6RtktBsJpkiw5QDpHihN4B0gJMkHljjLAssBdwJC0NUMiggDyDqPaahLDvMgLhe8Kg7TSLDIkyolMRhZGmkOidoGIsOizarCIsDEE4Lxfij/eQgFzb6bA376jSegINpwvifTGEEADIDoNTpqWPvM3pqdkWDZRmPpf8eUY4Zw01iAqi3X+u8SxCOxttfb129Z6b4cwCU6SAAXtrOWTrNTmluE+FKSC7KCf31l1/cEUaKPYRrNaDrPyvGppn2ytI18Mu9hKvEBATpt2lpiKgtYGUmJcfNqdpzr0Yb1yqKtcEmINbnJ/FFj2ibYjpDdbamsQ4nwr4gjtI3MapJNxzyjzfFYA02s3mPvvD+G8X8HE0n5ZwDrbQ6a9pb+JMJ83cTmWWx8jOsrzZTVfR4sQD1EE4i/AsUtTDUnXZqan7a+WsbnRzAA3gqiRkiQqLKK9lMCVvHXpwRSAm6dZoj7Q9RekBktAhmXoJk3lmoAVQ+h94zTWBo69Y3TWZURBGU8oBEjKLA3ChbiYBChYGIJwXiV82KfoAqE7bDMQPcT0BZxfiqnlrg/zC8zl01j2qqSn4lzy27dfXlPQ+EVfkA7Tz+nqQTpYkt+U7bhT3QdBOGT0Yza3qP94uUbe5119IdQd4UrprJ2b0rmo31JMqa6C772IPlLfFHTeVRpAlbk/rI6SuUxAAU23vaBFE29JeYuginl9UXrsBylVXUdJZ4VL2EWULcaxvDGziajnlXPeMktU06D85xuLSeo+KOHB0zgbA3+1jPNcYulp1jhk9m8DVA2AoEEGykadQxBBHWXlpR+Bh/gKBFvpN7f5jv3l4Z0jmGwg2WGaRY3lQo4gnMZdYu6QFnEC7EHSMuOUC/pAXzeU1DadftMgAprp/zG6IgEMaobTKjoIdIJF6Q6iBMaSSGaUSdoE1nGeOjlem1txbysb6np+k7NZyv9oOFJpI4/hax8m5yZdLj25ilXAHUnb2ved7wOgQgB52M854SxerTQ7ZvznqWIf4aFgNhpPPlOXpxpzFYlKS5mnP4rxjhwSucD9/acV4g4u7n/uPbf5Qbn+g2nG43EpqQOdtSfymscds3jt61X8RU3UhHBv3vEcNjGdxYzyhMQVINtD5/nPQvBNF3Oe+gEmWOnTHLbPEGKIfU6X1lNjOPkD5FJl7xLBq7Oz7KTpPNsfxBncohst7KBoPWaxx3GM8tcLU8YqsdjOp4BxRzYML/j9552tZ0axvcbi/SdjhsYtHV2UsMpIDI6kE65KiaZha+VtbTdjnL+3pKAOnUETynjVHK7j+ViD6T0vhWJR1+Tbfe+84TxZR/wARVVRqxW3qutoi5PTvBtPLgcOP/rB99fzlu05zwXxXPTXDOmV6VNTbX6fpBOm86abjlZq8gtIZYYntNPNMlmSQyCGdYMCAu4G1ovVpdI46d4vVPKAnlEyFyj93mQAIfaNou0WQco2gmVGVNYdIJIdYEhCSImEwJoJxtfjFWti8RhmRXogZbWsw+UHNm5zskE59kWhWxGIYXzFQOV/kW9vac/JeHfwSW1y3B8CaeNRCb2Nx5Wved7xCmzoUBsTOO4Ji/j40ViAujgDsDv56/adsLsbDX8/6Tjbt1k1dOLHhCkCz13LNe/IAW2Hf2lN4gwGFZzUOQud2zFdgAPlGl7AbT1KpgMwsWPkNF9h+cpsR4aw18zopO5vrLLlF/wA5PLMLwr+8uAqs6rYAi4A8jPUPDfC1oKVHTWM4GigHyIFXra0ssMgHtG7aupjLpxmOUfEcH+K84Di/hoo+dACrEtl5rrrbqJ33Gn/75A5RLiVL/t5i4W1rdddpvHpnOS1wdNhcZkYdbazoDxhDS+ElO+bRi1tBtoDMp08x1se4jyURG09Vj4UQJtfob6W7WOoguN0cuPpOQLMF30BNiNT7Sz4LR1BG+3mN7GL+NsPmAy/UtN29ALyxiznQnhiu3/VayFSobDqbdwy6/iPSd2wnA/2aY5a7uz61adPJm6oXBHsRad6wvOmPTl5O2pEiSZJqbc0HECRDNBOIAGi1SMvF6q6wBen3Eya+HMgCpr0N42i/8RZAAY2hmVFpRhDAKTCqYBlm2E0JsnWBNZQ+LcA9VFVDrmuRzI206y9UTVRA1ri9j6+kznjvF08WXrltyFTAfCagyKBkujjnrc5vO9h6zpsA/Myk4iz3OxC37Mdb6wyYkIhJOyg3955q9NnP9X2IxQHOc1xjiyoCT8xOw/KJ47iZCZ2uByvzlTwpzVfO2w+np5zXazWLpeAYmpUYmoMiKoKr1udzLsY+mMwvtKV8hpkO1gwsCCQR5Ec5w1Vnw1XN/eHdTurm4IP4HylhlYvMS3xsR8jC5vz0AG94XF8HFQMpdCCpzHNa1tj6WlFguK0KOdw+d2Fguotfe55RHG8RSsVsMqqD8qggG51vbf1nTGcOeWXKtwWIK87iXWHxV7CVz4OwuFIBF9tothsXkcBuv5yWJMnp3AqNgGJ6RLxIrOzIuXZFa5IOQsSwFutl9LydbF5MPSK71HRV+7H7KfeWeE4G1Wq9RiApYAHmbKL2Es+mbdXdC8DcDSgaropAY5QTqSB07AzqTvJqgVQoFgJpp1k045X2u2iJC02TN8pWQmEEwhmgGgBdos5h3aAcQBWmSOvebgCptrG0MSpntGkbW0yplIdYshMYQwDrtMkVMmsCQkpG8wtAHicElQWceo0b3E5irRsjITfQqfQzrlnMca+R2883+7X8bzl5ceNu3iy505Hxy7XpKLhAibbXsLwPBuNUaKha5Zemh2t2nQVKa1kZG1K/cQuE4RTemUdAbaa79L35TEymtV29d3ZdfEmCdfkzN9j9/WVnEMZg3Bul++bX8Jb8E4W2FYoKS1qTNe5IFRL3BBBFnHzHUW8oTEY+gFGfAgfLawZGIJIAFjbXTXp3jqrz9PPcV8BtER79yJY8F4Mbg5CdM2t7WHOWFbiuFS/+GdTrplQ8ttGm6/jOrUQpRwvwnKLTRr5gozZmOwPa1vWalv0xf4rsT4zw6XRKDORpmNgt/Im9pzec1nva1yPSdBw7wp8rVKhuSDlHex1M14T4ZnqZm+hfmY9bbDzM3bpz1b26mjhj/hKZ/gDVG8zot/S/vPQeFJakO5Y+5nHYYFnZ9i2gHQAaCdxTTKiqdwov521+8Ys51pjBtNsJlp1c2iZFpK8G73kGMO8XqW6yTtptAVT09pUQcgc4F3tJ1Ab2i7iFZnEyRyzIAqbxhNYlSf3jNJ/OZDqGHDRRDCo8BlDCgxdWk0MA4E2DIqZKBtZReJxbI48m8r6H3/GXiiV/GadwNLg3BHWZz+Nb8fyjl8MbEMLa/sehlphlOrDrqPOV2HAptla5Q2ynf/Se46y6wDjMVI3Glj99Z5nqlQxDDXWxHOcpxXiVcXF847i86/H4QHTeczxPgLm5zWv3MsrW9dOVqY9zpZR5CWHBagJsdzv++cDX4BUB+rTe5285mFwhQk5tBznSWMZW3te8Qq5gUXdvl99CZPh2EFNMibbtyN+kW4XTJfM+xMdWvpYDc3G22nTylc6vPD2HV6xFz8nzne24sPU/hOqrNOc8IrYvbpqeus6FzOmHTjl2ERrNzU0ZplpoNvOSJkTCBNF6h1h6hi1SUDc6bwLm8Kxi5flAhl7mZN5xMgJp0MaRxa1/35xVFjFPvMqapt3jBtpzidOMgwGVN4VXEWU7QwgMAzDBhpLPAMsT4qflWMK3SJ8VbRR3mPJ8a34/lFXXogqb85SYnFvScEEsq/xDcDmGtuBbftOiA001lJjaRJA5Hf16zzY16ssdxNvEAIBUjqdeu5tFMfxkAcj69ZR8Y4fkJKErf6gPpvKKtn11B9dfYzpMZXP2sXFbjBckMbKBbT1+0WOPBYaXtoO3eVSYViRYEX5Ej9ZdcN4Mb/MwUc7akep05ib9ZE9squsLi2ZQij5t2b+UW9tdbCMq6gWS9gNLkknzvK346hsiCwHPmepJ5+cYwx5D1i1JHW+E31Ycyp/EToTOK4TjjSOYC9tx1HOXnBPEVPEu6Kjo6AFla2oJsGVhuPabxv4c8pztbmaYmbaQLzow217QDmSY+kHUYdLwiFUaRdzJu8A7wBOdZEt3k6jjoILOOkDdvL3mSGXtNwEUc+m0OpO+sVXvp94VTpp/SZU3S7mMo+0Rpkd4xTbvAdVoYNbvFEYSZqwGs3ODavrYb9IM0yRdvlB2/mPkJZYamqLe1vx9TM3JdK/iyulAlDld2VAeaBzZn/zZb27kRNaSqgVdh6nzJ5mXmPQvTdV1a2YdyDcD7W9ZQfFBAI5zz+W3b0eLWkmawtFrgb79ZN6lukr8TiBz/X8ZzjshxbDK6320nC8QwhW5BnYYjEnLvcSgr2a950xumMpHP4Z2DidThqmlzoLbdfKUXw7G8M2JNrX1tqfynTtz6GDlnvsAdpeYR7zn8KbmXNGppcS1FqjaERLhlVkfE1ENsqrTHdr5vtce82+KC8tToANyeQHeNYfDCnTSlu1/iOersb29/ssYzlnK8OhXxGqFFcavpmHXbXzlpQxaP9Lgnpsfaedcbe5QD+E7wHFMV8xA1vY+tt/PvOm3PT097jSLu08/4P4lq0mAdi6cwxuR3BOvpOtTjdNiAxyE7X+k36N+tpqZJYedou7coRza2u4gHlQM+Uz8ZmYyJMDdz+7zU1czICIaTU9zFXrhQCdBew8z1hHrrMqcRoZKluusRwyPU+lSF/mOg/rLGq6UBe+Z+RP5CS5SLJscIFIDvlLbLu39JYU0RLnfKNWPLsJUYCmzMHa5duZ/hHbpcwfiDiGUfDQ+c53KtTEzRxRrVb3+UaAS9fa0pvDuGsAx6S3quOskWi0qlvSUPGMMabZh9DE2/wDEnUr+ktEeGZlZSrAEHQg/vSTKe0XG+tcZUrXiOJqHkZZ8U4NUUs1IF1GpX+Ien8X4znTir6G4Ybgggj0OonKY2O8ylDrV5V4moYTE1tYrVqXnSRm0tVcwD1DGGtaLZSTZVLHoASfYTcZpzCtYR9MZawFyeSjUmIJhH0zHIOmhb9B95YYa1MfILHmx1b7y6YuS1wy5PnexqkfKvJAd/XqfQST4vLz1O/a/M9+3KVP95J+nUndj+XXzm3NgAOtzNsmMfVuoMr2e8niH0tArAnGqL50+Gxsf4T/+T2iompkPcP4vWw7WvmUbo2o9OnpOx4bxeniF+Q2fmh3Hl1E4d3zjXcc+sXClSGUlSNiNDNS6TT0lUy6anv1kHb/mcVT45XX+M3HI2YH0O0tcF4nU6VEsf5l29pqWM6XUyKf9bw/84/2mZLtNI/8ASmYWdxboBeOUcHTS2mdura+w2gkrEki8aoWHzGcPa100aqVwiZm9BKLDBq1TM215DH4lqrZR9IlngUCLrIqxq1xTQkb2nJ0WNSrcnnGePY2/y3Av7yHB01vY+dv6yVY7DBaJbbSFFgPzi9N7KBMrVMo1hBC4Ei9Ubg6/veUmKxwvvFzijCrqpjLXDaX58vfl6xfFKjj5lR+mYa+jD9ZWpijtMamp2un+U2+232gI1vDdJwTZ1N9Aj3HrcGLJ4QS12qVB2GX8cssXR+VQf6kB/AiLVHfb4if7P/aDZZvD1FBoGY9Xf8haBxNNFFlsq/8AiLX9f+Yy9N7a1D/pUD9YFeHoTdrt/mN/ttKm1WGzGyLfvy9W5+kl/c7aubnpyHpLllCja3aV7vmJM1tCrCQdoVluRFcQeUsSoXvJATarYTFEKwCZaTAmo2I2khNXmiY2MIkSs2TIBoG8kyQzTIHcUfrPnDYj6TNzJhongfqMsT+YmTJBy3FP/nMveF8vSZMijoV5RbiX6zJkH5c5W3mDlMmQCU+cO20yZAgdvaJJ9RmpkA1XYSS7GZMlQrjdjEU2mTJYgSbxGr9cyZNRKmZtZkyFS5zTTJkgjNTJkAbbyCzJkoYmTJkD/9k="
          alt=""
        />
        <div>
          <h3>Rony Mathew</h3>
          <p>active now</p>
        </div>
      </div>
      <div>
        <span>
          <CallIcon />
        </span>
        <span>
          <VideocamIcon />
        </span>
      </div>
    </div>
  );
};

export default ChatTopBar;