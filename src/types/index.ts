import { gql } from "apollo-server-express";

export default gql`
  type Category {
    id: String!
    name: String!
  }

  type Fact {
    categories: [Category]!
    created_at: String!
    icon_url: String!
    id: String!
    updated_at: String!
    url: String!
    value: String!
  }

  type Query {
    categories: [Category]
    randomFact(category: String): Fact!
  }
`;
