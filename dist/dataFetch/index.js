"use strict";
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_datasource_rest_1 = require("apollo-datasource-rest");
class FactsAPI extends apollo_datasource_rest_1.RESTDataSource {
  constructor() {
    super();
    this.baseURL = "https://api.chucknorris.io";
  }
  getCategories() {
    return __awaiter(this, void 0, void 0, function* () {
      const res = yield this.get(`categories`);
      console.log(res);
    });
  }
  getFactByCategory() {
    return __awaiter(this, void 0, void 0, function* () {
      const res = yield this.get("random", { category: "music" });
      console.log(res);
    });
  }
}
module.exports = FactsAPI;
//# sourceMappingURL=index.js.map
