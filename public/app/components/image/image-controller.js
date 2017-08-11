function ImageController() {
	//Your ImageService is a global constructor function what can you do here if you new it up?
	var imageService = new ImageService();

	function removeProtocol(url) {
		var charArray = url.split('');
		for (var i = 0; i < charArray.length; i++) {
			var letter = charArray[i];
			switch (i) {
				case 0:
				case 1:
				case 2:
				case 3:
				case 4:
				case 5:
					charArray.shift();
				case 6:
					if (letter === ':') {
						charArray.shift();
					}
					break;
			}
		}
		return charArray.join('');
	}

	function drawImage(img) {
		// write draw image function here
		var safeUrl = removeProtocol(img.url);
		template = `<img src="${safeUrl}" alt="image of the day">`
		document.getElementById('background-image').innerHTML = template;
	}

	imageService.getImage(drawImage)

}


