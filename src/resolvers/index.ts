import books from "../sampledata";

const resolvers = {
    Query: {
        books: () => books,
    },
};

export default resolvers

