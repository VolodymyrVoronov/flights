import tickets from "./../data/data";

const Resolvers = {
  Query: {
    getAllTickets: () => tickets,
  },
};

export default Resolvers;
