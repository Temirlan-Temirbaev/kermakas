import { IProject } from "../model";

export const ProjectSlide = ({id, attributes} : IProject) => {
  const {title, description} = attributes;
  const {url} = attributes.image.data.attributes;
  const imgBg = {
    background: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(\'${process.env.NEXT_PUBLIC_API_BASE_URL}${url}\')`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };
  return <div className="w-[100%] h-[300px]" style={imgBg}>
    <div className="hidden hover:flex w-full h-full">
      <h1>{title}</h1>
    </div>
  </div>
}