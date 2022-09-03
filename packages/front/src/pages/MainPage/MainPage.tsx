import Logo from "../../components/Logo/Logo";
import Filters from "../../components/Filters/Filters";

import styles from "./MainPage.module.css";

import logo from "./../../assets/images/icon-plane-01.png";

const MainPage = (): JSX.Element => {
  return (
    <div className={styles.mainPage}>
      <Logo
        className={styles.mainPageLogo}
        logoSrc={logo}
        logoAlt="Logo of plane."
      />

      <div className={styles.mainPageContent}>
        <div className={styles.mainPageFilters}>
          <p className={styles.mainPageFiltersTitle}>Amount of changes</p>
          <Filters />
        </div>
        <div className={styles.mainPageFlights}>Right side</div>
      </div>
    </div>
  );
};

export default MainPage;
