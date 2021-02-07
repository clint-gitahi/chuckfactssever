import uuid4 from 'uuid4'
import {RESTDataSource} from 'apollo-datasource-rest'

export default class FactsAPI extends RESTDataSource {
    constructor() {
        super();

        this.baseURL = 'https://api.chucknorris.io/jokes';
    }

    eachCategoryHandler(category) {
        return {
            id: uuid4(),
            name: category,
        }
    }

    async getCategories() {
        const res = await this.get(`categories`);
        const categorys = res.map(item => this.eachCategoryHandler(item))
        return categorys ;
    }

    async getFactByCategory() {
        const res = await this.get('random', {category: 'music'})

        console.log(res)
    }
}

