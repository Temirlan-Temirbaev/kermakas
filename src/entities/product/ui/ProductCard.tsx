import { useRouter } from "next/router"
import { IProduct } from "../model"
import { UIButton } from "@/shared/ui/UI-Button"
import ArrowIcon from "@/../public/icons/arrow.svg"

export const ProductCard = ({name, img, thickness, width, length, id} : IProduct) => {
  const router = useRouter()
  return <div className="w-1/3 min-h-[558px] relative bg-white100">
    <img src={img} alt="" className="w-full max-h-[267px]" />
    <div className="pl-5 py-3">
      <h1 className="text-3xl font-bold text-black mb-7">{name}</h1>
      <p className="text-lg font-normal text-black opacity-60 mb-1">Стандартная ширина панели: {width}мм</p>
      <p className="text-lg font-normal text-black opacity-60 mb-1">Длина панели: {length}м</p>
      <p className="text-lg font-normal text-black opacity-60">Стандартная толщина панели: {thickness}мм</p>
    </div>
    <UIButton.Standard 
      onClick={() => router.push(`/product/${id}`)}
      className="absolute bottom-0 left-0 w-full h-[66px] border-t-2 border-gray40">
      <div className="flex gap-x-1 items-center">
        <p className="text-primary font-normal text-lg">Подробнее</p>
        <ArrowIcon className={"w-[18px] h-[18px] fill-primary -rotate-45"} />
      </div>
    </UIButton.Standard>
  </div>
}