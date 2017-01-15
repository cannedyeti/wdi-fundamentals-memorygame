console.log("JS file is connected to HTML! Woo!")

var cardOne = "queen";

var cardTwo = "queen";

var cardThree = "king";

var cardFour = "king";

if (cardTwo === cardFour) {
	window.alert("You've found a match!");
}
else {
	window.alert("Sorry, try again.");
}

if (cardOne === cardFour) {
	window.alert("You've found a match!");
}
else {
	window.alert("Sorry, try again.");
}

if (cardOne === cardThree) {
	window.alert("You've found a match!");
}
else {
	window.alert("Sorry, try again.");
}

if (cardTwo === cardThree) {
	window.alert("You've found a match!");
}
else {
	window.alert("Sorry, try again.");
}

if (cardThree === cardFour) {
	window.alert("You've found a match!");
}
else {
	window.alert("Sorry, try again.");
}

if (cardOne === cardTwo) {
	window.alert("You've found a match!");
}
else {
	window.alert("Sorry, try again.");
}

var createCards = function(){
	var board = document.getElementById('game-board');
		for (i = 0; i < 4; i++) {
			var newCard = document.createElement('div');
			board.appendChild(newCard);
			newCard.setAttribute('class', 'card');
		}
	}


createCards();