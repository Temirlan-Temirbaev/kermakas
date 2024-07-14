import { DEFAULT_BORDER } from "@/shared/constants/layout/borderStyle"
import { HEADER_LINKS } from "@/shared/constants/layout/headerLinks"
import Link from "next/link"
import { useRouter } from "next/router"
import { IContact } from "./contact"

export const Header = ({contacts} : {contacts : IContact}) => {
  const router = useRouter();
  const {phone} = contacts.attributes
  return <header className={`w-full h-[120px] border-b-[1px]  ${DEFAULT_BORDER}`}>
    <div className={`max-w-[1200px] w-full h-full mx-auto  border-x-[1px]  ${DEFAULT_BORDER} flex items-center justify-between`}>
      <h1 className="ml-5 text-3xl text-white100">KERMAKAS</h1>
      <nav className="flex gap-x-8">
        {HEADER_LINKS.map(link => {
          const activeStyles = "opacity-100 underline"
          const inactiveStyles = "opacity-70"
          return (
            <Link key={link.path} href={link.path}>
              <p 
              className={`font-normal 
              text-lg text-white100 
              transition-all ease-linear delay-50
              hover:opacity-100 hover:underline
              ${router.pathname === link.path ? activeStyles : inactiveStyles}`}>
                {link.title}
              </p>
            </Link>
            )
          }
        )}
      </nav>
      <a 
        href={`tel:${phone}`} 
        className="underline text-lg text-white100 font-bold mr-3">
        {phone}
      </a>
    </div>
  </header>
}