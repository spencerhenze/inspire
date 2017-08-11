function WeatherService() {
	var lat = '', long = '';
	var apiUrl = '';

	navigator.geolocation.getCurrentPosition(assignLocation)




	function assignLocation(position) {
		lat = position.coords.latitude;
		long = position.coords.longitude;
		apiUrl = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&&APPID=bd82255fd0a21fa1238699b9eda2ee35`
	}

	this.getWeather = function (draw) {
		// debugger

		$.get(apiUrl).then((res) => {
			console.log(res)

			// res = JSON.parse(res)
			localStorage.setItem('weatherData', JSON.stringify(res))
			draw(res);
		})

	}

}
