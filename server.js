const NODE_ENV = process.env.NODE_ENV || 'development';
require('dotenv').config({
  path:`.env.${NODE_ENV}`
}); 

const db = require('./db');
const db_url = `mongodb://${process.env.DB_USER}:${process.env.DB_PASSWORD}@curso-platzi-shard-00-00.oatkl.mongodb.net:27017,curso-platzi-shard-00-01.oatkl.mongodb.net:27017,curso-platzi-shard-00-02.oatkl.mongodb.net:27017/${process.env.DB_NAME}?ssl=true&replicaSet=atlas-y4sug6-shard-0&authSource=admin&retryWrites=true&w=majority`;
db(db_url); // Connecting to DataBase

const express = require('express');
const bodyParser = require('body-parser');
const router = require('./network/routes');

const app = express();
app.use(bodyParser.json()); // Setting Body Parser! 
router(app);

// Server Static files

app.use('/app',express.static('public'));
app.listen(3000);
console.log("App is Running:  http://Localhost:3000");




