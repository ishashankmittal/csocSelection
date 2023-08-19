module.exports.home = function(req, res){
    return res.render('home', {
        title: "Home"
    });
}
module.exports.signIn = function(req, res){
    return res.render('user_sign_in', {
        title: "Sign In"
    });
}
module.exports.signUp = function(req, res){
    return res.render('user_sign_up', {
        title: "Sign Up"
    });
}