import { useState } from "react";
import { useSpringCarousel } from "react-spring-carousel"
import ArrowIcon from "@/../public/icons/arrow.svg";
import { IProductionProcess } from "@/entities/production-process";
import { ProcessSlide } from "@/entities/production-process";



export const ProductionProcess = ({initialData} : {initialData : IProductionProcess[]}) => {
  console.log(initialData);
  
  const [activeSlideId, setActiveSlideId] = useState<number>(initialData[0].id)
  const {
    carouselFragment, 
    slideToNextItem, 
    slideToPrevItem,
    slideToItem,
  } = useSpringCarousel({
    itemsPerSlide: 3,
    withLoop: true,
    items : initialData.map((slide, i) => {
      return {
        id: slide.id,
        renderItem: <ProcessSlide key={`process-slide-${slide.attributes.title}`} {...slide} number={i+1} />
      }
    }) 
  })  
  return <div className="w-full">
    <div className="w-full max-w-[1200px] overflow-hidden h-full flex flex-col items-center mx-auto pt-6 pb-16">
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
            
            setActiveSlideId(prev => (prev === 1 ? initialData.slice(-1)[0].id : prev - 1))
          }}
        />
        {initialData.map(slide => {
          const activeStyles = "w-7 bg-gray80"
          return <div 
          className={`w-3 h-3 bg-gray60 cursor-pointer 
            transition-all delay-50 ease-linear
            ${activeSlideId === slide.id && activeStyles}`}
          onClick={() => {
            slideToItem(slide.id - 1);
            setActiveSlideId(slide.id);
          }}
          key={`slide-btn-${slide.id}-${slide.attributes.title}`}>
          </div>
        })}
        <ArrowIcon
        onClick={() => {
          slideToNextItem();
          setActiveSlideId(prev => (prev === initialData.slice(-1)[0].id ? 1 : prev + 1))
        }}
          className={"w-6 h-6 cursor-pointer"}
        />
      </div>
    </div>
  </div>
}