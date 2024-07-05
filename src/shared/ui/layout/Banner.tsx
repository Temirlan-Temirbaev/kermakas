import { DEFAULT_BORDER } from "@/shared/constants/layout/borderStyle"
import { Header } from "./Header"
import { UIButton } from "../UI-Button"

export interface BannerProps {
  title : string
  subTitle : string
  button? : string
}

export const Banner = ({title, subTitle, button} : BannerProps) => {
  const bannerBgStyles = {
    background: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(\'/images/banner.jpg\')',
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };
  return <div style={bannerBgStyles}>
    <Header />
    <div className={`w-full mx-auto  max-w-[1200px] border-x-[1px] ${DEFAULT_BORDER} h-[840px] flex flex-col justify-center items-center`}>
      <h1 className="text-[36px] font-bold text-white100 mb-5 text-center">{title}</h1>
      <h4 className="mb-5 text-white90 text-opacity-70 text-lg text-center">{subTitle}</h4>
      {button && <UIButton.Primary 
      className="w-[400px] transition-all delay-50 ease-linear hover:bg-opacity-0 hover:border-[2px] hover:border-primary rounded-[10px]">
        <p className="text-white100 font-bold text-2xl">{button}</p>
      </UIButton.Primary>}
    </div>
    <div className={`w-full h-[120px]  border-t-[1px] ${DEFAULT_BORDER}`}>
      <div className={`w-full mx-auto  max-w-[1200px] h-full border-x-[1px] ${DEFAULT_BORDER}`}></div>
    </div>
  </div>
}