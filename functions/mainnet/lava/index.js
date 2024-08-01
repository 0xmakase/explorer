const functions = require("firebase-functions");
const createApp = require("../../common/createApp");

const apiApp = createApp("http://lava-mainnet-rpc-nlb-ffabdd2c9da0a6a9.elb.ap-northeast-1.amazonaws.com:14617");
const rpcApp = createApp("http://lava-mainnet-rpc-nlb-ffabdd2c9da0a6a9.elb.ap-northeast-1.amazonaws.com:26657");

exports.proxyToSentrylavaApi = functions.https.onRequest(apiApp);
exports.proxyToSentrylavaRpc = functions.https.onRequest(rpcApp);
