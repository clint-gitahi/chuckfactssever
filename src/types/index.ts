import { gql } from 'apollo-server-express';

const typeDef = gql`

    type Book {
        title: String
        author: String
    }

    type Query {
        books: [Book]
    }
`;

export default typeDef;
