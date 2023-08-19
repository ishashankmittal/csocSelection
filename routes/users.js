const express = require('express');
const router = express.Router();
const passport=require('passport');


const usersConrtoller = require('../controllers/users_controller');

// router.get('/profile',passport.checkAuthentication,usersConrtoller.profile);
router.get('/sign-in', usersConrtoller.signIn);
router.get('/sign-up', usersConrtoller.signUp);

// router.post('/create',usersConrtoller.create);


// router.post('/create-session',passport.authenticate(
//     'local',
//     {failureRedirect:'/users/sign-in'}
// ), usersConrtoller.createSession)

module.exports = router;