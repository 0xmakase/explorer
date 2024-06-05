const functions = require("firebase-functions");
const createApp = require("../../common/createApp");

const apiApp = createApp('http://95.179.253.169:14617');
const rpcApp = createApp('http://95.179.253.169:26657');

exports.proxyToSentryDymApi = functions.https.onRequest(apiApp);
exports.proxyToSentryDymRpc = functions.https.onRequest(rpcApp);
