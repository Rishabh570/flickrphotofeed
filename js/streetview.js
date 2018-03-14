  
$(document).ready(function() {

function loadData() {
	var $body = $('body');
	var address = $('#input').val();
	var streetViewUrl = 'https://maps.googleapis.com/maps/api/streetview?size=870x490&location=' + address + '';
	
	var myPic = '<img class="bgimg" alt="cant load the image" src="' + streetViewUrl + '">';
	$('.container-fluid').css('background-image', 'url(' + streetViewUrl + ')');
}

$('form').submit(loadData);


}); //end ready
