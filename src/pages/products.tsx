import withLayout from "@/shared/ui/layout/withLayout"
import { Calculator } from "@/widgets/calculator"
import BannerImage from "@/../public/images/products-bg.png"
import WallPanelImage from "@/../public/images/wall-panel.png"
import RoofPanelImage from "@/../public/images/roof-panel.jpg"
import Image from "next/image"
import gsap from "gsap"
import ScrollTrigger from "gsap/dist/ScrollTrigger"
import { useGSAP } from "@gsap/react"
import { UIButton } from "@/shared/ui/UI-Button"
import { useRef } from "react"
import useSWR from "swr"
import { CharacteristicTable, getProducts, IProduct } from "@/entities/product"
import { smoothScrollToElement } from "@/shared/utils/smoothScroll"
gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger)
const ProductsPage = () => {
  const {data, isLoading} = useSWR("/api/getProducts", () => getProducts())
  const bannerRefs = {
    image : useRef<HTMLImageElement | null>(null),
    container : useRef<HTMLDivElement | null>(null),
    title : useRef<HTMLHeadingElement | null>(null),
    paragraph : useRef<HTMLParagraphElement | null>(null),
    button : useRef<HTMLDivElement | null>(null)
  }
  const wallRefs = {
    title : useRef<HTMLHeadingElement | null>(null),
    list : useRef<HTMLUListElement | null>(null),
    container : useRef<HTMLDivElement | null>(null),
    button : useRef<HTMLDivElement | null>(null),
    image : useRef<HTMLImageElement | null>(null),
  }

  const roofRefs = {
    title : useRef<HTMLHeadingElement | null>(null),
    list : useRef<HTMLUListElement | null>(null),
    container : useRef<HTMLDivElement | null>(null),
    button : useRef<HTMLDivElement | null>(null),
    image : useRef<HTMLImageElement | null>(null),
  }

  const tableRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    const {title, paragraph, button, image} = bannerRefs
    if (title.current && paragraph.current && button.current && image.current) {
      gsap.from([title.current, paragraph.current, button.current], {
        opacity: 0,
        x: -300,
        duration: .6,
        ease: "power3.out",
        delay: 0.2,
        stagger : .300,
      });
      gsap.from(image.current, {
        opacity: 0,
        x: 300,
        duration: 1,
        ease: "power3.out",
        delay: 0.2,
      })
    }
  }, {scope : bannerRefs.container})

  useGSAP(() => {
    const {title, list, button, image, container} = wallRefs
    if (title.current && list.current && button.current && image.current) {
      gsap.from([title.current, list.current, button.current], {
        opacity: 0,
        y: 50,
        duration: .6,
        ease: "power3.out",
        delay: 0.2,
        stagger : .300,
        scrollTrigger: {
          trigger: container.current,
          // start: "top 80%",
          toggleActions: "play none none reverse",
          start : "top center",
          end : "bottom center"
        },
      });
      gsap.from(image.current, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
        delay: 0.2,
        scrollTrigger: {
          trigger: container.current,
          // start: "top 80%",
          toggleActions: "play none none reverse",
          start : "top center",
          end : "bottom center"
        },
      })
    }
  }, {scope : wallRefs.container})

  useGSAP(() => {
    const {title, list, button, image, container} = roofRefs
    if (title.current && list.current && button.current && image.current) {
      gsap.from([title.current, list.current, button.current], {
        opacity: 0,
        y: 50,
        duration: .6,
        ease: "power3.out",
        delay: 0.2,
        stagger : .300,
        scrollTrigger: {
          trigger: container.current,
          // start: "top 80%",
          toggleActions: "play none none reverse",
          start : "top center",
          end : "bottom center"
        },
      });
      gsap.from(image.current, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
        delay: 0.2,
        scrollTrigger: {
          trigger: container.current,
          // start: "top 80%",
          toggleActions: "play none none reverse",
          start : "top center",
          end : "bottom center"
        },
      })
    }
  }, {scope : roofRefs.container})
  if (!data || isLoading) return 'Loading'
  const typedProducts: Record<string, IProduct[]> = {};
  data.forEach((product) => {
    typedProducts[product.attributes.type] = []
  })
  data.forEach((product) => {
    typedProducts[product.attributes.type].push(product)
  })

  return <>
    <div className="w-full max-w-[1200px] mx-auto">
      <div className="flex justify-between items-start py-20 min-h-[70vh]" ref={bannerRefs.container}>
        <div className="flex flex-col gap-y-5">
          <h1 className="font-bold text-black text-[50px]" ref={bannerRefs.title}>
            Продукция завода <span className="text-primary">KERMAKAS</span>
          </h1>
          <p className="text-black opacity-50" ref={bannerRefs.paragraph}>
            Отечественный производитель высокотехнологичных строительных материалов с 2009 года. 
          </p>
          <div ref={bannerRefs.button}>
            <UIButton.Secondary
            onClick={() => smoothScrollToElement(wallRefs.container, 2000)}
            className="px-10 rounded-md text-white100 
            font-medium text-xl hover:bg-opacity-0 
            hover:border-primary hover:border-[1px]
            hover:text-primary transition-all delay-50 ease-in
            ">
              Узнать подробнее
            </UIButton.Secondary>
          </div>
        </div>        
        <Image alt="" className="max-w-[50%] h-full" src={BannerImage} ref={bannerRefs.image}/>
      </div>
      <div className="flex justify-between items-start py-20 min-h-[90vh]" ref={wallRefs.container}>
        <Image alt="" className="min-w-[50%]" src={WallPanelImage} ref={wallRefs.image}/>
        <div className="flex flex-col gap-y-5 items-start w-1/2">
          <h1 className="font-bold text-black text-4xl" ref={wallRefs.title}>
            <span className="text-primary">Стеновые</span> сэндвич панели
          </h1>
          <ul ref={wallRefs.list} className="list-disc ml-5 text-black text-opacity-60 text-xl flex flex-col gap-y-3">
            <li>
              Надёжный и долговечный материал
            </li>
            <li>
              Мало весит и поступает с производства в уже готовом виде
            </li>
            <li>
              Металлическая облицовка стеновых сэндвич-панелей защищена цинком и полимерным покрытием.
            </li>
            <li>
              Устойчивы к коррозии и не выгорают на солнце в течение долгого времени
            </li>
          </ul>
          <div ref={wallRefs.button}>
            <UIButton.Secondary
              onClick={() => smoothScrollToElement(tableRef, 2000)}
              className="px-10 rounded-md text-white100 
              font-medium text-xl hover:bg-opacity-0 
              hover:border-primary hover:border-[1px]
              hover:text-primary transition-all delay-50 ease-in
              ">
                Узнать характеристики
            </UIButton.Secondary>
          </div>
        </div>
      </div>
    </div>
    <Calculator />
    <div className="w-full max-w-[1200px] mx-auto">
      <div className="flex justify-between items-start py-20 min-h-[90vh]" ref={roofRefs.container}>
      <div className="flex flex-col gap-y-5 items-start w-1/2">
        <h1 className="font-bold text-black text-4xl" ref={roofRefs.title}>
            <span className="text-primary">Кровельные</span> сэндвич панели
        </h1>
        <ul ref={roofRefs.list} className="list-disc ml-5 text-black text-opacity-60 text-xl flex flex-col gap-y-3">
          <li>
            Надёжный и экономичный материал, из которого можно сделать крышу практически любого объекта 
          </li>
          <li>
            Кровельный материал поступает с производства в уже готовом виде
          </li>
          <li>
            Малый вес, точная геометрия и удобные замки кровельной сэндвич-панели упрощающие и ускоряющие скорость строительства
          </li>
          <li>
            Поверхность выполнена в виде высоких трапециевидных гофр и оснащена дополнительными рёбрами жёсткости
          </li>
        </ul>
        <div ref={roofRefs.button}>
          <UIButton.Secondary
            onClick={() => smoothScrollToElement(tableRef, 1500)}
            className="px-10 rounded-md text-white100 
            font-medium text-xl hover:bg-opacity-0 
           hover:border-primary hover:border-[1px]
           hover:text-primary transition-all delay-50 ease-in
            ">
            Узнать характеристики
          </UIButton.Secondary>
        </div>
      </div>
      <Image alt="" className="max-w-[40%]" src={RoofPanelImage} ref={roofRefs.image}/>
      </div>
      <div className="flex flex-col gap-y-5 mb-5 overflow-x-auto" ref={tableRef}>
        {Object.keys(typedProducts).map(type => (
          <div key={`product-table-${type}`}>
            <h1 className="text-black font-bold text-2xl text-center">{type}</h1>
            <CharacteristicTable products={typedProducts[type]}/>
          </div>
        ))}
      </div>
    </div>
  </>
}

export default withLayout(ProductsPage, {title:"", subTitle:"", children:<></>})
