import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface ITicketsProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  tickets: ITicket[];
}
