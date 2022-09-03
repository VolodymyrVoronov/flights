import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface IFiltersProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  onFlightsFiltersChange: (flights: IFiltersData[]) => void;
}
