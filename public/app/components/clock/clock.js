
var militaryTime = false;

function militaryClock() {
    var d = new Date();
    document.getElementById('clock').innerHTML = d.toLocaleTimeString('en-US', { hour12: false });
}

function twelveHrClock() {
    var d = new Date();
    document.getElementById('clock').innerHTML = d.toLocaleTimeString('en-US', { hour12: true });
}


function drawClock() {
    var clock = '';
    var interval = setInterval(function () {
        if (militaryTime == true) {
            militaryClock();
        }
        else {
            twelveHrClock();
        }
    }, 1000);


}


function toggleMilitaryTime() {
    
    if (militaryTime == false) {
        militaryTime = true;
    }
    else if (militaryTime == true) {
        militaryTime = false;
    }
    drawClock();
}

drawClock();




