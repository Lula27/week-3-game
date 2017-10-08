
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
	var right = document.getElementById("ida");


// Add click event listener to correct button - alert "Righto!" - give history lesson if right


right.addEventListener("click", correct);

function correct () {

	// Add text to section
	document.getElementById("question2").innerHTML = "Correct!"; 

	// Create Image...as you would with HTML
	var rightOne = new Image(400, 200);
	rightOne.src = "assets/images/idab.jpg"
	// console.log(myImage.src); 
	document.body.appendChild(rightOne);

}


// If wrong...give message - history lesson - learn even if wrong
wrong1.addEventListener("click", nope);

function nope () {
	
	// Add text to section - historical note 
	document.getElementById("question2").innerHTML = "Incorrect...but Sojourner did say this: I am not going to die, I'm going home like a shooting star."; 

	// Place timer and have the next set of questions appear


	// Create Image...as you would with HTML
	var myImage = new Image(400, 200);
	myImage.src = "assets/images/STruth.jpg"
	// console.log(myImage.src); 
	document.body.appendChild(myImage);

}

// If wrong...give message - history lesson - learn even if wrong
wrong2.addEventListener("click", incorrect);

function incorrect () {
	
	// Add text to section - historical note 
	document.getElementById("question2").innerHTML = "Incorrect...but Yaa Asantewaa did say this:" +  
	"If you, the men, will not go forward, then we will. We, the women, will. " 
	+ "We will fight the white men. We will fight till the last of us" +
	" falls in the battelfields."; 

	// Place timer and have the next set of questions appear


// Create Image...as you would with HTML
var myImage = new Image(400, 350);
myImage.src = "assets/images/yaa2.jpg"
// console.log(myImage.src); 
document.body.appendChild(myImage);


}

wrong3.addEventListener("click", naw);

function naw () {
	
	// Add text to section - historical note 
	document.getElementById("question2").innerHTML = "Incorrect...but the woman way back in the past," +
	" whose name you forgot fought for you." + " You are here now because of her. Thank her.";  
	// "Image source: https://eternallybeautifullyblack.tumblr.com/post/57973949570/i-was-a-slave"; 

	// Place timer and have the next set of questions appear 


	// Create Image...as you would with HTML
	var myImage = new Image(600, 550);
	myImage.src = "assets/images/ancestor.jpg"
	// console.log(myImage.src); 
	document.body.appendChild(myImage);


}



// Question 2 - Event Listeners
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
	var right = document.getElementById("ida");