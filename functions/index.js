const dymensionFunctions = require("./mainnet/dymension/index");
const seiFunctions = require("./mainnet/sei/index");
const initiaFunctions = require("./testnet/initia/index");
const bouncebitFunctions = require("./mainnet/bouncebit/index");

module.exports = {
  ...dymensionFunctions,
  ...seiFunctions,
  ...initiaFunctions,
  ...bouncebitFunctions,
};
