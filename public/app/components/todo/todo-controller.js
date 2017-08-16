function TodoController() {

	var todoService = new TodoService()
	var showTodos = false;
	var showComplete = false;
	// var todoCount = 0;

	function getTodoCount(todosArr) {
		todoCount = 0;
		todosArr.forEach(todo => {
			if (todo.complete == false) {
				todoCount++;
			}
		})
		return todoCount;
	}

	function drawShowHideButton() {
		var showHideTemplate = ''

		if (showTodos == true) {
			if (showComplete === true) {
				showHideTemplate = `<a href="javascript:void(0)" class="show-complete-button" onclick="app.controllers.todoController.toggleShowHide()"><p>Hide Completed</p></a>`
			}  // if user chooses to hide completed items: 
			else if (showComplete === false) {
				// only append the todo item if the complete property is false
				showHideTemplate = `<a href="javascript:void(0)" class="show-complete-button" onclick="app.controllers.todoController.toggleShowHide()"><p>Show Completed</p></a>`
			}
			document.getElementById('show-hide-button').innerHTML = showHideTemplate;
		}
		else {
			document.getElementById('show-hide-button').innerHTML = '';
		}
	}

	function draw(todosArr) {

		var todoCount = getTodoCount(todosArr);
		drawShowHideButton();

		// if the user chooses to show todos:
		if (showTodos == true) {

			var template = `
				<ul class="no-bullets">
			`
			var iconIndex = 0
			var toggleIconId = 'TI' + iconIndex;

			todosArr.forEach(todo => {
				var readout = ''

				//strike out completed items
				if (todo.complete == true) {
					readout = `<del>${todo.body}</del>`;
				}
				if (todo.complete == false) {
					readout = todo.body;
				}
				//if user chooses to show completed items, append the item:
				if (showComplete === true) {
					showHideTemplate = `<a href="javascript:void(0)" class="show-complete-button" onclick="app.controllers.todoController.toggleShowHide()"><p>Hide Completed</p></a>`
					template += `
						<li class = "todo-item">
							<a href="javascript:void(0)" data-toggle="tooltip" title="toggleDone" onclick="app.controllers.todoController.toggleTodoStatus('${todo._id}')"><i id="${toggleIconId}"class="fa fa-check-circle-o toggle-icon"></i></a>
							<p class="todo-text">${readout}</p>
							<a href="javascript:void(0)" onclick="app.controllers.todoController.removeTodo('${todo._id}')"><i class="fa fa-trash delete-icon"></i></a>
						</li>
					`

				}  // if user chooses to hide completed items: 
				else if (showComplete === false) {
					// only append the todo item if the complete property is false
					if (todo.complete == false) {
						showHideTemplate = `<a href="javascript:void(0)" class="show-complete-button" onclick="app.controllers.todoController.toggleShowHide()"><p>Show Completed</p></a>`
						template += `
							<li class = "todo-item">
								<a href="javascript:void(0)" data-toggle="tooltip" title="toggleDone" onclick="app.controllers.todoController.toggleTodoStatus('${todo._id}')"><i id="${toggleIconId}"class="fa fa-check-circle-o toggle-icon"></i></a>
								<p class="todo-text">${readout}</p>
								<a href="javascript:void(0)" onclick="app.controllers.todoController.removeTodo('${todo._id}')"><i class="fa fa-trash delete-icon"></i></a>
							</li>
						`
					}
				}
			})

			template += '</ul>'

			document.getElementById('todo').innerHTML = template;
			document.getElementById('show-todo-list-button').innerHTML = "Hide Todo List"

			iconIndex++;
		}
		else {  // if the user chooses not to hide todos (also the default case on load)

			document.getElementById('todo').innerHTML = '';
			document.getElementById('show-hide-button').innerHTML = '';
			document.getElementById('show-todo-list-button').innerHTML = "Show Todo List"
		}
		document.getElementById('todo-count').innerHTML = `<p>Things to do: ${todoCount}</p>`
	}



	// Use this getTodos function as your callback for all edits
	function getTodos() {
		todoService.getTodos(draw)
	}


	this.addTodoFromForm = function (e) {
		e.preventDefault() 
		var form = e.target
		var newTodo = form.todoBody.value;
		var todo = {
			body: newTodo
		}

		todoService.addTodo(todo, getTodos)
		form.reset();
	}

	this.toggleTodoStatus = function (todoId) {

		// asks the service to edit the todo status
		todoService.toggleTodoStatus(todoId, getTodos)
	}

	this.removeTodo = function (todoId) {
		// ask the service to run the remove todo with this id
		todoService.removeTodo(todoId, getTodos);
	}

//  ** Toggle functions **
	this.toggleShowHide = function () {
		if (showComplete == true) {
			showComplete = false;
		}
		else if (showComplete == false) {
			showComplete = true;
		}
		getTodos();
	}

	this.toggleTodoPane = function () {
		if (showTodos == true) {
			showTodos = false;
		}
		else if (showTodos == false) {
			showTodos = true;
		}
		getTodos();
	}

	getTodos();
}