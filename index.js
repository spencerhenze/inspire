//require your dependencies
var express = require('express');
var bodyParser = require('body-parser');
var expressSanitizer = require('express-sanitizer');
var dbConnect = require('./config/db/mlab-config');
var todoRouter = require('./routes/todos');

var server = express();
var port = 3000;


//tell your server what it needs to use
server.use(express.static(__dirname + '/public'));
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended: true}));
server.use(expressSanitizer());


//register your todos routes as api/routes
server.use('/api/todos', todoRouter);



//start your server listening....
server.listen(port, () => {
    console.log('Node Server Starting, \nAvailable on port: ' + port);
})