function ImageController() {
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
		var safeUrl = removeProtocol(img.url);
		document.body.style.backgroundImage = `url(${safeUrl}`;
	}

	imageService.getImage(drawImage)

}


