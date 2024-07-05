import { useEffect, useRef } from "react";
import { IProject } from "../model";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useRouter } from "next/router";

gsap.registerPlugin(ScrollTrigger);
export const ProjectSlide = ({id, attributes} : IProject) => {
  const router = useRouter()
  const container = useRef<HTMLDivElement>(null)
  const {title} = attributes;
  const {url} = attributes.image.data.attributes;
  const imgBg = {
    background: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(\'${process.env.NEXT_PUBLIC_API_BASE_URL}${url}\')`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };
  useEffect(() => {
    if (container.current) {
      // Animation using ScrollTrigger
      gsap.fromTo(
        container.current.querySelector(".project-title"),
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.inOut",
          scrollTrigger: {
            trigger: container.current,
            start: "top 80%", // Adjust start position as needed
            toggleActions: "play none none reverse",
          },
        }
      );
    }
  }, []);

  return <div 
  onClick={() => router.push(`/project/${id}`)}
  ref={container} 
  className="w-[100%] h-[300px] cursor-pointer" style={imgBg}>
    <div className="w-full h-full p-3">
      <h1 className="project-title text-white100 font-bold text-3xl">{title}</h1>
    </div>
  </div>
}