const express = require("express");
const cors = require("cors");

const connect = require("./config/db");
const app = express();
const { register, login, newToken } = require("./controllers/auth");
const flatController = require("./controllers/flat.controller");

app.use("/signup", register);
app.use("/login", login);
app.use("/flats", flatController);

app.use(cors());
app.use(express.json());

app.listen(5000, async () => {
  await connect();
  console.log("Running on Port 5000");
});
