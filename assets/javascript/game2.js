// Goal: 

// Step 1: Have computer print a key from the key board

// var letter = l; 

// Function to retrive an action 
// Just like you have to declare a variable, you declare a function!
// myFunction() {
// 	console.log("Hi!");
// }

// function myFunction(p1, p2) {
// 	return p1 * p2; 
// 	console.log(return p1 * p2);
// }

// Outside of text box turns red when user presses key
document.getElementById("demo").addEventListener("keydown", myFunction);

function myFunction() {
	document.getElementById("demo").style.backgroundColor = "red";
}




// Get a message to print when user presses key
document.getElementById("demo2").addEventListener("keydown", myFunction2);

function myFunction2() {
	document.getElementById("demo2").innerHTML = "red";
}
