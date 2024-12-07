const express = require('express');
const cors = require('cors');
const routes = express.Router();
require('dotenv').config();
const {getUsersNames,UserLogin,verifyJwtToken,getUsers} = require('../controllers/loginControllers');
routes.get('/users/names',getUsers);
routes.post('/users/login',UserLogin);
routes.get('/jwt',verifyJwtToken);
module.exports = routes;
