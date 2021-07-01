const express = require("express");
const router = express.Router();
var request = require("request");

const dotenv = require("dotenv");
dotenv.config();

const USER = process.env.RPC_USER;
const PASS = process.env.RPC_PASSWORD;

const headers = {
  "content-type": "text/plain;"
};

router.get("/test", (req, res) => res.json({ msg: "backend workss"}));

router.get("/getblockcount", (req, res) => {
  var dataString = `{"jsonrpc":"1.0","id":"curltext","method":"getblockcount","params":[]}`;
  var options = {
    url: `http://${USER}:${PASS}@127.0.0.1:18332/`,
    method: "POST",
    headers: headers,
    body: dataString
  };

  callback = (error, response, body) => {
    if (!error && response.statusCode == 200) {
      const data = JSON.parse(body);
      res.send(data);
    }
  };
  request(options, callback);
});

router.get("/getbestblockhash", (req, res) => {
  var dataString = `{"jsonrpc":"1.0","id":"curltext","method":"getbestblockhash","params":[]}`;
  var options = {
    url: `http://${USER}:${PASS}@127.0.0.1:18332/`,
    method: "POST",
    headers: headers,
    body: dataString
  };

  callback = (error, response, body) => {
    if (!error && response.statusCode == 200) {
      const data = JSON.parse(body);
      res.send(data);
    }
  };
  request(options, callback);
});

router.get("/getconnectioncount", (req, res) => {
  var dataString = `{"jsonrpc":"1.0","id":"curltext","method":"getconnectioncount","params":[]}`;
  var options = {
    url: `http://${USER}:${PASS}@127.0.0.1:18332/`,
    method: "POST",
    headers: headers,
    body: dataString
  };

  callback = (error, response, body) => {
    if (!error && response.statusCode == 200) {
      const data = JSON.parse(body);
      res.send(data);
    }
  };
  request(options, callback);
});


router.get("/getdifficulty", (req, res) => {
  var dataString = `{"jsonrpc":"1.0","id":"curltext","method":"getdifficulty","params":[]}`;
  var options = {
    url: `http://${USER}:${PASS}@127.0.0.1:18332/`,
    method: "POST",
    headers: headers,
    body: dataString
  };

  callback = (error, response, body) => {
    if (!error && response.statusCode == 200) {
      const data = JSON.parse(body);
      res.send(data);
    }
  };
  request(options, callback);
});

router.get("/getblockchaininfo", (req, res) => {
  var dataString = `{"jsonrpc":"1.0","id":"curltext","method":"getblockchaininfo","params":[]}`;
  var options = {
    url: `http://${USER}:${PASS}@127.0.0.1:18332/`,
    method: "POST",
    headers: headers,
    body: dataString
  };

  callback = (error, response, body) => {
    if (!error && response.statusCode == 200) {
      const data = JSON.parse(body);
      res.send(data);
    }
  };
  request(options, callback);
});

router.get("/getmininginfo", (req, res) => {
  var dataString = `{"jsonrpc":"1.0","id":"curltext","method":"getmininginfo","params":[]}`;
  var options = {
    url: `http://${USER}:${PASS}@127.0.0.1:18332/`,
    method: "POST",
    headers: headers,
    body: dataString
  };

  callback = (error, response, body) => {
    if (!error && response.statusCode == 200) {
      const data = JSON.parse(body);
      res.send(data);
    }
  };
  request(options, callback);
});

router.get("/getpeerinfo", (req, res) => {
  var dataString = `{"jsonrpc":"1.0","id":"curltext","method":"getpeerinfo","params":[]}`;
  var options = {
    url: `http://${USER}:${PASS}@127.0.0.1:18332/`,
    method: "POST",
    headers: headers,
    body: dataString
  };

  callback = (error, response, body) => {
    if (!error && response.statusCode == 200) {
      const data = JSON.parse(body);
      res.send(data);
    }
  };
  request(options, callback);
});

router.get("/getrawmempool", (req, res) => {
  var dataString = `{"jsonrpc":"1.0","id":"curltext","method":"getrawmempool","params":[]}`;
  var options = {
    url: `http://${USER}:${PASS}@127.0.0.1:18332/`,
    method: "POST",
    headers: headers,
    body: dataString
  };

  callback = (error, response, body) => {
    if (!error && response.statusCode == 200) {
      const data = JSON.parse(body);
      res.send(data);
      console.log(data.result[0]);
    }
  };
  request(options, callback);
});

router.get("/getblock/:hash", (req, res) => {
  var dataString = `{"jsonrpc":"1.0","id":"curltext","method":"getblock","params":["${req.params.hash}"]}`;
  var options = {
    url: `http://${USER}:${PASS}@127.0.0.1:18332/`,
    method: "POST",
    headers: headers,
    body: dataString
  };

  callback = (error, response, body) => {
    if (!error && response.statusCode == 200) {
      const data = JSON.parse(body);
      res.send(data);
    }
  };
  request(options, callback);
});

router.get("/getblockhash/:index", (req, res) => {
  var dataString = `{"jsonrpc":"1.0","id":"curltext","method":"getblockhash","params":[${
    req.params.index
  }]}`;
  var options = {
    url: `http://${USER}:${PASS}@127.0.0.1:18332/`,
    method: "POST",
    headers: headers,
    body: dataString
  };

  callback = (error, response, body) => {
    if (!error && response.statusCode == 200) {
      const data = JSON.parse(body);
      res.send(data);
    }
  };
  request(options, callback);
});



router.get("/getrawtransaction/:id", (req, res) => {
  var dataString = `{"jsonrpc":"1.0","id":"curltext","method":"getrawtransaction","params":["${
    req.params.id
  }",true]}`;
  var options = {
    url: `http://${USER}:${PASS}@127.0.0.1:18332/`,
    method: "POST",
    headers: headers,
    body: dataString
  };

  callback = (error, response, body) => {
    if (!error && response.statusCode == 200) {
      const data = JSON.parse(body);
      res.send(data);
    }
  };
  request(options, callback);
});

router.get("/gettransaction/:id", (req, res) => {
  var dataString = `{"jsonrpc":"1.0","id":"curltext","method":"gettransaction","params":["${
    req.params.id
  }",true]}`;
  var options = {
    url: `http://${USER}:${PASS}@127.0.0.1:18332/`,
    method: "POST",
    headers: headers,
    body: dataString
  };

  callback = (error, response, body) => {
    if (!error && response.statusCode == 200) {
      const data = JSON.parse(body);
      res.send(data);
    }
  };
  request(options, callback);
});

router.get("/decoderawtransaction/:hex", (req, res) => {
  var dataString = `{"jsonrpc":"1.0","id":"curltext","method":"decoderawtransaction","params":["${
    req.params.hex
  }"]}`;
  var options = {
    url: `http://${USER}:${PASS}@127.0.0.1:18332/`,
    method: "POST",
    headers: headers,
    body: dataString
  };

  callback = (error, response, body) => {
    if (!error && response.statusCode == 200) {
      const data = JSON.parse(body);
      res.send(data);
    }
  };
  request(options, callback);
});

router.get('/createwallet/:name', (req, res) => {
  var dataString = `{"jsonrpc":"1.0","id":"curltext","method":"createwallet","params":["${req.params.name}"]}`;
  var options = {
    url: `http://${USER}:${PASS}@127.0.0.1:18332/`,
    method: 'POST',
    headers: headers,
    body: dataString,
  };

  callback = (error, response, body) => {
    if (!error && response.statusCode == 200) {
      const data = JSON.parse(body);
      res.send(data);
    }
  };
  request(options, callback);
});

router.get('/importaddress/:address', (req, res) => {
  var dataString = `{"jsonrpc":"1.0","id":"curltext","method":"importaddress","params":["${req.params.address}","",false, false]}`;
  var options = {
    url: `http://${USER}:${PASS}@127.0.0.1:18332/`,
    method: 'POST',
    headers: headers,
    body: dataString,
  };

  callback = (error, response, body) => {
    if (!error && response.statusCode == 200) {
      const data = JSON.parse(body);
      res.send(data);
      console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@",data.result);
    }
  };
  request(options, callback);
});

router.get("/listwallets", (req, res) => {
  var dataString = `{"jsonrpc":"1.0","id":"curltext","method":"listwallets","params":[]}`;
  var options = {
    url: `http://${USER}:${PASS}@127.0.0.1:18332/`,
    method: "POST",
    headers: headers,
    body: dataString
  };

  callback = (error, response, body) => {
    if (!error && response.statusCode == 200) {
      const data = JSON.parse(body);
      res.send(data);
      console.log(data.result[0]);
    }
  };
  request(options, callback);

});

router.get("/loadwallet/:name", (req, res) => {
  var dataString = `{"jsonrpc":"1.0","id":"curltext","method":"loadwallet","params":["${req.params.name}"]}`;
  var options = {
    url: `http://${USER}:${PASS}@127.0.0.1:18332/`,
    method: "POST",
    headers: headers,
    body: dataString
  };
  callback = (error, response, body) => {
    if (!error && response.statusCode == 200) {
      const data = JSON.parse(body);
      res.send(data);
      console.log(data.result[0]);
    }
  };
  request(options, callback);
});

router.get("/unloadwallet/:name", (req, res) => {
  var dataString = `{"jsonrpc":"1.0","id":"curltext","method":"unloadwallet","params":["${req.params.name}"]}`;
  var options = {
    url: `http://${USER}:${PASS}@127.0.0.1:18332/`,
    method: "POST",
    headers: headers,
    body: dataString
  };
  callback = (error, response, body) => {
    if (!error && response.statusCode == 200) {
      const data = JSON.parse(body);
      res.send(data);
      console.log(data.result[0]);
    }
  };
  request(options, callback);
});

router.get("/getwalletinfo", (req, res) => {
  var dataString = `{"jsonrpc":"1.0","id":"curltext","method":"getwalletinfo","params":[]}`;
  var options = {
    url: `http://${USER}:${PASS}@127.0.0.1:18332/`,
    method: "POST",
    headers: headers,
    body: dataString
  };
  callback = (error, response, body) => {
    if (!error && response.statusCode == 200) {
      const data = JSON.parse(body);
      res.send(data);
      console.log(data.result[0]);
    }
  };
  request(options, callback);
});

router.get("/listtransactions/:label", (req, res) => {
  var dataString = `{"jsonrpc":"1.0","id":"curltext","method":"listtransactions","params":["${req.params.label}",30,0,true]}`;
  var options = {
    url: `http://${USER}:${PASS}@127.0.0.1:18332/`,
    method: "POST",
    headers: headers,
    body: dataString
  };
  callback = (error, response, body) => {
    if (!error && response.statusCode == 200) {
      const data = JSON.parse(body);
      res.send(data);
      console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@",data.result[0]);
    }
  };
  request(options, callback);
});

router.get("/getbalance", (req, res) => {
  var dataString = `{"jsonrpc":"1.0","id":"curltext","method":"getbalance","params":[]}`;
  var options = {
    url: `http://${USER}:${PASS}@127.0.0.1:18332/`,
    method: "POST",
    headers: headers,
    body: dataString
  };
  callback = (error, response, body) => {
    if (!error && response.statusCode == 200) {
      const data = JSON.parse(body);
      res.send(data);
      console.log(data.result[0]);
    }
  };
  request(options, callback);
});

router.get("/getbalances", (req, res) => {
  var dataString = `{"jsonrpc":"1.0","id":"curltext","method":"getbalances","params":[]}`;
  var options = {
    url: `http://${USER}:${PASS}@127.0.0.1:18332/`,
    method: "POST",
    headers: headers,
    body: dataString
  };
  callback = (error, response, body) => {
    if (!error && response.statusCode == 200) {
      const data = JSON.parse(body);
      res.send(data);
      console.log(data.result[0]);
    }
  };
  request(options, callback);
});

router.get("/listwalletdir", (req, res) => {
  var dataString = `{"jsonrpc":"1.0","id":"curltext","method":"listwalletdir","params":[]}`;
  var options = {
    url: `http://${USER}:${PASS}@127.0.0.1:18332/`,
    method: "POST",
    headers: headers,
    body: dataString
  };
  callback = (error, response, body) => {
    if (!error && response.statusCode == 200) {
      const data = JSON.parse(body);
      res.send(data);
      console.log(data.result[0]);
    }
  };
  request(options, callback);
});

router.get('/getaddressinfo/:address', (req, res) => {
  var dataString = `{"jsonrpc":"1.0","id":"curltext","method":"getaddressinfo","params":["${req.params.address}"]}`;
  var options = {
    url: `http://${USER}:${PASS}@127.0.0.1:18332/`,
    method: 'POST',
    headers: headers,
    body: dataString,
  };

  callback = (error, response, body) => {
    if (!error && response.statusCode == 200) {
      const data = JSON.parse(body);
      res.send(data);
      console.log(data.result);
    }
  };
  request(options, callback);
});

router.get('/importpubkey/:pubekey/:label', (req, res) => {
  var dataString = `{"jsonrpc":"1.0","id":"curltext","method":"importpubkey","params":["${req.params.pubekey}","${req.params.label}",false]}`;
  var options = {
    url: `http://${USER}:${PASS}@127.0.0.1:18332/`,
    method: 'POST',
    headers: headers,
    body: dataString,
  };

  callback = (error, response, body) => {
    if (!error && response.statusCode == 200) {
      const data = JSON.parse(body);
      res.send(data);
      console.log(data.result);
    }
  };
  request(options, callback);
});

module.exports = router;