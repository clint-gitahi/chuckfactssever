
const resolvers = {
    Query: {
        categories: async (_source, _args, { dataSources }) => {
            return dataSources.factsAPI.getCategories()
        },
        
    },
};

export default resolvers

