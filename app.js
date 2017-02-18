import express from 'express';
import bodyParser from 'body-parser';

const PORT = 8080;
const app = express();

import { apolloExpress, graphiqlExpress } from 'apollo-server';
import { makeExecutableSchema } from 'graphql-tools';

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

import Schema from './schema';
import Resolvers from './resolvers';
import Connectors from './connectors';

const executableSchema = makeExecutableSchema({
  typeDefs: Schema,
  resolvers: Resolvers,
});

app.use('/graphql', bodyParser.json(), apolloExpress({
  schema: executableSchema,
  context: {
    constructor: Connectors,
  },
  rootValue: 'noproyk',
}));

app.use('/graphiql', graphiqlExpress({
  endpointURL: '/graphql',
}));

app.listen(PORT, () => console.log(
  `GraphQL Server is now running on http://localhost:${PORT}/graphql`
));
