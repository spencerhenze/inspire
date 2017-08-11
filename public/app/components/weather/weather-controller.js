function WeatherController() {

	var wc = this;
	var weatherService = new WeatherService();

	function getWeather() {
		weatherService.getWeather(drawWeather)
	}

	function drawWeather(weatherData) {
		console.log(weatherData)
		var weather = weatherData.weather[0];
		var city = weatherData.name;
		var tempF = Math.round((9 / 5) * ((weatherData.main.temp) - 273) + 32) + '°F'
		var iconSrc = `//openweathermap.org/img/w/${weather.icon}.png`

		var template = `
			<div class="weather-icon">
				<img src="${iconSrc}" alt="weather icon">
			</div>
			<div class="temperature"><h2>${tempF}</h2></div>
			<div class="city"><h4>${city}</h4></div>
		`

		document.getElementById('weather').innerHTML = template;
	}

	// again, this calls the function upon instantiation and only needs to run once.
	// weatherService.getWeather(function (weather) {
		//What can you do with this weather object? -draw it!
		// drawWeather(weather);
	// })

	getWeather();

}
