var newGame = function(){
	var number = Math.round(Math.random() * 100);
	console.log(number);
	return number;
}

var counter = 0;

// var guessCounter = function(count){
// 	var count = count;
// 	count++;
// 	console.log(count)
// }
function guessCounter () {

};

var number = newGame();

var checkGuess = function(guess) {
	if (guess > 100 || guess < 0){
		alert("Please choose a number between 1 - 100")
	}
	else if (Math.abs(number - guess) >= 50) {
		$('#feedback').text("BRR Ice cold");
		console.log("cold!");
	}
	else if (Math.abs(number - guess) >= 40) {
		$('#feedback').text('Cold');
		console.log("Ice is melting");
	}
	else if (Math.abs(number - guess) >= 30) {
		$('#feedback').text('Lukewarm');
		console.log('getting a little warm');
	}
	else if (Math.abs(number - guess) >= 20) {
		$('#feedback').text('Kind of Warm');
		console.log('Starting to sweat in here!');
	}
	else if (Math.abs(number - guess) >= 10) {
		$('#feedback').text('its gettin kinda hot');
		console.log("Hotter!");
	}
	else if (Math.abs(number - guess) >= 5) {
		$('#feedback').text('Hot!!!');
		console.log("Burning Hot!!!")
	}
	else if (Math.abs(number - guess) >=1) {
		$('#feedback').text('You\'re on fire!!!');
		console.log("YOU'RE ON FIRE!");
	}
	else if (number === guess) {
		$('#feedback').text('You got it!');
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
  		counter++;
  		$('#count').text(counter);
  		var node = $('#userGuess');
  		var guess = parseInt(node.val());
  		checkGuess(guess);
  		node.val('');
 		$("#guessList").append("<li>" + counter + "</li>")
  		return false;
  	});

  	$(".new").click(function() {
  		$('#guessList').text('')
  		$('#feedback').text('Make your Guess!')
  		$('#count').text(0)
  		newGame();
  		
  	})


});
