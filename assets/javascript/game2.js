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
// document.getElementById("demo").addEventListener("keydown", myFunction);

// function myFunction() {
// 	document.getElementById("demo").style.backgroundColor = "red";
// }



// document.getElementById("demo2").addEventListener("keydown", anotherFunction);

// function anotherFunction() {
// 	alert("This is a working function!"); 
// }




// Third Box & Function 

// document.getElementById("demo3").addEventListener("keydown", toCall); 

// Function to cause text to appear

// function toCall() {
// 	document.getElementById("change").innerHTML = "Hello World!"; 
// }


// Game Rules
// 1. User enters mother's name to start game (what if doesn't have mother/bad relationship?)
// 2. Allows User to Enter Level One - Set of questions on page with button

// Change background color with a random text entry
document.getElementById("magic").addEventListener("keydown", Mago); 


// Function
function Mago () {
	document.body.style.backgroundColor = "black"; 
}


// Create New Section w/ Questions
document.getElementById("game").addEventListener("click", addElement);


function addElement () {
	// Create new div element & git it some content
	var newDiv = document.createElement("div");
	var questionOne = document.createTextNode("Test...");
	newDiv.appendChild(questionOne);


	// add newly created element and its content into the DOM
	var currentDiv = document.getElementById("div1");
	document.body.insertBefore(newDiv, currentDiv); 


}