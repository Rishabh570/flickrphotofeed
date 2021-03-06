var processing = false;

// JavaScript source code
$(document).ready(function () {

$('form').submit(function (evt) {
	evt.preventDefault();
	var searchTerm = $('#input').val();

	// AJAX Starts

	var flickrAPI = "https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
	var animal = searchTerm;
	var flickrOptions = {
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

// Fire AJAX every time page reaches 70% of height ##########################################
    $(document).scroll(function(e){
        var searchTerm = $('#input').val();
	var flickrAPI = "https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
	var animal = searchTerm;
	var flickrOptions = {
		format: "json",
	};

        if (processing) {
            return false;
	}

        if ( $(document).scrollTop() >= ($(document).height() - $(window).height())*0.7) {
	        console.log('reached');  // Testing statement
                processing = true;

		// AJAX Starts
		function displayPhotos(data) {
			var photoHTML;
			$.each(data.items, function(i,photo) {
				photoHTML += '<li class="grid">';
				photoHTML += '<a href="' + photo.link + '" class="image">';
				photoHTML += '<img src="' + photo.media.m + '"></a></li>';
			});

			$('#photos').append(photoHTML);
		}
		$.getJSON(flickrAPI, flickrOptions, displayPhotos);
		processing = false;
        }
    });
//############################################################################################
}); // end ready
