// createApp.js
const express = require("express");
const cors = require("cors");
const axios = require("axios");
const qs = require("qs");
const authenticateToken = require("./common/auth");

function createApp(sentryUrlBase) {
  const app = express();
  app.use(cors({origin: true}));
  app.use(authenticateToken);
  app.use((req, res) => {
    const sentryUrl = `${sentryUrlBase}${req.path}`;
    const query = qs.stringify(req.query, {arrayFormat: "repeat"});
    axios({
      method: req.method,
      url: sentryUrl + (query ? `?${query}` : ""),
      data: req.body,
      headers: req.headers,
    })
        .then((response) => {
          res.status(response.status).send(response.data);
        })
        .catch((error) => {
          res.status(error.response ? error.response.status : 500)
              .send(error.response ? error.response.data : error.message);
        });
  });
  return app;
}

module.exports = createApp;