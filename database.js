const { MongoClient } = require("mongodb");

const Url =
  "mongodb+srv://dbinioluwa:<inioluwasdb>@cluster0.yxhxxkm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(Url);

let db;

async function connectToMongoDb() {
  try {
    await client.connect();

    db = client.db(UsersDB);
    console.log("wellllll, guess who connected to mogodb!!!!!!");
  } catch (error) {
    console.log("wellllll, guess who didnt connected to mogodb");
  }
}

module.exports = { connectToMongoDb };
