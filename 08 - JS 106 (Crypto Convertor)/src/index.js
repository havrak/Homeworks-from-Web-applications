const express = require("express");
const bodyParser = require("body-parser");
const https = require("https");
const { response } = require("express");
const { request } = require("http");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
  var noc = Number(req.body.noc);
  var sourceCurrency = req.body.sourceCurrency;
  var targetCurrency = req.body.targetCurrency;

  console.log("noc " + noc);
  console.log("sourceCurrency " + sourceCurrency);
  console.log("targetCurrency " + targetCurrency);

  var request = require("request");

  url =
    "https://api.coingecko.com/api/v3/simple/price?ids=" +
    sourceCurrency +
    "&vs_currencies=" +
    targetCurrency;
  console.log(url);
  console.log("");

  request(
    {
      url: url,
      json: false,
    },
    function (error, response, body) {
      if (!error && response.statusCode === 200) {
        var multiplier = Number(
          body.substring(body.lastIndexOf('"') + 2, body.length - 2)
        );
        var result = noc * multiplier;
        res.send(
          noc +
            " coin/ů ve měně: " +
            sourceCurrency +
            ", mají hodnotu " +
            result +
            " " +
            targetCurrency
        );
      }
    }
  );
});

app.listen(8080, function () {
  console.log("Server poslouchá na portu 8080");
});
