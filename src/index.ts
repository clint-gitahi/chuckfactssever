import express from "express";
import { ApolloServer } from "apollo-server-express";

import typeDefs from "./types";
import resolvers from "./resolvers";
import FactsAPI from "./dataFetch/facts";

const dataFetch = () => ({
  factsAPI: new FactsAPI(),
});

const main = async () => {
  const app = express();

  const apolloServer = new ApolloServer({
    resolvers,
    typeDefs,
    dataSources: dataFetch,
  });

  apolloServer.applyMiddleware({ app });

  app.listen(process.env.PORT || 2000)
};

main().catch((error) => {
  console.log(error);
});
