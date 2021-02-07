import express from 'express'
import { ApolloServer } from 'apollo-server-express'

import typeDefs from './types'
import resolvers from './resolvers'

const main = async () => {
    const app = express();

    const apolloServer = new ApolloServer({
        resolvers,
        typeDefs,
    })

    apolloServer.applyMiddleware({ app })

    app.listen(3000, () => {
        console.log('server listening on port 3000')
    })
};

main().catch((error) => {
    console.log(error);
})