// set up ======================
var express         = require('express');                // create our app w/ express
var app             = express();
var morgan          = require('morgan');                  // log request to the console(express4)
var bodyParser      = require("body-parser");         // pull information from HTML POST (express4)
var router          = express.Router()
var methodOverride  = require('method-override'); // simulate DELETE and PUT (express4)
var mongoOp     =   require("./src/model/mongo");

app.use(express.static(__dirname + '/build'));                  // make express look in the public directory for assets (css/js/img)
app.use(morgan('dev'));                                         // log every request to the console
app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
app.use(bodyParser.json());                                     // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(methodOverride());

// listen (start app with node server.js) ======================================

// set the port of our application
// process.env.PORT lets the port be set by Heroku
var port = process.env.PORT || 8080;

// set the view engine to ejs
app.set('view engine', 'ejs');



// set the home page route
app.get('/', function(req, res) {

    // ejs render automatically looks in the views folder
    res.render('index');
});

app.listen(port, function() {
    console.log('Our app is running on http://localhost:' + port);
});