const User= require('../models/user')

module.exports.profile=function(req,res){
    return res.render('user_profile',{
        title:'User Profile'
    });
};

module.exports.signUp=function(req,res){
    return res.render('./user_sign_up',{
        title: 'Sign Up'
    });
};

module.exports.signIn=function(req,res){
    return res.render('./user_sign_in',{
        title:'Sign In'
    });
};

//get the sign up data
module.exports.create=function(req,res){
    if(req.body.password!=req.body.confirm_password){
        return res.render('back');
    }

    User.findOne({email:req.body.email})
    .exec()
    .then(user=>{
        if(!user){
            User.create(req.body)
            .then(newUser=>{
                console.log('user created');
                return res.redirect('/users/sign-in');
            })
            .catch(err=>{
                console.log('error in creating user');
                return;
            })
        }else{
            console.log('back');
            return res.redirect('back');
        }
    })
    .catch(err=>{
        console.log('error in finding user');
        return;
    });

};

//get the sign in data
module.exports.createSession=function(req,res){
    return res.redirect('/');
};