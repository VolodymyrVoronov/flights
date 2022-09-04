import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface ITabFilterProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  text: string;
  isActive: boolean;
  onClick: () => void;
}
