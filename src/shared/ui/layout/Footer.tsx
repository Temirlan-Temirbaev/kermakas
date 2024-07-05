import { FOOTER_LINKS } from "@/shared/constants/layout/footerLinks"


export const Footer = () => {
  return <footer className="w-full h-[90px]">
    <div className="flex w-full max-w-[1200px] mx-auto h-full justify-between items-center">
      <h1 className="text-white100 font-bold text-[42px]">Lorem</h1>
      <div className="flex flex-row items-center gap-x-5">
        {FOOTER_LINKS.map(({Icon}, i) => (
          <div key={`footer-icon-${i}`} className="w-[56px] h-[56px] bg-primary cursor-pointer rounded-full flex items-center justify-center">
            <Icon className={"w-8 h-8 "}  />
          </div>
        ))}
      </div>
    </div>
  </footer>
}