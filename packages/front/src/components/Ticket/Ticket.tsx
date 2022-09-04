import React, { FC } from "react";
import cn from "classnames";

import { ITicketProps } from "./Ticket.props";

import styles from "./Ticket.module.css";

const toHoursAndMinutes = (totalMinutes: number): string => {
  const minutes = totalMinutes % 60;
  const hours = Math.floor(totalMinutes / 60);

  return `${padTo2Digits(hours)}h ${padTo2Digits(minutes)}m`;
};

const padTo2Digits = (num: number) => {
  return num.toString().padStart(2, "0");
};

const convertISODateToHoursAndMinutes = (date: string): string => {
  const d = new Date(date);

  const hours = d.getHours();
  const minutes = d.getMinutes();

  return `${hours === 1 || hours <= 9 ? "0" + hours : hours}:${
    minutes === 1 || minutes <= 9 ? "0" + minutes : minutes
  }`;
};

const addMinutesToDate = (date: string, minutes: number): string => {
  const d = new Date(date);

  return new Date(d.getTime() + minutes * 60000).toISOString();
};

const getRandomColor = (): string => {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const Ticket: FC<ITicketProps> = ({
  price,
  carrier,
  segments,
}): JSX.Element => (
  <div className={styles.ticketContainer}>
    <div className={styles.ticketHeader}>
      <span className={styles.ticketPrice}>{price} $</span>
      <span
        className={styles.ticketCarrier}
        style={{ backgroundColor: `${getRandomColor()}` }}
      >
        {carrier}
      </span>
    </div>
    {segments.map(({ origin, destination, date, stops, duration }) => (
      <div key={date + origin} className={styles.ticketInfo}>
        <div className={styles.ticketInfoBox}>
          <span className={styles.ticketFlightTimeConnection}>
            {origin} - {destination}
          </span>
          <span className={styles.ticketFlightTime}>
            {convertISODateToHoursAndMinutes(date)} -{" "}
            {convertISODateToHoursAndMinutes(addMinutesToDate(date, duration))}
          </span>
        </div>
        <div className={styles.ticketInfoBox}>
          <span className={styles.ticketFlightDurationTitle}>Duration</span>
          <span className={styles.ticketFlightDurationNumber}>
            {toHoursAndMinutes(duration)}
          </span>
        </div>
        <div className={styles.ticketInfoBox}>
          <span className={styles.ticketFlightStopsTitle}>
            {stops.length === 0 ? (
              <span>Direct</span>
            ) : (
              <>
                {stops.length === 1
                  ? `${stops.length} stop`
                  : `${stops.length} stops`}
              </>
            )}
          </span>
          <span className={styles.ticketFlightStops}>{stops.join(", ")}</span>
        </div>
      </div>
    ))}
  </div>
);

export default Ticket;
