const Bundler = require('parcel-bundler');
const app = require('express')();
const graphqlHTTP = require('express-graphql');
const { buildSchema } = require('graphql');

const { PORT = 8080 } = process.env;

// Construct a schema, using GraphQL schema language
const schema = buildSchema(`
  type Query {
    hello: String
  }
`);

// The root provides a resolver function for each API endpoint
const root = {
  hello: () => {
    return 'Hello world!';
  },
};

app.use(
  '/graphql',
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  })
);

console.log('Running a GraphQL API server at localhost:4000/graphql');

// Pass an absolute path to the entrypoint here
const file = './src/index.html'; 
// See options section of api docs, for the possibilities
const options = {}; 

// Initialize a new bundler using a file and options
const bundler = new Bundler(file, options);

// Let express use the bundler middleware, this will let Parcel handle every request over your express server
app.use(bundler.middleware());

// Listen on process.env.PORT or 8080
app.listen(PORT);
