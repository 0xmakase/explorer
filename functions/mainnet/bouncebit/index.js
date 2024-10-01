const functions = require("firebase-functions");
const createApp = require("../../common/createApp");

const apiApp = createApp("http://bouncebit-mainnet-rpc-nlb-2664d095af56ec6a.elb.ap-northeast-1.amazonaws.com:14617");
const rpcApp = createApp("http://bouncebit-mainnet-rpc-nlb-2664d095af56ec6a.elb.ap-northeast-1.amazonaws.com:26657");

exports.proxyToSentryBBApi = functions.https.onRequest(apiApp);
exports.proxyToSentryBBRpc = functions.https.onRequest(rpcApp);
