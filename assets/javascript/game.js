
/*Steps:  1. message alerting user welcome to game:  "Welcome to Mind Trix! Click Enter to begin"  + 
		2. user selection options= alphabets in keybord (make and store array of letters)          +
		3. computer stores selected chosen letters (asdfghjkl) are winning letters                 + 
		4. user gets point with correct letter 
		5. wins accumulated and saved in "Wins"													   +
		6. user gets points which are stored in "Losses" section 								   + 
		6. provide running list of letters already selected with previous guesses
		8. list of remaining guesses (user starts with 5 guesses and -1 with each lost guess) 
		7. 3 wins and 3 losses restart game 
		8. Provide optional "Play again" button to restart game */


// alert("Welcome to Mind Trix! Click OK to begin."); 

var choice = 'abcdefghijklmnopqrstuvwxyz'.split(''),  winners ='asdfghjkl'.split(''); 
console.log(choice, winners); 

var wins = 0; 
var losses = 0;
var guessesLeft = 5; 
var guessesSoFar = []; 
console.log(wins, losses, guessesLeft, guessesSoFar); 

/*document.write('scoreboard');*/ 

function displayResults (whoWon, u, c) {
	var display = document.querySelector(".scoreboard"); 
	var string = '<p>' + whoWon + '</p>'; 
	string += '<p>Guesses so far: ' + guessesSoFar; + '</p>'; 
	string += '<p>Guesses left: ' + guessesLeft; + '</p>'; 
	string += '<p>Wins: ' + wins + '</p>';
	string += '<p>Losses: ' + losses + '</p>';

	display.innerHTML = string; 
}

console.log(displayResults); 
//winners ='asdfghjkl'

document.onkeyup = function(event) {
	var key = event.key; 
		if (guessesLeft.length < 5) {
			guessesLeft.push(key); 
		}
	}
	
	if(choice.indexOf(key) === -1) {
		return;
	} 

	var computer = winners;
		if (key === computer){
			guessesSoFar.push(key);
			displayResults(guessesSoFar, guessesLeft, wins, losses);

		}
		else{
			guessesSoFar.push(key);
			guessesLeft--;
			losses++;
			wins++; 
			displayResults(guessesSoFar, guessesLeft, wins, losses); 
		}
	}

//STUCK! confused right now. Where could I put a for loop to make things seamless? 
//How do I get my inputs to disappear above the "Guesses so far" section?
//How can I get the Guesses left to stay in positive territory (not go past 0)?
//How to get things to refresh automatically? location.reload(); 