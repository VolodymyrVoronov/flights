import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface ILogoProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  logoSrc: string;
  logoAlt: string;
}
