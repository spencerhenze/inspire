



function drawGreeting(name) {
    // this function draws the whole greeting actually
    var today = new Date();
    var hour = today.getHours();
    var timeOfDay = '';

    if (hour >=1 && hour < 12){
        timeOfDay = 'morning';
    }
    else if (hour >= 12 && hour < 17){
        timeOfDay = 'afternoon'
    }
    else if (hour >= 17) {
        timeOfDay = 'evening';
    }

    template = `<h2>Good ${timeOfDay}, <a href="javascript:void(0)" id="namelink" onclick="resetName()">${name}</a></h2>`

    document.getElementById('name-display').innerHTML = template;
}

function drawNameForm() {
    var template = `
        <form onsubmit="setName(event)">
            <input class="name-input-control" type="text" name="nameInput" placeholder="What should I call you?">
        </form>
    `;
    document.getElementById('name-display').innerHTML = template;
}


function setName (e) {
    
    e.preventDefault();
    var form = e.target;
    var name = form.nameInput.value;

    localStorage.setItem('user-name', name)
    getName();
}

function getName() {
    var userName = localStorage.getItem('user-name');
    if (userName) {
        drawGreeting(userName);
    }
    else {
        drawNameForm();
    }
}

function resetName(){
    localStorage.removeItem('user-name');
    getName();
}

getName();





    
