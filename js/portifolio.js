const imgDiv = document.getElementById('image');
const imgInnerDiv = document.getElementById('image-inner');
	
imgDiv.addEventListener('mouseover', displayOverlay);
imgDiv.addEventListener('mouseout', removeOverlay);




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