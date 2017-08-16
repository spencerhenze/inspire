var express = require('express');
var bodyParser = require('body-parser');
var expressSanitizer = require('express-sanitizer');
var dbConnect = require('./config/db/mlab-config');
var todoRouter = require('./routes/todos');

var server = express();
var port = 3000;


server.use(express.static(__dirname + '/public'));
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended: true}));
server.use(expressSanitizer());


server.use('/api/todos', todoRouter);



server.listen(port, () => {
    console.log('Node Server Starting, \nAvailable on port: ' + port);
})