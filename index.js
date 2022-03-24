const express = require('express');
const BodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();
const { readdirSync } = require('fs');

// PORT by default is 5000
const PORT = process.env.PORT || 8000;

// Initialize application
const app = express();

// Use middlewares
app.use(cors());
app.use(BodyParser.json());

//Import Mongo Database
const mongoConnection = require('./config/MongoDB');

//Dinamic Routes Autoloading
readdirSync('./routes').map((r) => app.use("/api/v1", require("./routes/" + r)));

//Mongo Database connection
mongoConnection();

// Start application
app.listen(PORT, () => {
    console.log(`This test app is running on port ${PORT}`)
});
