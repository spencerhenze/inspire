function WeatherController() {
	var wc = this;
	var weatherService = new WeatherService();

	function drawWeather(weatherData) {
		// write draw function here
	}

	// again, this calls the function upon instantiation and only needs to run once.
	weatherService.getWeather(function (weather) {
		console.log(weather);
		//What can you do with this weather object? -draw it!
		drawWeather(weather);
	})


}
