const app = require('express')();
const graphql = require('./graphql');
const parcel = require('./parcel');

const { PORT = 8080 } = process.env;

app
  .use('/graphql', graphql)
  .use(parcel)
  .listen(PORT);

console.log(`Running a GraphQL API server at localhost:${PORT}/graphql`);