import { PRODUCTION_PROCESS_SLIDES, IProductionProcessSlide } from "../model"
import { useState } from "react";
import { useSpringCarousel } from "react-spring-carousel"
import ArrowIcon from "@/../public/icons/arrow.svg";

const ProcessSlide = ({id, name, img, number} : {number: number} & IProductionProcessSlide) => {
  const imgBg = {
    background: `url(\'${img}\')`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
  };
  return <div className="w-[390px] h-[450px]">
    <div className="w-full h-[380px] flex items-end justify-start pl-4" style={imgBg}>
      <p className="text-white100 text-opacity-60 font-bold text-[90px]">{number}</p>
    </div>
    <div className="w-full flex items-center justify-center h-[70px]">
      <p className="text-black font-bold text-4xl">{name}</p>
    </div>
  </div>
}

export const ProductionProcess = () => {
  const {
    carouselFragment, 
    slideToNextItem, 
    slideToPrevItem,
    slideToItem,
  } = useSpringCarousel({
    itemsPerSlide: 3,
    withLoop: true,
    freeScroll : true,
    items : PRODUCTION_PROCESS_SLIDES.map((slide, i) => ({
      id: slide.id,
      renderItem: (
        <ProcessSlide {...slide} key={slide.id + slide.name} number={i + 1} />
      )
    }))
  })

  const [activeSlideId, setActiveSlideId] = useState<number>(PRODUCTION_PROCESS_SLIDES[0].id)
  
  return <div className="w-full h-[900px]">
    <div className="w-full max-w-[1300px] overflow-hidden h-full flex flex-col items-center mx-auto pt-6 pb-16">
      <h1 className="text-gray80 font-bold text-[60px] mb-10">
        Процесс <span className="border-b-[4px] border-primary pb-4">производства</span> панелей
      </h1>
      <p className="text-black text-opacity-60 text-xl font-bold text-center mb-10">
        Процессы производства сэндвич-панелей включают в себя методы точной резки, склеивания и отверждения для производства высококачественных панелей с превосходной теплоизоляцией, прочностью и долговечностью.
      </p>
      {carouselFragment}
      <div className="mt-20 flex gap-x-2.5 items-center">
        <ArrowIcon
          className={"w-6 h-6 rotate-180 cursor-pointer"}
          onClick={() => {
            slideToPrevItem();
            setActiveSlideId(prev => (prev === 1 ? PRODUCTION_PROCESS_SLIDES.slice(-1)[0].id : prev))
          }}
        />
        {PRODUCTION_PROCESS_SLIDES.map(slide => {
          const activeStyles = "w-7 bg-gray80"
          return <div 
          className={`w-3 h-3 bg-gray60 cursor-pointer 
            transition-all delay-50 ease-linear
            ${activeSlideId === slide.id && activeStyles}`}
          onClick={() => {
            slideToItem(slide.id - 1);
            setActiveSlideId(slide.id);
          }}
          key={`slide-btn-${slide.id}-${slide.name}`}>
          </div>
        })}
        <ArrowIcon
        onClick={() => {
          slideToNextItem();
          setActiveSlideId(prev => (prev === PRODUCTION_PROCESS_SLIDES.slice(-1)[0].id ? 1 : prev + 1))
        }}
          className={"w-6 h-6 cursor-pointer"}
        />
      </div>
    </div>
  </div>
}