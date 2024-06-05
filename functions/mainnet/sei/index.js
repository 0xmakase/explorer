const functions = require("firebase-functions");
const createApp = require("../../common/createApp");

const apiApp = createApp('http://192.248.177.30:1317');
const rpcApp = createApp('http://192.248.177.30:26657');

exports.proxyToSentrySeiApi = functions.https.onRequest(apiApp);
exports.proxyToSentrySeiRpc = functions.https.onRequest(rpcApp);
