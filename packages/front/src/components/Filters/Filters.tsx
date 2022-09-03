import { FC } from "react";
import cn from "classnames";

import { IFiltersProps } from "./Filters.props";

import styles from "./Filters.module.css";

const Filters: FC<IFiltersProps> = ({ className, ...props }): JSX.Element => {
  return (
    <div className={cn(styles.filtersContainer, className)} {...props}>
      Filters
    </div>
  );
};

export default Filters;
