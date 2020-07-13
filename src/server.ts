import createServer from './app';
import connect from './database/connect'

const PORT = process.env.PORT || 3000;
const server = createServer();

connect();

server.listen(+PORT, "127.0.0.1", (err, host) => {
  if (err) throw err;
  console.log(`server listening on ${host}`);
});
