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
const uuid4_1 = __importDefault(require("uuid4"));
const apollo_datasource_rest_1 = require("apollo-datasource-rest");
class FactsAPI extends apollo_datasource_rest_1.RESTDataSource {
    constructor() {
        super();
        this.baseURL = "https://api.chucknorris.io/jokes";
    }
    eachCategoryHandler(category) {
        return {
            id: uuid4_1.default(),
            name: category,
        };
    }
    getCategories() {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield this.get(`categories`);
            const categorys = res.map((item) => this.eachCategoryHandler(item));
            return categorys;
        });
    }
    getFactByCategory({ category }) {
        return __awaiter(this, void 0, void 0, function* () {
            const { categories, created_at, icon_url, id, updated_at, url, value, } = yield this.get("random", { category });
            console.log(created_at, icon_url, id, updated_at, url, value);
            return {
                categories: categories.map((item) => this.eachCategoryHandler(item)),
                created_at,
                icon_url,
                id,
                updated_at,
                url,
                value,
            };
        });
    }
}
exports.default = FactsAPI;
//# sourceMappingURL=facts.js.map