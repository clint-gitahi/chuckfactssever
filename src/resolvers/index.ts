const resolvers = {
  Query: {
    categories: async (_source, _args, { dataSources }) => {
      return dataSources.factsAPI.getCategories();
    },
    randomFact: async (_source, { category }, { dataSources }) => {
      return dataSources.factsAPI.getFactByCategory({ category });
    },
  },
};

export default resolvers;
