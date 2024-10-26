// backend framework
const express = require('express');
// middleware:to make the front end able to send requests
const cors = require('cors');
//routes
const bodyParser = require('body-parser');
const userRoutes = require('../server/routes/users');
// database
const mongoose=require('mongoose');
// to take var from the .env file 
const dotenv = require('dotenv');
dotenv.config();
// connect to data base
const connectDB = require('../server/config/userConfig');
// the main app
const app = express();
connectDB();

app.use(bodyParser.json());
app.use(cors());
app.use('/api',  userRoutes);

module.exports = app;
