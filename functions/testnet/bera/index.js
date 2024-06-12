const functions = require("firebase-functions");
const createApp = require("../../common/createApp");

const apiApp = createApp("http://198.13.37.177:1317");
const rpcApp = createApp("http://198.13.37.177:26657");

exports.proxyToSentryberaTestApi = functions.https.onRequest(apiApp);
exports.proxyToSentryberaTestRpc = functions.https.onRequest(rpcApp);
