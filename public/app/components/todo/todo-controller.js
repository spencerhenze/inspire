function TodoController() {
	// You will need four methods
	// getTodos should request your api/todos and give an array of todos to your callback fn
	// addTodo takes in a todo and posts it to the server
	// toggleTodoStatus takes in a todo marks its status as completed and puts it to the server
	// removeTodo takes in a todoId and sends a delete request to the server
	// **** HINT: Everytime you make a change to any todo don't forget to get the todo list again
	var todoService = new TodoService()

	function draw(todosArr) {
		//WHAT IS MY PURPOSE?
		//BUILD YOUR TODO TEMPLATE HERE
		var template = '<ul class="no-bullets">'
		//DONT FORGET TO LOOP

		todosArr.forEach(todo => {
			var readout = ''

			//strike out completed item's body properties
			if (todo.complete == true) {
				readout = `<del>${todo.body}</del>`;
			}
			if (todo.complete == false) {
				readout = todo.body;
			}

			// <input type="checkbox" name="${todo.id}" onclick="app.controllers.todoController.toggleTodoStatus('${todo._id}')">
			// <label><input type="checkbox" onclick="app.controllers.todoController.toggleTodoStatus('${todo._id}')">${readout}</label>
			template += `
				<li class = "todo-item">
					<button type="button" onclick="app.controllers.todoController.toggleTodoStatus('${todo._id}')">Toggle Done</button>
					<p>${readout}</p>
					<button class="btn btn-danger" type="button" onclick="app.controllers.todoController.removeTodo('${todo._id}')">Delete</button>
				</li>
			`
		})

		template += '</ul>'
		// <i class="fa fa-trash" aria-hidden="true" type="button" onclick="app.controllers.todoController.removeTodo(${todo._id})"></i>
		console.log(template)

		document.getElementById('todo').innerHTML = template;
	}


	// Use this getTodos function as your callback for all other edits
	function getTodos() {
		//FYI DONT EDIT ME :)
		todoService.getTodos(draw)
	}


	this.addTodoFromForm = function (e) {
		e.preventDefault() // <-- hey this time its a freebie don't forget this
		// TAKE THE INFORMATION FORM THE FORM
		var form = e.target
		var newTodo = form.todoBody.value;
		var todo = {
			body: newTodo
		}

		//PASSES THE NEW TODO TO YOUR SERVICE
		//DON'T FORGET TO REDRAW THE SCREEN WITH THE NEW TODO
		//YOU SHOULDN'T NEED TO CHANGE THIS
		todoService.addTodo(todo, getTodos)
		//^^^^^^^ EXAMPLE OF HOW TO GET YOUR TOODOS AFTER AN EDIT
		form.reset();
	}

	this.toggleTodoStatus = function (todoId) {

		// asks the service to edit the todo status
		todoService.toggleTodoStatus(todoId, getTodos)
		// YEP THATS IT FOR ME
	}

	this.removeTodo = function (todoId) {
		// ask the service to run the remove todo with this id
		todoService.removeTodo(todoId, getTodos);
		// ^^^^ THIS LINE OF CODE PROBABLY LOOKS VERY SIMILAR TO THE toggleTodoStatus
	}

	// IF YOU WANT YOUR TODO LIST TO DRAW WHEN THE PAGE FIRST LOADS WHAT SHOULD YOU CALL HERE???

	getTodos();
}
