require("dotenv").config(); // allows environment variables to be set on process.env should be at top

const express = require("express");
const app = express();

// import Axios from "axios";
const cors = require("cors");

// Allowing to make calls from frontend to backend api
app.use(cors());

// parse json bodies in the request object
app.use(express.json());

// Redirect requests to endpoint starting with /procedures to getProsedures.js
app.use("/procedures", require("./routes/procedures"));

// app.get("/", function (req, res) {
//   res.send("Hei there!");
// });

// Listening for port cheking if serfer running, in terminal command: run indexjs
app.listen(process.env.PORT || 5000, function () {
  console.log(`Listening on port ${process.env.PORT}`);
});
