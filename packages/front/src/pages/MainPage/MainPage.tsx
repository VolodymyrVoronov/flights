import { useEffect, useMemo, useState } from "react";
import { useQuery, gql } from "@apollo/client";

import Logo from "../../components/Logo/Logo";
import Filters from "../../components/Filters/Filters";
import TabsFilter from "../../components/TabsFilter/TabsFilter";
import Tickets from "../../components/Tickets/Tickets";
import Spinner from "../../components/Spinner/Spinner";

import styles from "./MainPage.module.css";

import logo from "./../../assets/images/icon-plane-01.png";

const GET_ALL_FLIGHTS = gql`
  query GetAllTicket($filters: String) {
    getAllTickets(filters: $filters) {
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
  const [flightsFilters, setFlightsFilters] = useState<IFiltersData[]>([]);
  const [tabsFilter, setTabsFilter] = useState<ITabsFilterData[]>([]);
  const [sliceIndex, setSliceIndex] = useState(5);

  const filters = JSON.stringify([...flightsFilters, ...tabsFilter]);

  useEffect(() => {
    refetch({ filters });
    setSliceIndex(5);
  }, [flightsFilters, tabsFilter]);

  const { loading, error, data, refetch } = useQuery(GET_ALL_FLIGHTS, {
    variables: { filters },
  });

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

  const onShowMoreButtonClick = () => {
    setSliceIndex(sliceIndex + 5);
  };

  const tickets = data;

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
        <div className={styles.mainPageTicketsContainer}>
          <TabsFilter onTabsFilterChange={onTabsFilterChange} />

          {error && <div>Error</div>}

          {loading ? (
            <Spinner />
          ) : (
            <>
              <Tickets tickets={tickets.getAllTickets.slice(0, sliceIndex)} />

              <button
                className={styles.mainPageButton}
                onClick={onShowMoreButtonClick}
                type="button"
                role="button"
              >
                Show more tickets
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default MainPage;
