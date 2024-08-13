const functions = require("firebase-functions");
const createApp = require("../../common/createApp");

const apiApp = createApp("http://dymension-mainnet-rpc-nlb-19b19aa49170b59c.elb.ap-northeast-1.amazonaws.com:14617");
const rpcApp = createApp("http://dymension-mainnet-rpc-nlb-19b19aa49170b59c.elb.ap-northeast-1.amazonaws.com:26657");

exports.proxyToSentryDymApi = functions.https.onRequest(apiApp);
exports.proxyToSentryDymRpc = functions.https.onRequest(rpcApp);
