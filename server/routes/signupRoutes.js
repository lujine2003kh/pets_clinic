const express = require('express');
const cors = require('cors');
const routes = express.Router();
require('dotenv').config();
const {createUser,verifyJwtToken} = require('../controllers/signupControllers');
routes.post('/createusers',createUser);
routes.get('/jwt',verifyJwtToken);
routes.get('/home',verifyJwtToken);
module.exports = routes;
