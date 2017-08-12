function ClockController() {

    var clockService = new ClockService();


    function checkTime(i) {
        if (i < 10) { i = '0' + i };
        return i;
    }


    this.startTime = function () {
        var today = new Date();
        var hour = today.getHours();
        var minute = today.getMinutes();
        updateTime(today, hour, minute);
    }

    function updateTime(today, hour, minute) {
        hour = today.getHours()
        minute = checkTime(today.getMinutes());


        time = `${hour}:${minute}`

        template = `<h1>${time}</h1>`


        document.getElementById('clock').innerHTML = template;
        // var t = setTimeout(updateTime(today, hour, minute), 10000)

    }

}