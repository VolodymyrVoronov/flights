import { FC, useEffect, useState } from "react";
import cn from "classnames";

import Filter from "../Filter/Filter";

import { IFiltersProps } from "./Filters.props";

import styles from "./Filters.module.css";

const filtersData: IFiltersData[] = [
  { id: 111, title: "All", checked: false },
  { id: 222, title: "No stops", checked: false },
  { id: 333, title: "1 stop", checked: false },
  { id: 444, title: "2 stops", checked: false },
  { id: 555, title: "3 stops", checked: false },
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

export default Filters;
