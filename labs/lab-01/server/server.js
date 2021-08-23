const jsonServer = require("json-server");
const getRoutes = require("./routes.js");

const server = jsonServer.create();
const router = jsonServer.router(getRoutes());
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

server.listen(3001, function () {
  console.log("JSON Server is running");
});
