function ImageController() {
	//Your ImageService is a global constructor function what can you do here if you new it up?
	var imageService = new imageService();

	function drawImage(img) {
		// write draw image function here
	}
	
	imageService.getImage(drawImage)

}


