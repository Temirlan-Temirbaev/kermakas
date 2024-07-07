import { DEFAULT_BORDER } from "@/shared/constants/layout/borderStyle"
import { Header } from "./Header"
import { UIButton } from "../UI-Button"
import { PropsWithChildren, useEffect, useRef } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import ScrollTrigger from "gsap/dist/ScrollTrigger"
gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);
export interface BannerProps extends PropsWithChildren {
  title : string
  subTitle : string
  button? : string
}
export const Banner = ({title, subTitle, button, children} : BannerProps) => {
  const bannerBgStyles = {
    background: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(\'/images/banner.jpg\')',
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };
  const containerRef = useRef<HTMLDivElement | null>(null)
  const titleRef = useRef<HTMLParagraphElement | null>(null)
  const subTitleRef = useRef<HTMLParagraphElement | null>(null)
  const buttonRef = useRef<HTMLDivElement | null>(null);
  useGSAP(() => {
    if (titleRef.current && subTitleRef.current && buttonRef.current) {
      gsap.from([titleRef.current, subTitleRef.current, buttonRef.current], {
        opacity: 0,
        y: 50,
        duration: .600,
        ease: "power3.out",
        delay: 0.5,
        stagger : .100,
        scrollTrigger: {
          trigger: containerRef.current,
            toggleActions: "play pause resume reset",
            start : "top center",
            end : "bottom center"
        }
      });
    }
  }, {scope : containerRef})

  if (children) {
    return <div style={bannerBgStyles}>
      <Header />
      <div className={`w-full mx-auto max-w-[1200px] border-x-[1px] ${DEFAULT_BORDER}`}>
        {children}
      </div>
    </div>
  }

  return <div style={bannerBgStyles} ref={containerRef}>
    <Header />
    <div className={`w-full mx-auto  max-w-[1200px] border-x-[1px] ${DEFAULT_BORDER} h-[840px] flex flex-col justify-center items-center`}>
      <h1 
      ref={titleRef}
      className="text-[36px] font-bold text-white100 mb-5 text-center">
        {title}
      </h1>
      <h4
      ref={subTitleRef}
       className="mb-5 text-white90 text-opacity-70 text-lg text-center">
        {subTitle}
        </h4>
      {button && <div ref={buttonRef}><UIButton.Primary 
      className="w-[400px] transition-all delay-50 ease-linear hover:bg-opacity-0 hover:border-[2px] hover:border-primary rounded-[10px]">
        <p className="text-white100 font-bold text-2xl">{button}</p>
      </UIButton.Primary></div>}
    </div>
    <div className={`w-full h-[120px]  border-t-[1px] ${DEFAULT_BORDER}`}>
      <div className={`w-full mx-auto  max-w-[1200px] h-full border-x-[1px] ${DEFAULT_BORDER}`}></div>
    </div>
  </div>
}