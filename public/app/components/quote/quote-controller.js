function QuoteController() {

	var quoteService = new QuoteService()
	var showAuthor = false;

	function drawQuote(quote) {
		if (showAuthor == false) {
			template = `<p class="quote">${quote.quote}</p>`
		}
		else if (showAuthor == true) {
			template = `
				<p class="quote">${quote.quote}</p>
				<p class="quote"><em>-${quote.author}</em></p>
			`
		}

		document.getElementById('quote').innerHTML = template;
	}

	// this calls the get quote method upon instantiation. We only need to do this once per refresh so it doesn't need to be in a public method.
	quoteService.getQuote(function (quote) {
		drawQuote(quote);
	})

	this.toggleShowAuthor = function (value) {
		showAuthor = value;
		quoteService.getQuote(drawQuote);
	}





} // end of QuoteController Constructor



