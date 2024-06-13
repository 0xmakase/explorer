const dymensionFunctions = require("./mainnet/dymension/index");
const seiFunctions = require("./mainnet/sei/index");
const lavaFunctions = require("./mainnet/lava/index");
const lavaTestFunctions = require("./testnet/lava/index");
const initiaFunctions = require("./testnet/initia/index");

module.exports = {
  ...dymensionFunctions,
  ...seiFunctions,
  ...lavaFunctions,
  ...lavaTestFunctions,
  ...initiaFunctions,
};
