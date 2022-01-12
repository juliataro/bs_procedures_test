const express = require('express');
const app = express();
const cors = require('cors'); 
const mysql = require('mysql2');

// Allowing to make calls from frontend to backend api
app.use(cors());
// parse requests of content-type - application/json
app.use(express.json());