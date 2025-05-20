const express = require("express");
const { createServer } = require("http");
const { connectToMongodb } = require("./database");
const cors = require("cors");

const app = express();
app.cors;
app.express(json());

const server = createServer(app);

app.use((req, res, next) => {
  console.log("well it did work");
  next();
});

connectToMongodb().then(() => {
  server.listen(3000);
});
