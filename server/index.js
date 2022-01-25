require("dotenv").config();
const bodyParser = require("body-parser"); // allows environment variables to be set on process.env should be at top

const express = require("express");
const app = express();

// import Axios from "axios";
const cors = require("cors");

// Allowing to make calls from frontend to backend api
app.use(cors());

// Middleware parse json bodies in the request object
app.use(express.json());

// parse request data content type application/json
app.use(bodyParser.json());

// Redirect requests to endpoint starting with /procedures to getProsedures.js

app.use("/symptoms", require("./routes/symptoms"));
// app.use("/contraindications", require("./routes/contraindications"));

app.use((err, req, res, next) => {
  console.log(err.stack);
  console.log(err.name);
  console.log(err.code);

  res.status(err.code).json({
    message: "Something went really wrong",
  });
});

// Listening for port cheking if serfer running, in terminal command: run indexjs
app.listen(process.env.PORT || 5000, function () {
  console.log(`Listening on port ${process.env.PORT}`);
});
