import ArrowIcon from "@/../public/icons/arrow.svg"
import { useSpringCarousel } from "react-spring-carousel"
import { UIButton } from "@/shared/ui/UI-Button";
import { useRouter } from "next/router";
import { IProject, ProjectSlide } from "@/entities/project";

export const OurProjects = ({initialData} : {initialData: IProject[]}) => {
  const {
    carouselFragment, 
    slideToNextItem, 
    slideToPrevItem,
  } = useSpringCarousel({
    itemsPerSlide: 3,
    withLoop: true,
    items : initialData.map((slide) => ({
      id: slide.id,
      renderItem: (
        <ProjectSlide key={`project-slide-${slide.id}`} {...slide} />
      )
    }))
  })
  const router = useRouter();
  return <div className="w-full h-[600px] bg-white100">
    <div className="w-full max-w-[1200px] h-full pb-10 pt-5 mx-auto">
      <div className="flex items-center justify-between w-full mb-20">
        <h1 className="font-bold text-[50px] text-black">
          Наши <span className="text-primary">проекты</span>
        </h1>
        <div className="flex items-center flex-row gap-x-4">
          <div onClick={slideToPrevItem} className="w-12 h-12 border-primary border-[1px] rounded-full flex items-center justify-center cursor-pointer">
            <ArrowIcon className={"w-[18px] h-[18px] rotate-180"} />
          </div>
          <div onClick={slideToNextItem} className="w-12 h-12 border-primary border-[1px] rounded-full flex items-center justify-center cursor-pointer">
            <ArrowIcon className={"w-[18px] h-[18px]"}/>
          </div>
        </div>
      </div>
      <div className="overflow-hidden w-full">
        {carouselFragment}
      </div>
      <div className="w-full flex justify-end">
        <UIButton.Primary className="w-[280px]" onClick={() => router.push("/projects")}>
          <p className="text-white100 font-bold text-xl">
            Все проекты
          </p>
        </UIButton.Primary>
      </div>
    </div>
  </div>
}