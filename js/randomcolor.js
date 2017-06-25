document.getElementById('input').onmouseover = function() {
	var red = Math.floor(Math.random() * 256);
	var green = Math.floor(Math.random() * 256);
	var blue = Math.floor(Math.random() * 256);
	document.getElementById('main-heading').style.color = "rgb(red,green,blue)";
};
