// Alert
window.addEventListener('load', () =>{alert('Alert from the window')});
document.querySelector('.alert img').addEventListener('mouseover', () =>{alert('Alert from the image')});
document.getElementById('btn-alert').addEventListener('click', () =>{alert('Alert from the button')});
document.getElementById('write').addEventListener('click', () =>{document.write('<h1>This is a new document, refresh to go back !</h1>')});

// Background
const bgChange = document.getElementById('color-1');
const unset = document.getElementById('unset');

function changeBackground(color){
	return function () {
		document.body.style.backgroundColor = `${color}`;
		this.style.backgroundColor = `${color}`;
		this.style.color = 'white';
	}
}

let purple = changeBackground('rgba(73, 92, 255, 0.5)');

bgChange.addEventListener('click', purple);
// unset bg
unset.addEventListener('click', () =>{
	document.body.style.backgroundColor = 'initial';
	document.body.style.color = 'initial';
	bgChange.style.backgroundColor = `initial`;
	bgChange.style.color = `initial`;
})

// Change the image
const image = document.querySelector('.image img');

image.addEventListener('mouseover', changeImage);
image.addEventListener('mouseout', initialImage);

function changeImage(){
	this.src = './images/img3.jpg';
}

function initialImage(){
	this.src = './images/img2.jpg';
}