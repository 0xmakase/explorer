const dymensionFunctions = require("./mainnet/dymension/index");
const seiFunctions = require("./mainnet/sei/index");
const lavaFunctions = require("./mainnet/lava/index");

module.exports = {
  ...dymensionFunctions,
  ...seiFunctions,
  ...lavaFunctions,
};
