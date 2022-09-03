import { FC } from "react";
import cn from "classnames";

import { IFilterProps } from "./Filter.props";

import styles from "./Filter.module.css";

const Filter: FC<IFilterProps> = ({
  boxId,
  title,
  isChecked,
  onInputChange,
  className,
  ...props
}): JSX.Element => {
  return (
    <div className={cn(styles.filterContainer, className)} {...props}>
      <label className={styles.filterBox} htmlFor={boxId.toString()}>
        <input
          className={styles.filterBoxInput}
          type="checkbox"
          role="checkbox"
          id={boxId.toString()}
          onChange={onInputChange}
          name={title}
          checked={isChecked}
        />
        <p className={styles.filterBoxTitle}>{title}</p>
      </label>
    </div>
  );
};

export default Filter;
