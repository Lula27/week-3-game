
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
// for (i = 0; i < 2; i++) {
// 	document.getElementById("game").addEventListener("click", addElement);
// }

// // Practice with LoopS
// // var text = "Name me: '\"I was the conductor of the Underground Railroad for eight years, and I can say what most conductors can't say; I never ran my train off the track and I never lost a passenger.\"";
// // var td; 
// // for (i = 0; i < 2; i++) {
// // 	td = document.getElementById("game");
// // 	if (typeof window.addEventListener === "click"){
// // 		(function(_td) {
// // 			td.addEventListener("click", function(){
// // 				console.log(text);
// // 			});
// // 		})(text); 
// // 	}
// // }

// // create variables for the different options 
// 	var wrong1 = document.getElementById("truth");
// 	var wrong2 = document.getElementById("yaa");
// 	var wrong3 = document.getElementById("nzinga");
// 	var right = document.getElementById("harriet");

// 	// Select Correct 
// 	if (right) {
// 		alert("You got it!"); 
// 	}



// right.addEventListener("click", function() {
// 	alert("Correct!"); 
// }