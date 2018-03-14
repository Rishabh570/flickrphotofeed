// JavaScript source code
$(document).ready(function () {
$('form').submit(function (evt) {
	evt.preventDefault();
	var searchTerm = $('#input').val();

	// AJAX Starts

	var flickrAPI = "https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
	var animal = searchTerm;
	var flickrOptions = {
		tags: animal,
		format: "json",

	};
	function displayPhotos(data) {
		var photoHTML = '<ul>';
		$.each(data.items, function(i,photo) {
			photoHTML += '<li class="grid">';
			photoHTML += '<a href="' + photo.link + '" class="image">';
			photoHTML += '<img src="' + photo.media.m + '"></a></li>';
		});
		photoHTML += '</ul>';
		$('#photos').html(photoHTML);
	}

		$.getJSON(flickrAPI, flickrOptions, displayPhotos);

}) //end submit

// Fire AJAX every time page reaches 70% of height
if ($(window).scrollTop() >= ($(document).height() - $(window).height())*0.7) {
	document.write('Reached 70% of page');
	console.log("Reached 70% of page");
    	var searchTerm = $('#input').val();

	// AJAX Starts

	var flickrAPI = "https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
	var animal = searchTerm;
	var flickrOptions = {
		tags: animal,
		format: "json",

	};
	function displayPhotos(data) {
		var photoHTML = '<ul>';
		$.each(data.items, function(i,photo) {
			photoHTML += '<li class="grid">';
			photoHTML += '<a href="' + photo.link + '" class="image">';
			photoHTML += '<img src="' + photo.media.m + '"></a></li>';
		});
		photoHTML += '</ul>';
		$('#photos').html(photoHTML);
	}
	
	$.getJSON(flickrAPI, flickrOptions, displayPhotos);
}
	
	
}); // end ready

