import uuid4 from "uuid4";
import { RESTDataSource } from "apollo-datasource-rest";

export default class FactsAPI extends RESTDataSource {
  constructor() {
    super();

    this.baseURL = "https://api.chucknorris.io/jokes";
  }

  eachCategoryHandler(category) {
    return {
      id: uuid4(),
      name: category,
    };
  }

  async getCategories() {
    const res = await this.get(`categories`);
    const categorys = res.map((item) => this.eachCategoryHandler(item));
    return categorys;
  }

  async getFactByCategory({ category }) {
    const {
      categories,
      created_at,
      icon_url,
      id,
      updated_at,
      url,
      value,
    } = await this.get("random", { category });
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
  }
}
