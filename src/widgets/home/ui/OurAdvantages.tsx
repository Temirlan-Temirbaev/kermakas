import { OUR_ADVANTAGES } from "../model"

export const OurAdvantages = () => {
  return <div className="w-full min-h-[900px] bg-white95 pt-5 pb-10">
    <div className="w-full max-w-[1200px] mx-auto flex flex-col items-center">
      <div className="w-full flex justify-start mb-5">
        <h1 className={"font-bold text-[50px] text-black"}>
          Почему выбирают <span className={"text-primary"}>нашу компанию</span>
        </h1>
      </div>
      
      <div className="w-full justify-center flex gap-x-[30px] gap-y-8 flex-wrap mx-auto">
        {OUR_ADVANTAGES.map(({title, content, Icon}, i) => {
          return <div 
          className="w-[30%] h-[370px] bg-white100 border-[1px] border-gray40 rounded-xl pl-4 relative pt-14"
          key={`advantage-${i}`}>
            <div className="w-[64px] h-[64px] rounded-full flex items-center justify-center bg-white95 absolute top-0 left-10 -translate-y-[32px]">
              <div 
              className="w-[48px] h-[48px] rounded-full flex items-center justify-center bg-primary">
                <Icon className="w-5 h-5" />
              </div>
            </div>
            <h1 className="text-black font-bold text-2xl">
              {title}
            </h1>
            <p className="text-black opacity-60 font-medium text-lg">
              {content}
            </p>
          </div>
        })}
      </div>
    </div>
  </div>
}