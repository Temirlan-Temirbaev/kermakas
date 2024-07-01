import { UIButton } from "../UI-Button"
import PhoneIcon from "@/../public/icons/phone.svg";
import MailIcon from "@/../public/icons/mail.svg";
import LocationIcon from "@/../public/icons/location.svg";

export const Contacts = () => {
  return <div className="w-full min-h-[700px]">
    <div className="flex mx-auto justify-between w-full h-full max-w-[1700px] py-7">
      <div>
        <h1 className="text-white100 font-bold text-[50px] mb-[60px]">Обсудить проект</h1>
        <div className="flex flex-col gap-y-[30px]">
          <input type="text" className="w-[470px] h-[50px] pl-2" placeholder="Ваше имя"/>
          <input type="text" className="w-[470px] h-[50px] pl-2" placeholder="Номер телефона"/>
          <input type="text" className="w-[470px] h-[50px] pl-2" placeholder="Почта"/>
          <input type="text" className="w-[470px] h-[50px] pl-2" placeholder="Сообщение"/>
          <UIButton.Primary className="hover:bg-opacity-0 hover:border-primary hover:border-[1px] delay-50 transition-all ease-linear">
            <p className="text-white100 font-bold text-2xl">Оставить заявку</p>
          </UIButton.Primary>
        </div>
      </div>
      <div className="min-w-[50%]">
        <h1 className="text-white100 font-bold text-[50px] mb-7">
          Свяжитесь с <span className="text-primary">нами</span>
        </h1>
        <div className="bg-primary">
          <iframe
            className="w-full min-h-[460px]"
            src="https://maps.google.com/maps?amp;hl=ru&amp;q=%E2%80%8B%D0%A3%D0%BB%D0%B8%D1%86%D0%B0%20%D0%9D%D0%B0%D0%B9%D0%BC%D0%B0%D0%BD%D0%B1%D0%B0%D0%B5%D0%B2%D0%B0,%20110+(Bosco)&amp;t=&amp;z=17&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
          </iframe>
          <div className="flex flex-col gap-y-[10px] pl-[30px] py-[30px]">
            <div className="flex gap-x-3 items-center">
              <PhoneIcon className={"w-9 h-9 fill-white100"}/>
              <p className="font-medium text-lg text-white100">+7 777 777 77 77</p>
            </div>
            <div className="flex gap-x-3 items-center">
              <MailIcon className={"w-9 h-9 fill-white100"}/>
              <p className="font-medium text-lg text-white100">email@mail.kz</p>
            </div>
            <div className="flex gap-x-3 items-center">
              <LocationIcon className={"w-9 h-9 fill-white100"}/>
              <p className="font-medium text-lg text-white100">Астана, Адрес</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
}