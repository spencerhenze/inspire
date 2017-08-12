function WeatherService() {
	var lat = '' 
	var long = '';
	var apiUrl = '';





	function assignLocation(position, draw) {
		lat = position.coords.latitude;
		long = position.coords.longitude;
		apiUrl = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&&APPID=bd82255fd0a21fa1238699b9eda2ee35`
		$.get(apiUrl).then((res) => {
			localStorage.setItem('weatherData', JSON.stringify(res))
			draw(res);
		})
	}

	this.getWeather = function (draw) {
		navigator.geolocation.getCurrentPosition(position => {
			assignLocation(position, draw)
		}, error => {
			console.log("error: ", error);
		})
	}

}
