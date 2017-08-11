// You should put your todo schema should go here
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

var todoSchema = new mongoose.Schema({
    body: { type: String, required: true },
    complete: { type: Boolean, required: true, default: false },
});

var Todos = mongoose.model('todo', todoSchema);


// to get all todo items:
router.get('/', function (req, res, next) {
    Todos.find({})
        .then((todos) => {
            res.send(todos);
        })
        .catch(next);
});

// to create a todo item
router.post('/', function (req, res, next) {
    Todos.create(req.body)
        .then((todo) => {
            res.send(todo);
        })
        .catch(next);
});

// to update a todo item
router.put('/:todoId', function (req, res, next) {
    var todoId = req.params.todoId;
    var updatedTodoObj = req.body;

    Todos.findByIdAndUpdate(todoId, updatedTodoObj)
        .then((todo) => {
            res.send({message: 'Successfully Updated Todo Item'});
        })
        .catch(next);
});

// to delete a todo item
router.delete('/:todoId', (req, res, next) => {
    var todoId = req.params.todoId;
    Todo.findByIdAndRemove(todoId)
        .then((todo) => {
            res.send({message: 'Todo Deleted Successfully'});
        })
        .catch(next);
});







router.use(defaultErrorHandler);

function defaultErrorHandler(err, req, res, next) {

    if(req.xhr) {
        res.json({success: false, error: err});
    }
    else {
        res.json({success: false, error: err.message});
    }
}


module.exports = router;