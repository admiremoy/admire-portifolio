const TypeWriter = function(txtElement, words, wait = 3000) {
	this.txtElement = txtElement;
	this.words = words;
	this.txt = '';
	this.wordIndex = 0;
	this.wait = parseInt(wait, 10);
	this.type();
	this.isDeleting = false;
}

//Type Method
TypeWriter.prototype.type = function() {
	//Current index of words
	const current = this.wordIndex % this.words.length;
	//GEet Full Text of current words
	const fullTxt = this.words[current];

	// Check if deleting
	if (this.isDeleting) {
		// Remove Char
		this.txt = fullTxt.substring(0, this.txt.length - 1);
	} else {
		//Add a Character
		this.txt = fullTxt.substring(0, this.txt.length + 1);
	}

	// Insert txt into Element
	this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`

	//Initial Type Speed
	let typeSpeed = 300;

	if (this.isDeleting) {
		typeSpeed /= 2;
	}

	// If word is complete
	if (!this.isDeleting && this.txt === fullTxt) {
		// Make Pause at End
		typeSpeed = this.wait;
		//Set Delete to true
		this.isDeleting = true;
	} else if(this.isDeleting && this.txt === '') {
		this.isDeleting = false;
		//Move to the Next Word
		this.wordIndex++;
		//Pause before start Typinf
		typeSpeed = 500;
	}

	setTimeout(() => this.type(), typeSpeed)
}
//Init On Dom Load
// document.addEventListener('D0MContentLoaded', init);

//Init App
window.onload = function () {
	const txtElement = document.querySelector('.txt-type');
	const words = JSON.parse(txtElement.getAttribute('data-words'));
	const wait = txtElement.getAttribute('data-wait');
	//Init TpeWriter
	new TypeWriter(txtElement, words, wait);
}

