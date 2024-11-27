const express = require('express');
const cors = require('cors');
const routes = express.Router();
require('dotenv').config();
const {getUsersNames,home} = require('../controllers/homeControllers');
routes.get('/users/names',getUsersNames);

module.exports = routes;
