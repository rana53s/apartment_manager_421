const express = require('express');
const connect = require("./config/db");

const app = express();
app.use(express.json());



app.listen(5000, async () => {
    await connect();
    console.log("Running on Port 5000");
});