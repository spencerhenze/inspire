function QuoteService(){
	var url = '//bcw-getter.herokuapp.com/?url=';
	var url2 = 'http://quotesondesign.com/api/3.0/api-3.0.json';
	var apiUrl = url + encodeURIComponent(url2);
	
	this.getQuote =  function(callWhenDone){
		$.get(apiUrl, function(res){
			res = JSON.parse(res)
			callWhenDone(res)
		})
	}
}
