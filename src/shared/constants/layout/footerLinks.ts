import TelegramIcon from "@/../public/icons/telegram.svg";
import WhatsappIcon from "@/../public/icons/whatsapp.svg";
import InstagramIcon from "@/../public/icons/instagram.svg";
import { SVGLineElementAttributes } from "react";

type FooterLink = {
  path: string;
  Icon: (props: SVGLineElementAttributes<SVGLineElement>) => JSX.Element;
};

export const FOOTER_LINKS: FooterLink[] = [
  {
    path: "/",
    Icon: TelegramIcon,
  },
  {
    path: "/",
    Icon: WhatsappIcon,
  },
  {
    path: "/",
    Icon: InstagramIcon,
  },
];
