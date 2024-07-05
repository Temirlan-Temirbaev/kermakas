import { IProductionProcess } from "../model";

export const ProcessSlide = ({attributes, number} : {number: number} & IProductionProcess) => {
  const {title, image} = attributes;
  const imgBg = {
    background: `url(\'${process.env.NEXT_PUBLIC_API_BASE_URL}${image.data.attributes.url}\')`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };
  return <div className="w-[390px] h-[450px]">
    <div className="w-full h-[380px] flex items-end justify-start pl-4" style={imgBg}>
      <p className="text-white100 text-opacity-60 font-bold text-[90px]">{number}</p>
    </div>
    <div className="w-full flex items-center justify-center h-[70px]">
      <p className="text-black font-bold text-4xl">{title}</p>
    </div>
  </div>
}