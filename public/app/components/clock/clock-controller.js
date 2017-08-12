function ClockController() {

    var clockService = new ClockService();

    function drawClock(time) {

        template = `<h1>${time}</h1>`

        document.getElementById('clock').innerHTML = template;
    }

    this.startTime = function() {
        debugger
        clockService.startTime(drawClock);
    }


}