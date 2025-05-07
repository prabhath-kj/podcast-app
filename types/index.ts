import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};


export type Podcast = {
  _id: string
  title: string
  image: string
  channel: string
}


export type GetUserSelectionResponse = {
  userSelection: Podcast[]
}
