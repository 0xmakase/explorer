const dymensionFunctions = require("./dymension/index");
const seiFunctions = require("./sei/index");

module.exports = {
  ...dymensionFunctions,
  ...seiFunctions,
};
