const express = require("express");
const graphqlHTTP = require("express-graphql");
const mongoose = require("mongoose");
const schema = require("./schema/schema");

const app = express();

mongoose.connect(
  "mongodb+srv://me:testpass@cluster0-eon2d.azure.mongodb.net/test?retryWrites=true&w=majority",
  {
    useNewUrlParser: true
  }
);
mongoose.connection.once("open", () => {
  console.log("Connected to mongodb-atlas Database.");
});

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    graphiql: true
  })
);

app.listen(4000, () => {
  console.log("Listening on port 4000");
});
