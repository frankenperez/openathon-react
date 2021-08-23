const generalRoute = require("./data/general.json");
const servicesRoute = require("./data/services.json");
const innovationRoute = require("./data/innovation.json");
const believesRoute = require("./data/believes.json");

module.exports = function getRoutes() {
  return {
    general: generalRoute,
    services: servicesRoute,
    innovation: innovationRoute,
    believes: believesRoute
  };
};
