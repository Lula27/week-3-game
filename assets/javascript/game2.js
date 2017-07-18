// Goal: 

// Game Rules
// Hit Start -> Takes you to past, present or future randomly 

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
	// var questionOne = document.createTextNode("Name me: '\"I was the conductor of the Underground Railroad for eight years, and I can say what most conductors can't say; I never ran my train off the track and I never lost a passenger.\"");
	// newDiv.appendChild(questionOne);


	// add newly created element and its content into the DOM
	var currentDiv = document.getElementById("div1");
	document.body.insertBefore(newDiv, currentDiv); 


}

// for loop to get text to stay
for (i = 0; i < 2; i++) {
	document.getElementById("game").addEventListener("click", addElement);
}

// Practice with LoopS
// var text = "Name me: '\"I was the conductor of the Underground Railroad for eight years, and I can say what most conductors can't say; I never ran my train off the track and I never lost a passenger.\"";
// var td; 
// for (i = 0; i < 2; i++) {
// 	td = document.getElementById("game");
// 	if (typeof window.addEventListener === "click"){
// 		(function(_td) {
// 			td.addEventListener("click", function(){
// 				console.log(text);
// 			});
// 		})(text); 
// 	}
// }


document.getElementById("submit").addEventListener("click",Response); 

function Response () {

	// create variables for the different options 
	var wrong1 = document.getElementById("truth");
	var wrong2 = document.getElementById("yaa");
	var wrong3 = document.getElementById("nzinga");
	var right = document.getElementById("harriet");

	// Select Correct 
	if () {
		alert("One of these is correct"); 
	}
}