function TodoService() {
	// A local copy of your todos
	var todoList = []

	function logError(err) {
		console.error('UMM SOMETHING BROKE: ', err)
	}

	this.getTodos = function (draw) {
		$.get('/api/todos')
			.then((todos) => {
				todoList = todos 
				draw(todoList) 
			})
			.fail(logError)
	}

	this.addTodo = function (todo, getTodos) {
		
		$.post('/api/todos', todo)
			.then(getTodos) 
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

		if (todoItem.complete == true) {
			todoItem.complete = false;
		}
		else if (todoItem.complete == false) {
			todoItem.complete = true;
		}


		//STEP 3: Here is that weird Ajax request because $.put doesn't exist
		$.ajax({
			method: 'PUT',
			contentType: 'application/json',
			url: '/api/todos/' + todoId,
			data: JSON.stringify(todoItem)
		})
			.then(getTodos)

			.fail(logError) 
	}

	this.removeTodo = function (todoId, getTodos) {  //todoId will come from the HTML through the controller
		$.ajax({
			contentType: 'application/json',
			method: 'DELETE',
			url: '/api/todos/' + todoId
		})
			.then(getTodos)
			.fail(logError)
	}


}
