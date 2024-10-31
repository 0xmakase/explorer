const seiFunctions = require("./mainnet/sei/index");
const initiaFunctions = require("./testnet/initia/index");

module.exports = {
  ...seiFunctions,
  ...initiaFunctions,
};
