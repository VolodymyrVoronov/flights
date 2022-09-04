import { gql } from "apollo-server-express";

const Schema = gql`
  type Segment {
    origin: String
    destination: String
    date: String
    stops: [String]
    duration: Int
  }

  type Ticket {
    price: Int
    carrier: String
    segments: [Segment]
  }

  type Query {
    getAllTickets(filters: String): [Ticket]
  }
`;

export default Schema;
