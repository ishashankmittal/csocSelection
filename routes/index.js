const express = require('express');

const router = express.Router();
const homeController = require('../controllers/home_controller');

console.log('router loaded');


router.get('/', homeController.home);
router.get('/user_sign_in', homeController.signIn);
router.get('/user_sign_up', homeController.signUp);
module.exports=router;