var mongoose        = require('mongoose');              // mongoose for mongo

// configuration ==================
mongoose.connect('mongodb://<soumya>:<soumya>@ds033056.mlab.com:33056/demo_soumya');
/*
   * MongoDB port is 27017 by default.
   * Assuming you have created mongoDB database named "demoDb".
*/
var mongoSchema = mongoose.Schema;
var userSchema  = {
    "userEmail"     : String,
    "userPassword"  : String 
};

// create model if not exists.
module.exports = mongoose.model('user_login', userSchema);