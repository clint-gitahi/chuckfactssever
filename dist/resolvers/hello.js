"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const sampledata_1 = __importDefault(require("src/sampledata"));
const resolvers = {
  Query: {
    books: () => sampledata_1.default,
  },
};
exports.default = resolvers;
//# sourceMappingURL=hello.js.map
