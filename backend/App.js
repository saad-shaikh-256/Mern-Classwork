require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
var db = require("./db");
const userRoute = require('./Routes/userAPI')

// import express from 'express'
// import bodyParser from 'body-parser'
// import cors from 'cors'

// Modules
var dt = require("./Modules/DateTimeModule");
// import dt from './myfirstmodule'

app.use(bodyParser.json());
app.use(cors());
app.use("/api/user", userRoute);

// Setting up Port
const port = 5000;
app.get("/", (req, res) => {
  res.send("Hello World from server");
});

app.listen(port, () => {
  console.log(` -------------------------------- `);
  console.log(` `);
  console.log(dt.myDatetime());
  console.log(` `);
  console.log(` -------------------------------- `);
  console.log(` `);
  console.log(`server is running on http://localhost:${port}`);
  console.log(` `);
  console.log(` -------------------------------- `);
});
