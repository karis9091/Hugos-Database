//const express = require("express");


try{
    const express = require('express')
    const router = express.Router();
    const userController = require('../controllers/users.controller');

    router.post('/', userController.addUser);

    module.exports = router;
}catch(err){

}