const express = require("express");
const app = express();
const port = 3008;

const bodyParser = require("body-parser");
const cors = require("cors");
const mysql = require("mysql2");

// Allowing to make calls from frontend to backend api
app.use(cors());
// parse requests of content-type - application/json
app.use(express.json());

// // Listening for port cheking if serfer running, in terminal command: run indexjs
app.listen(port, () => {
  console.log("your server is runnig on port 3008");
  //   db.connect(function (err) {
  //     if (err) throw err;
  //     console.log("Connected!");
  //   });
});
