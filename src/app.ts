import fastify from 'fastify';
import GQL from 'fastify-gql';
import indexRoute from './routes/index.route';
import schema from './GraphQL/schema/user_schema';
import resolvers from './GraphQL/resolvers/user_resolvers';

function createServer() {
  const server = fastify({ logger: { prettyPrint: true } });
  server.register(indexRoute);
  server.register(GQL, { schema, resolvers, graphiql:true });

  server.setErrorHandler((error, req, res) => {
    req.log.error(error.toString());
    res.send({ error });
  });

  return server;
}

export default createServer;
