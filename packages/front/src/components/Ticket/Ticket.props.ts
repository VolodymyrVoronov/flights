import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface ITicketProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  price: number;
  carrier: string;
  segments: ISegment[];
}
