import React, { FC } from "react";
import cn from "classnames";

import Ticket from "../Ticket/Ticket";

import { ITicketsProps } from "./Tickets.props";

import styles from "./Tickets.module.css";

const Tickets: FC<ITicketsProps> = ({
  tickets,
  className,
  ...props
}): JSX.Element => (
  <div className={cn(styles.ticketsContainer, className)} {...props}>
    {tickets.map(({ price, carrier, segments }: ITicket) => (
      <Ticket
        key={price + carrier}
        price={price}
        carrier={carrier}
        segments={segments}
      />
    ))}
  </div>
);

export default Tickets;
