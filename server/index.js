const express = require("express");
const app = express();

// import Axios from "axios";
const cors = require("cors");

// Allowing to make calls from frontend to backend api
app.use(cors());

// parse json bodies in the request object
app.use(express.json());

// Redirect requests to endpoint starting with /procedures to getProsedures.js
// app.use("/procedures", require("./routes/getProcedures"));

app.get("/", function (req, res) {
  res.send("Hei there!");
});

// Listening for port cheking if serfer running, in terminal command: run indexjs
app.listen(process.env.PORT, function () {
  console.log(`Listening on port ${process.env.PORT}`);
});
