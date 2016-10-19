// set up ======================
var express         = require('express');                // create our app w/ express
var app             = express();                // log request to the console(express4)
var bodyParser      = require('body-parser');
var mongojs     	= require('mongojs');
var db              = mongojs('users', ['users']); //mongodatabase and the collection to be used



app.use(express.static(__dirname + '/build'));
app.use(bodyParser.urlencoded({'extended':'true'}));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

// listen (start app with node server.js) ======================================


app.get('/', function(req, res) {
    res.send("hello from server.js");
});

app.use(express.static(__dirname + "/build"));
app.use(bodyParser.json());

//get users from USERS collection
app.get('/users', function(req,res) {
    console.log('i recieve the GET request for USERS');
    db.users.find(function(err, docs) {
        console.log(docs);
        res.json(docs);
    });
});

// set the port of our application
var port = process.env.PORT || 8080;

app.listen(port, function() {
    console.log('Our app is running on http://localhost:' + port);
});