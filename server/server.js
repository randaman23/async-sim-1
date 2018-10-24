require("dotenv").config();

const express = require("express"),
  bodyParser = require("body-parser"),
  massive = require("massive"),
  // axios = require('axios'),
  ctrl = require("./controller");

const app = express();

app.use(bodyParser.json());

const { SERVER_PORT, CONNECTION_STRING } = process.env;

massive(CONNECTION_STRING).then(db => app.set("db", db));

app.get("/api/getshelf/:shelf", ctrl.getShelf);
app.get("/api/item/:id", ctrl.getItem);
app.post("/api/bin/:shelf", ctrl.postInventory);
app.delete("/api/item/:id", ctrl.deleteItem);
app.put("/api/item/:id", ctrl.updateBin);
app.listen(SERVER_PORT, () => {
  console.log(`Magic is happen' on port ${SERVER_PORT}`);
});
