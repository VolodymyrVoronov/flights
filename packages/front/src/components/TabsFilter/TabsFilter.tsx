import React, { FC, memo, useEffect, useState } from "react";
import cn from "classnames";

import TabFilter from "../TabFilter/TabFilter";

import { ITabsFilterProps } from "./TabsFilter.props";

import styles from "./TabsFilter.module.css";

const tabsFilterData: ITabsFilterData[] = [
  { id: 111, text: "The cheapest", checked: true, type: "cheapest" },
  { id: 222, text: "The fastest", checked: false, type: "fastest" },
  { id: 333, text: "The optimal", checked: false, type: "optimal" },
];

const TabsFilter: FC<ITabsFilterProps> = ({
  onTabsFilterChange,
  className,
  ...props
}): JSX.Element => {
  const [tabsFilter, setTabsFilter] =
    useState<ITabsFilterData[]>(tabsFilterData);

  const onTabsFilterClick = (id: number): void => {
    setTabsFilter(
      tabsFilter.map((filter) => {
        if (filter.id === id) {
          return {
            ...filter,
            checked: !filter.checked,
          };
        } else {
          return {
            ...filter,
            checked: false,
          };
        }
      })
    );
  };

  useEffect(() => {
    onTabsFilterChange(tabsFilter);
  }, [tabsFilter]);

  return (
    <div className={cn(styles.tabsFilterContainer, className)} {...props}>
      {tabsFilter.map(({ id, text, checked }) => (
        <TabFilter
          key={id}
          text={text}
          isActive={checked}
          onClick={() => onTabsFilterClick(id)}
        />
      ))}
    </div>
  );
};

export default memo(TabsFilter);
