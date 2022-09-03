import { ChangeEvent, DetailedHTMLProps, HTMLAttributes } from "react";

export interface IFilterProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  boxId: number;
  title: string;
  isChecked: boolean;
  onInputChange: () => void;
}
