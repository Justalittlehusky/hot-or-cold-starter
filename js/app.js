var newGame = function(){
	var number = Math.round(Math.random() * 100);
	console.log(number);
	return number;
}

var number = newGame();

var checkGuess = function(guess) {
	if (Math.abs(number - guess) >= 50) {
		$('#guessList').text("BRR Cold! +50 away");
		console.log("cold!");
	}
	else if (Math.abs(number - guess) >= 40) {
		$('#guessList').text('Ice is melting! You\'re within 50 numbers!');
		console.log("Ice is melting");
	}
	else if (Math.abs(number - guess) >= 30) {
		$('#guessList').text('Getting a little warm! less than 40!');
		console.log('getting a little warm');
	}
	else if (Math.abs(number - guess) >= 20) {
		$('#guessList').text('Starting to sweat in here! Less than 30!');
		console.log('Starting to sweat in here!');
	}
	else if (Math.abs(number - guess) >= 10) {
		$('#guessList').text('You\'re getting hot! less than 20!');
		console.log("Hotter!");
	}
	else if (Math.abs(number - guess) >= 5) {
		$('#guessList').text('Burning Hot! less than ten!');
		console.log("Burning Hot!!!")
	}
	else if (Math.abs(number - guess) >=1) {
		$('#guessList').text('You\'re on fire!!! You are 5 characters away!!!');
		console.log("YOU'RE ON FIRE!");
	}
	else if (number === guess) {
		$('#guessList').text('You got it!');
		alert('You got it! Press new game to play again!');
		console.log("You got it!!!!")
	}
}


$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function() {
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function() {
  		$(".overlay").fadeOut(1000);
  	});


  	$('form').submit(function() {
  		var node = $('#userGuess');
  		var count = $('#count');
  		var guess = parseInt(node.val());
  		var counter = parseInt(count.val()[0]);
  		console.log(guess);
  		checkGuess(guess);
  		node.val('');
  		return false;
  	});

  	$(".new").click(function() {
  		newGame();
  		$('#guessList').text('')
  	})


});