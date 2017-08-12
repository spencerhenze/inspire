
var interval = setInterval(function () {
    myClock();
}, 1000);

myClock = function () {
    var d = new Date();
    document.getElementById('clock').innerHTML = d.toLocaleTimeString();
}

