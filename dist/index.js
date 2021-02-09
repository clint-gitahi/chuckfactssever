"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const apollo_server_express_1 = require("apollo-server-express");
const types_1 = __importDefault(require("./types"));
const resolvers_1 = __importDefault(require("./resolvers"));
const facts_1 = __importDefault(require("./dataFetch/facts"));
const dataFetch = () => ({
    factsAPI: new facts_1.default(),
});
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    const app = express_1.default();
    const apolloServer = new apollo_server_express_1.ApolloServer({
        resolvers: resolvers_1.default,
        typeDefs: types_1.default,
        dataSources: dataFetch,
        introspection: true,
        playground: true,
    });
    apolloServer.applyMiddleware({ app });
    app.listen(process.env.PORT || 2000);
});
main().catch((error) => {
    console.log(error);
});
//# sourceMappingURL=index.js.map