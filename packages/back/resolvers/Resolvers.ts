import tickets from "./../data/data";

const Resolvers = {
  Query: {
    getAllTickets: (_: any, args: { filters: string }) => {
      const filters = JSON.parse(args.filters);

      console.log(filters);

      return tickets;
    },
  },
};

export default Resolvers;
