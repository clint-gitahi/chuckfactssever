"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_express_1 = require("apollo-server-express");
exports.default = apollo_server_express_1.gql `
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
//# sourceMappingURL=index.js.map