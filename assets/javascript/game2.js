// Goal: use keyboard to guess what letters the computer is thinking
// Use button to reset game

var numbers, WinningNumbers, LossingNumbers;

numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

WinningNumbers = [2, 4, 6, 8, 10];

LossingNumbers = [3, 5, 7, 9];



myFunction() {
	document.getElementById("output").innerHTML = numbers; 
}