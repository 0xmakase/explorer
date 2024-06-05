const functions = require("firebase-functions");
const createApp = require("../../common/createApp");

const apiApp = createApp('http://lava-testnet-rpc-nlb-05cbce6b4246dcc2.elb.ap-northeast-1.amazonaws.com:14617');
const rpcApp = createApp('http://lava-testnet-rpc-nlb-05cbce6b4246dcc2.elb.ap-northeast-1.amazonaws.com:26657');

exports.proxyToSentrylavaTestApi = functions.https.onRequest(apiApp);
exports.proxyToSentrylavaTestRpc = functions.https.onRequest(rpcApp);
