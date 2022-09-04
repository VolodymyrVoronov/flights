import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface ITabsFilterProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  onTabsFilterChange: (flights: ITabsFilterData[]) => void;
}
