const imgDiv = document.getElementById('image');
const imgInnerDiv = document.getElementById('image-inner');
const modal = document.getElementById('myModal');
const btn = document.getElementById('myBtn');
const span = document.getElementById('close');


imgDiv.addEventListener('mouseover', displayOverlay);
imgDiv.addEventListener('mouseout', removeOverlay);
btn.addEventListener('click', openModal);
span.addEventListener('click', closeModal);




function displayOverlay () {
	if (imgInnerDiv.style.display != 'block') {
		imgInnerDiv.style.display = 'block';
	}
	
	console.log('overlay on');
}

function removeOverlay () {
	if (imgInnerDiv.style.display != 'none') {
		imgInnerDiv.style.display = 'none';
	}
	
	console.log('overlay off');
}


function openModal() {
	modal.style.display = 'block';
	console.log('modal open');
}

function closeModal() {
	modal.style.display = 'none';
	console.log('modal close');
}

window.onclick = function(e) {
	if (e.target == modal) {
		modal.style.display = 'none';
	}
}