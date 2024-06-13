const functions = require("firebase-functions");
const createApp = require("../../common/createApp");

const apiApp = createApp("");
const rpcApp = createApp("");

exports.proxyToSentryinitiaTestApi = functions.https.onRequest(apiApp);
exports.proxyToSentryinitiaTestRpc = functions.https.onRequest(rpcApp);
