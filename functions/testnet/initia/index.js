const functions = require("firebase-functions");
const createApp = require("../../common/createApp");

const apiApp = createApp("http://initia-testnet-initiation-2-nlb-7285263470cec22b.elb.eu-central-1.amazonaws.com:14617");
const rpcApp = createApp("http://initia-testnet-initiation-2-nlb-7285263470cec22b.elb.eu-central-1.amazonaws.com:26657");

exports.proxyToSentryinitiaTestApi = functions.https.onRequest(apiApp);
exports.proxyToSentryinitiaTestRpc = functions.https.onRequest(rpcApp);
