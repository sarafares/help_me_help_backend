const bcrypt=require('bcrypt');
var express = require('express');
var router = express.Router();
const userCotnroller=require('../Controllers/UserController');
router.get('/UserLogin',userCotnroller.getUser);

module.exports=router;