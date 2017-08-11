function QuoteController() {

	var quoteService = new QuoteService()

	function drawQuote(quote) {
		// write draw quote function here
	}

	// this calls the get quote method upon instantiation. We only need to do this once per refresh so it doesn't need to be in a public method.
	quoteService.getQuote(function (quote) {
		console.log('What is the quote', quote)
		drawQutoe(quote);
	})

}
