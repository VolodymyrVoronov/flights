import React, { FC } from "react";
import styles from "./TabFilter.module.css";

interface TabFilterProps {}

const TabFilter: FC<TabFilterProps> = () => (
  <div className={styles.TabFilter}>TabFilter Component</div>
);

export default TabFilter;
