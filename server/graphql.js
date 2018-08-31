const graphqlHTTP = require('express-graphql');
const { buildSchema } = require('graphql');

// Construct a schema, using GraphQL schema language
const schema = buildSchema(`
  type Query {
    hello: String
  }
`);

// The root provides a resolver function for each API endpoint
const rootValue = {
  hello: () => {
    return `Hello world! @ ${new Date().toString()}`;
  },
};

module.exports = graphqlHTTP({
  schema,
  rootValue,
  graphiql: true,
});
