
/**************
 *	wikipedia *	
 *		api	  *
 *************/

$(document).ready(function () {

$('form').submit(function (evt) {
	evt.preventDefault();
	var wikiSearch = $('#input').val();

	// AJAX starts for wikipedia

var wikiUrl = "https://en.wikipedia.org/w/api.php?action=query&titles=" + wikiSearch + "&prop=links"

$.ajax({

	url: wikiUrl,
	type: 'GET',
	contentType: "application/json; charset=utf-8"
	dataType: "json",
	success: function (data, status, jqXHR) {
		$('#wiki').html();
		for(var i=0;i<data[1].length;i++) {
			$('#wiki').append("<div><div class="well"><a href="+data[3][i]+"><h2>" + data[1][i]+ "</h2>" + "<p>" + data[2][i] + ")
			};
		};


})






});  






}); 