import express from "express";
import { ApolloServer, ExpressContext } from "apollo-server-express";
import { ApolloServerPluginDrainHttpServer } from "apollo-server-core";
import http from "http";
import cors from "cors";

import Schema from "./schema/Schema";
import Resolvers from "./resolvers/Resolvers";

async function startApolloServer(
  typeDefs: typeof Schema,
  resolvers: typeof Resolvers
) {
  const app = express();

  app.use(cors());

  const httpServer = http.createServer(app);

  const server = new ApolloServer<ExpressContext>({
    typeDefs,
    resolvers,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  });

  await server.start();

  server.applyMiddleware({ app });

  await new Promise<void>((resolve) =>
    httpServer.listen({ port: 4000 }, resolve)
  );

  console.log(`Server ready at http://localhost:4000${server.graphqlPath}`);
}

startApolloServer(Schema, Resolvers);
