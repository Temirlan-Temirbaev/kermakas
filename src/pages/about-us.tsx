import BannerImage from "@/../public/images/products-bg.png"
import { BannerProps } from "@/shared/ui/layout/Banner"
import withLayout from "@/shared/ui/layout/withLayout"
import { UIButton } from "@/shared/ui/UI-Button"
import { smoothScrollAlmostToBottom } from "@/shared/utils/smoothScroll"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import ScrollTrigger from "gsap/dist/ScrollTrigger"
import Image from "next/image"
import { useRouter } from "next/router"
import { useRef } from "react"

gsap.registerPlugin(useGSAP)
gsap.registerPlugin(ScrollTrigger)

const AboutUs = () => {
  const router = useRouter()
  const bannerRefs = {
    containerRef : useRef<HTMLDivElement | null>(null),
    titleRef : useRef<HTMLParagraphElement | null>(null),
    subTitleRef : useRef<HTMLParagraphElement | null>(null),
    buttonRef :  useRef<HTMLDivElement | null>(null)
  }

  const productionRefs = {
    title : useRef<HTMLHeadingElement | null>(null),
    list : useRef<HTMLUListElement | null>(null),
    container : useRef<HTMLDivElement | null>(null),
    button : useRef<HTMLDivElement | null>(null),
    image : useRef<HTMLImageElement | null>(null),
    smallImage : useRef<HTMLImageElement | null>(null),
  }

  useGSAP(() => {
    const {titleRef, subTitleRef, buttonRef, containerRef} = bannerRefs
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
  }, {scope : bannerRefs.containerRef})

  useGSAP(() => {
    const {title, list, button, image, container, smallImage} = productionRefs
    if (title.current && list.current && button.current && image.current) {
      gsap.from([title.current, list.current, button.current], {
        opacity: 0,
        x: -300,
        duration: .6,
        ease: "power3.out",
        delay: 0.2,
        stagger : .300,
        scrollTrigger: {
          trigger: container.current,
            toggleActions: "play pause resume none",
            start : "top center",
            end : "bottom center"
        }
      });
      gsap.from([image.current, smallImage.current], {
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        delay: 0.2,
        scrollTrigger: {
          trigger: container.current,
            toggleActions: "play pause resume none",
            start : "top center",
            end : "bottom center"
        }
      })
    }
  }, {scope : productionRefs.container})

  return <div className="w-full">
    <div className="w-full max-w-[1200px] mx-auto">
      <div className="flex flex-col gap-y-5 min-h-[80vh] justify-center items-center w-full p-5" ref={bannerRefs.containerRef}>
        <h1 className="text-3xl font-bold text-black text-center" ref={bannerRefs.titleRef}>
          ЗАВОД ПО ПРОИЗВОДСТВУ СЭНДВИЧ-ПАНЕЛЕЙ <span className="text-primary">KERMAKAS</span>
        </h1>
        <p className="text-black opacity-70 px-5 text-center text-sm sm:text-base" ref={bannerRefs.subTitleRef}>
        Завод по производству сэндвич-панелей «KERMAKAS» - отечественный производитель высокотехнологичных строительных материалов с 2009 года. Мы выпускаем стеновые и кровельные сэндвич-панели с надёжным замком системой Z-LOCK, используя современное оборудование и последние технологические инновации. Автоматизированное производство сэндвич-панелей расположено на территорий Промзоны 71 разъезда в пос. Боралдай Алматинской области. 
        </p>
        <div ref={bannerRefs.buttonRef}>
          <UIButton.Secondary 
            onClick={() => smoothScrollAlmostToBottom(2000, 200)}
            className="px-20 transition-all delay-50 ease-linear hover:bg-opacity-90 rounded-[10px]">
              <p className="text-white100 font-bold text-base sm:text-lg">
                Связаться с нами
              </p>
          </UIButton.Secondary>
        </div>
      </div>
      <div className=" w-full py-10 flex justify-between px-5" ref={productionRefs.container}>
        <div className="flex flex-col gap-y-[15px] w-full md:w-1/2 items-center justify-center">
          <h1
          ref={productionRefs.title}
          className="text-black font-bold text-5xl mb-5">
            Наша 
            <span className="text-primary">
              {' '}продукция
            </span>
          </h1>
          <Image alt="" className="flex md:hidden " src={BannerImage} ref={productionRefs.smallImage}/>
          <ul 
            ref={productionRefs.list}
            className="list-disc ml-5 text-black text-opacity-60 text-xl flex flex-col gap-y-3 mb-5">
            <li>
              Собственные линии производства
            </li>
            <li>
              Быстрые сроки
            </li>
            <li>
              Высокое качество
            </li>
            <li>
              Низкая стоимость от производителя
            </li>
            <li>
              Цена от завода производителя
            </li>
          </ul>
          <div ref={productionRefs.button}>
            <UIButton.Secondary 
              onClick={() => router.push("/products")}
              className="px-20 transition-all delay-50 ease-linear hover:bg-opacity-90 rounded-[10px]">
                <p className="text-white100 font-bold text-lg">
                  Узнать подробнее
                </p>
            </UIButton.Secondary>
          </div>
        </div>
        <Image alt="" className="hidden md:flex max-w-[50%] h-full" src={BannerImage} ref={productionRefs.image}/>
      </div>
    </div>
  </div>
}

const bannerProps : BannerProps = {
  title : "",
  subTitle : "",
  children : <></>
}

export default withLayout(AboutUs, bannerProps)