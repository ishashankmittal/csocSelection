const express=require('express');
const app=express();
const port=3000;
const expressLayouts=require('express-ejs-layouts');
const db=require('./config/mongoose');
const user= require('./models/user');
const cookieParser = require('cookie-parser');

//used for session cookie
const  session=require('express-session');
const passport=require('passport');
const passportLocal=require('./config/passport-local-strategy');


app.use(express.urlencoded());
app.use(cookieParser());
app.use(express.static('./assets'));

//set up view engine
app.set('view engine','ejs');
app.set('views', './views');

app.use(session({
    name:'codeial',
    //TODO change the secret key before deployment
    secret:'blahsomething',
    saveUninitialized:false,
    resave:false,
    cookie:{
        maxAge:(1000*60*1000)
    }
}));

app.use(passport.initialize());
app.use(passport.session());

app.use(passport.setAuthenticatedUser);

app.use(expressLayouts); 
//extract styles and scripts from the sub pages
app.set('layout extractStyles',true);
app.set('layout extractScripts',true);


// use express router
app.use('/', require('./routes'));

app.listen(port,function(err){
    if(err){
        console.log('error in running server : ',err);
    }
    console.log ('server is up and running at port: ',port);
});