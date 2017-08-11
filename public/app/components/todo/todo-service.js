function TodoService() {
	// A local copy of your todos
	var todoList = []

	function logError(err) {
		console.error('UMM SOMETHING BROKE: ', err)
	}

	this.getTodos = function (draw) {
		// You probably don't need to change anything in this function.....
		$.get('/api/todos')
			.then((todos) => {
				todoList = todos // <-- WHY IS THIS IMPORTANT???? -- it reassigns the array to the updated data
				draw(todoList) // <-- WHERE DOES THIS DRAW FUNCTION COME FROM??? -- callback function passed from the controller. 
			})
			.fail(logError)
	}

	this.addTodo = function (todo, getTodos) {
		// WHAT IS THIS FOR???  -- writing new todo items to the db
		$.post('/api/todos', todo)
			.then(getTodos) // <-- DO NOT CHANGE THIS IT WORKS BUT DO YOU KNOW WHY?
			.fail(logError)
	}

	this.toggleTodoStatus = function (todoId, getTodos) {
		//STEP 1: Find the todo by its id **HINT** todoList
		var todoItem = todoList.find((todo) => todo._id == todoId);
		//STEP 2: Change the completed flag to the opposite of what is is **HINT** todo.completed = !todo.completed
		// what to do if nothing is found:
		if (!todoItem) {
			return logError('No Todo Was Found');
		}

		todoItem.complete = !todoItem.complete

		//STEP 3: Here is that weird Ajax request because $.put doesn't exist
		$.ajax({
			method: 'PUT',
			contentType: 'application/json',
			url: '/api/todos/' + todoId,
			data: JSON.stringify(todoItem)
		})
			.then((message) => {
				//DO YOU WANT TO DO ANYTHING WITH THIS?
				res.send({ message: 'todo status changed successfully' })
				getTodos() // <-- LEAVE ME ALONE I WORK LIKE THIS
			})
			.fail(logError) // BECAUSE AJAX IS A UNIQUE SNOWFLAKE AND HAS TO BE DIFFERENT YOU CANT USE .catch
	}

	this.removeTodo = function (todoId, getTodos) {  //todoId will come from the HTML through the controller
		$.ajax({
			contentType: 'application/json',
			method: 'DELETE',
			url: '/api/todos/' + todoId
		}) 
			.then(getTodos)
			.fail(next)
	}



	// I KNOW LOTS OF CODE RIGHT

}
