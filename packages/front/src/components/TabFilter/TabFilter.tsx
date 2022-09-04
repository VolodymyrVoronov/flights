import React, { FC } from "react";
import cn from "classnames";

import { ITabFilterProps } from "./TabFilter.props";

import styles from "./TabFilter.module.css";

const TabFilter: FC<ITabFilterProps> = ({
  text,
  isActive,
  onClick,
  className,
  ...props
}): JSX.Element => (
  <button
    className={cn(styles.tabFilter, className, {
      [styles.tabFilterActive]: isActive,
    })}
    {...props}
    onClick={onClick}
    type="button"
  >
    {text}
  </button>
);

export default TabFilter;
