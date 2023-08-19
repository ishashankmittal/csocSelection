const mongoose=require('mongoose');

mongoose.connect('mongodb://localhost/csocSelection');

//acquire the connection (to check if it is connected)
const db=mongoose.connection;

//error
db.on('error',console.error.bind(console,'error connecting to db'));

//up and running then print the message
db.once('open',function(){
    console.log('successfully connected to the database :: mongodb');
});

module.exports=db;