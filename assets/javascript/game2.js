
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


// // create variables for the different options 
	var wrong1 = document.getElementById("truth");
	var wrong2 = document.getElementById("yaa");
	var wrong3 = document.getElementById("nzinga");
	var right = document.getElementById("harriet");


// Add click event listener to correct button - alert "Righto!"


right.addEventListener("click", correct);

function correct () {
	alert("Righto");
}