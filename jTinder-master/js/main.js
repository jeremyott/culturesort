/**
 * jTinder initialization
 */
var likeScore=0;
var dislikeScore=0;
$("#tinderslide").jTinder({

	// dislike callback
    onDislike: function (item) {
	    // set the status text
        $('#status').html('Dislike image ' + (item.index()+1));
        console.log("This is a dislike");
        dislikeScore++;
    },
	// like callback
    onLike: function (item) {
	    // set the status text
        $('#status').html('Like image ' + (item.index()+1));
        console.log("This is a like");
        likeScore++;

    },
	animationRevertSpeed: 200,
	animationSpeed: 400,
	threshold: 1,
	likeSelector: '.like',
	dislikeSelector: '.dislike'
});

/**
 * Set button action to trigger jTinder like & dislike.
 */
$('.actions .like, .actions .dislike').click(function(e){
	e.preventDefault();
	$("#tinderslide").jTinder($(this).attr('class'));
});




//Function personType loops through score options and returns personality type
//Function showPersonality displays personality type on screen and twitter button
//Function tweetScore initializes call to twitter.
//Stored personType is passed on to twitter for sharing
