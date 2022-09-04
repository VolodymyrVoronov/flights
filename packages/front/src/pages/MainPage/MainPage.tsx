import { useEffect, useMemo, useState } from "react";
import { useQuery, gql } from "@apollo/client";

import Logo from "../../components/Logo/Logo";
import Filters from "../../components/Filters/Filters";
import TabsFilter from "../../components/TabsFilter/TabsFilter";

import styles from "./MainPage.module.css";

import logo from "./../../assets/images/icon-plane-01.png";

const GET_ALL_FLIGHTS = gql`
  query {
    getAllTickets {
      price
      carrier
      segments {
        date
        origin
        destination
        stops
        duration
      }
    }
  }
`;

const MainPage = (): JSX.Element => {
  const { loading, error, data, refetch } = useQuery(GET_ALL_FLIGHTS);

  const [flightsFilters, setFlightsFilters] = useState<IFiltersData[]>([]);
  const [tabsFilter, setTabsFilter] = useState<ITabsFilterData[]>([]);

  const onFlightsFiltersChange = useMemo(
    () =>
      (flights: IFiltersData[]): void => {
        setFlightsFilters(flights);
      },
    [flightsFilters]
  );

  const onTabsFilterChange = useMemo(
    () =>
      (flights: ITabsFilterData[]): void => {
        setTabsFilter(flights);
      },
    [tabsFilter]
  );

  useEffect(() => {
    refetch();
  }, [flightsFilters, tabsFilter]);

  console.log(data);

  return (
    <div className={styles.mainPage}>
      <Logo
        className={styles.mainPageLogo}
        logoSrc={logo}
        logoAlt="Logo of plane."
      />

      <div className={styles.mainPageContent}>
        <div className={styles.mainPageFilters}>
          <p className={styles.mainPageFiltersTitle}>Stops</p>
          <Filters onFlightsFiltersChange={onFlightsFiltersChange} />
        </div>
        <div className={styles.mainPageFlights}>
          <TabsFilter onTabsFilterChange={onTabsFilterChange} />

          {loading && <div>Loading flights!!!</div>}
        </div>
      </div>
    </div>
  );
};

export default MainPage;
