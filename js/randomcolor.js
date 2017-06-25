
	$('#input').mouseover(function() {
	var red = Math.floor(Math.random() * 256);
	var green = Math.floor(Math.random() * 256);
	var blue = Math.floor(Math.random() * 256);
	$('#main-heading').css("opacity", 1);
	});

	$('#input').mouseleave(function() {
	var red = Math.floor(Math.random() * 256);
	var green = Math.floor(Math.random() * 256);
	var blue = Math.floor(Math.random() * 256);
	$('#main-heading').css("opacity", 0.6);
	});
	
