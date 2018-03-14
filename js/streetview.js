  
$(document).ready(function() {

function loadData() {
	var $body = $('body');
	var address = $('#input').val();
	var streetViewUrl = "https://maps.googleapis.com/maps/api/streetview?size=870x490&location=' + address + '&key=AIzaSyBc63fHmkGW4jWBUGgzHFVoQA_sTxW3TfM";
	
	var myPic = "<img class="bgimg" alt="cant load the image" src=' + streetViewUrl + '>";
	$('.top').css('background-image', 'url(' + streetViewUrl + ')');
}

$('form').submit(loadData);


}); //end ready
