const express = require("express");
const { createServer } = require("http");
const { connectToMongoDb } = require("./database");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const server = createServer(app);

const PORT = process.env.PORT || 3000;

app.use((req, res, next) => {
  console.log("well it did work");
  console.log("welll im to check if kini");

  next();
});

connectToMongoDb().then(() => {
  server.listen(PORT, () => {
    console.log(`here is the port ${PORT}`);
    console.log("welll im to confirm stuff");
  });
});
