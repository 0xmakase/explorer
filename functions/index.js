const dymensionFunctions = require("./mainnet/dymension/index");
const seiFunctions = require("./mainnet/sei/index");
const lavaFunctions = require("./mainnet/lava/index");
const lavaTestFunctions = require("./testnet/lava/index");
const beraTestFunctions = require("./testnet/bera/index");

module.exports = {
  ...dymensionFunctions,
  ...seiFunctions,
  ...lavaFunctions,
  ...lavaTestFunctions,
  ...beraTestFunctions,
};
