const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const userRoutes=require('./routes/userRoutes')
const PORT = process.env.PORT || 3001;
const url = process.env.DB_URL;

function initiliazer() {
  corsConfig();
  parseConfig();
  dbConfig();
  routeConfig();
  bodyConfig();
}
initiliazer();
function corsConfig() {
  app.use(cors());
}
function parseConfig() {
  app.use(express.json());
}
function dbConfig() {
  mongoose
    .connect(url)
    .then(() => {
      console.log("connected to database");
    })
    .catch((err) => {
      console.error(`Error connecting  to the database. \n${err}`);
    });
}
function routeConfig() {
    app.use('/api',userRoutes)
    
}
function bodyConfig() {}

app.listen(PORT, () => {
  console.log(`server is running on the http://localhost:${PORT}`);
});
