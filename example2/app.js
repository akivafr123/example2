var main = function() {
	"use strict";

	$(".comment-input button").on("click", function(event) {
		var $new_comment = $("<p>"),
			comment_text = $(".comment-input input").val();

		$new_comment.text(comment_text);

		// can be chained
		// var $new_comment = $("<p>").text("this is a new comment");
		// or
		// var $new_comment = $("<p>").text($("comment-input input").val());
		$(".comments").append($new_comment);
	});
};

$(document).ready(main);