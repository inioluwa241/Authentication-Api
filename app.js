const express = require("express");
const { createServer } = require("http");
const { connectToMongodb } = require("./database");
const cors = require("cors");

// const app = express();
app.use(cors());
app.use(express(json()));

const server = createServer(app);

const PORT = process.env.PORT || 3000;

app.use((req, res, next) => {
  console.log("well it did work");
  next();
});

connectToMongodb().then(() => {
  server.listen(PORT, () => {
    console.log(`here is the port ${PORT}`);
  });
});
