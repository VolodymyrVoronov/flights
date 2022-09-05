import { FC, memo, useEffect, useState } from "react";
import cn from "classnames";

import Filter from "../Filter/Filter";

import { IFiltersProps } from "./Filters.props";

import styles from "./Filters.module.css";

const filtersData: IFiltersData[] = [
  { id: 111, title: "All", checked: false, type: "all" },
  { id: 222, title: "No stops", checked: false, type: "no_stops" },
  { id: 333, title: "1 stop", checked: false, type: "one_stop" },
  { id: 444, title: "2 stops", checked: false, type: "two_stops" },
  { id: 555, title: "3 stops", checked: false, type: "three_stops" },
];

const Filters: FC<IFiltersProps> = ({
  onFlightsFiltersChange,
  className,
  ...props
}): JSX.Element => {
  const [filters, setFilters] = useState<IFiltersData[]>(filtersData);

  const onInputChange = (id: number): void => {
    setFilters(
      filters.map((filter) => {
        if (filter.id === id) {
          if (filter.type === "all" && !filter.checked) {
            return {
              ...filter,
              checked: true,
              ...filters.map((f) => (f.checked = true)),
            };
          }
          if (filter.type === "all" && filter.checked) {
            return {
              ...filter,
              checked: false,
              ...filters.map((f) => (f.checked = false)),
            };
          }
        }

        if (filter.id === id) {
          return {
            ...filter,
            checked: !filter.checked,
          };
        }
        return filter;
      })
    );
  };

  useEffect(() => {
    onFlightsFiltersChange(filters);
  }, [filters]);

  return (
    <div className={cn(styles.filtersContainer, className)} {...props}>
      {filters.map(({ id, title, checked }) => (
        <Filter
          key={id}
          boxId={id}
          title={title}
          isChecked={checked}
          onInputChange={() => onInputChange(id)}
        />
      ))}
    </div>
  );
};

export default memo(Filters);
