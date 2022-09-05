import tickets from "./../data/data";

const Resolvers = {
  Query: {
    getAllTickets: (_: any, args: { filters: string }) => {
      const filters = JSON.parse(args.filters);

      const filteredTickets = [...tickets];

      const noOneChosen = filteredTickets.filter((t) => {
        if (
          filters[0].type === "all" &&
          filters[0].checked === false &&
          filters[1].type === "no_stops" &&
          filters[1].checked === false &&
          filters[2].type === "one_stop" &&
          filters[2].checked === false &&
          filters[3].type === "two_stops" &&
          filters[3].checked === false &&
          filters[4].type === "three_stops" &&
          filters[4].checked === false
        ) {
          return t;
        }
      });

      const noStops = filteredTickets.filter((t) => {
        if (filters[1].type === "no_stops" && filters[1].checked === true) {
          return t.segments[0].stops.length === 0;
        }
      });

      const oneStop = filteredTickets.filter((t) => {
        if (filters[2].type === "one_stop" && filters[2].checked === true) {
          return t.segments[0].stops.length === 1;
        }
      });

      const twoStops = filteredTickets.filter((t) => {
        if (filters[3].type === "two_stops" && filters[3].checked === true) {
          return t.segments[0].stops.length === 2;
        }
      });

      const threeStops = filteredTickets.filter((t) => {
        if (filters[4].type === "three_stops" && filters[4].checked === true) {
          return t.segments[0].stops.length === 3;
        }
      });

      const filteredEndResult = [
        ...noOneChosen,
        ...noStops,
        ...oneStop,
        ...twoStops,
        ...threeStops,
      ];

      if (filters[5].type === "cheapest" && filters[5].checked === true) {
        filteredEndResult.sort((a, b) => a.price - b.price);
      }

      if (filters[6].type === "fastest" && filters[6].checked === true) {
        filteredEndResult.sort(
          (a, b) => a.segments[0].duration - b.segments[0].duration
        );
      }

      if (filters[7].type === "optimal" && filters[7].checked === true) {
        filteredEndResult
          .sort((a, b) => a.price - b.price)
          .sort((a, b) => a.segments[0].duration - b.segments[0].duration);
      }

      return filteredEndResult;
    },
  },
};

export default Resolvers;
