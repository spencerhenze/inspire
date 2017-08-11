// You should put your todo schema should go here
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

var todoSchema = new mongoose.Schema({
    todo: { type: String, required: true },
    status: { type: Boolean, required: true, default: false },
});

var Todos = mongoose.model('todo', todoSchema);

//add get, post, put?, and delete functions here:


module.exports = router;