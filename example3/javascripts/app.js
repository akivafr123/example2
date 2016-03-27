
var main = function() {
	"use strict";

	var $newUL = $("<ul>");
	var $newParagraphElement = $("<p>");
	var $listItemOne = $("<li>").text("this is the first list item");
	var $listItemTwo = $("<li>").text("this is the second list item");
	var $listItemThree = $("<li>").text("this is the third list item");

	$newUL.append($listItemOne);
	$newUL.append($listItemTwo);
	$newUL.append($listItemThree);
	$("main").append($newUL);

	var $footerfirstchild = $("<p>").text("I'm the first child of the footer!");
	$("footer").prepend($footerfirstchild);

	// this is the equivalent to the previous line:
	// $footerfirstchild.appendTo($("footer"));

	$newParagraphElement.text("this is a paragraph");

	$("footer").append($newParagraphElement);

	// remove all children from the list we created previously
	// comment this line out to see them
	$newUL.empty();

	// this will remove the footer paragraph from the DOM
	$("footer p").on("click", function(event) {
		$("footer p").fadeOut();
	} );

	$("body h1").on("click", function(event) {
		$("footer p").fadeIn();
	});

	

	
}



$(document).ready(main);