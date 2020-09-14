
const toolsImage = document.getElementById('toolsImage');
const tools1 = document.getElementById('tools1');
const tools2 = document.getElementById('tools2');
const tools3 = document.getElementById('tools3');
const tools4 = document.getElementById('tools4');
const tools5 = document.getElementById('tools5');
window.onload=function(){
  
}

tools1.addEventListener('mouseover', ChangeTool1);
tools2.addEventListener('mouseover', ChangeTool2);
tools3.addEventListener('mouseover', ChangeTool3);
tools4.addEventListener('mouseover', ChangeTool4);
tools5.addEventListener('mouseover', ChangeTool5);


function ChangeTool1 () {
	toolsImage.style.backgroundImage= 'url(./img/gallery1.png)';
	console.log('hello');
}

function ChangeTool2 () {
	toolsImage.style.backgroundImage= 'url(./img/gallery2.png)';
	console.log('hello');
}

function ChangeTool3 () {
	toolsImage.style.backgroundImage= 'url(./img/gallery3.png)';
	console.log('hello');
}

function ChangeTool4 () {
	toolsImage.style.backgroundImage= 'url(./img/gallery2.png)';
	console.log('hello');
}

function ChangeTool5 () {
	toolsImage.style.backgroundImage= 'url(./img/gallery4.png)';
	console.log('hello');
}


