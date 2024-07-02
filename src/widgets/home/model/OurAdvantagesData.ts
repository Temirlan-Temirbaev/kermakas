import { SVGLineElementAttributes } from "react";
import Advantage1Icon from "@/../public/icons/advantages/advantage-1.svg";
interface OurAdvantage {
  title : string;
  content: string;
  Icon: (props: SVGLineElementAttributes<SVGLineElement>) => JSX.Element;
}

export const OUR_ADVANTAGES: OurAdvantage[] = [
  {
    title: "Lorem Ipsum",
    content: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    Icon : Advantage1Icon
  },
  {
    title: "Lorem Ipsum",
    content: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    Icon : Advantage1Icon
  },
  {
    title: "Lorem Ipsum",
    content: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    Icon : Advantage1Icon
  },
  {
    title: "Lorem Ipsum",
    content: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    Icon : Advantage1Icon
  },
  {
    title: "Lorem Ipsum",
    content: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    Icon : Advantage1Icon
  },
  {
    title: "Lorem Ipsum",
    content: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    Icon : Advantage1Icon
  }
]