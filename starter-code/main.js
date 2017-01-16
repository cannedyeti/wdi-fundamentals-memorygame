console.log("JS file is connected to HTML! Woo!")

var cards = ["queen", "queen", "king", "king", "jack", "jack"]
var cardsInPlay = [];


var createCards = function(){
	var gameBoard = document.getElementById('game-board');
		for (i = 0; i < cards.length; i++) {
			var newCard = document.createElement('div');
			newCard.setAttribute('data-card', cards[i]);
			gameBoard.appendChild(newCard);
			newCard.setAttribute('class', 'card');
			newCard.addEventListener('click', isTwoCards);

		}
	}


var isTwoCards = function() 
{
    var dataCard = this.getAttribute('data-card');
    cardsInPlay.push(dataCard);
    if (dataCard === 'king') 
    {
        this.innerHTML = '<img src="http://image.shutterstock.com/display_pic_with_logo/10795/10795,1184461084,2/stock-vector-king-of-clubs-playing-card-illustration-vector-3867085.jpg" alt="King" />'; // King
    } else if (dataCard === 'queen')
    {
        this.innerHTML = '<img src="https://s-media-cache-ak0.pinimg.com/originals/f1/3e/55/f13e55f7e734346748bf45b03465f403.jpg" alt="Queen" />'; // Queen
    } else
    {
        this.innerHTML = '<img src="http://previews.123rf.com/images/mannaggia/mannaggia0911/mannaggia091100006/5957156-Jack-of-hearts-playing-card-Stock-Vector-cards.jpg" alt="Jack" />'; // Joker
    }
    if (cardsInPlay.length === 2)
    {
        isMatch(cardsInPlay);

    }
}



var isMatch = function(cardsInPlay)
{
    if (cardsInPlay[0] === cardsInPlay[1])
    {
        setTimeout(function(){ alert("You did it!"); }, 200);
        clearDelay();

    } else 
    {
        setTimeout(function(){ alert("Try again.."); }, 200);
        clearDelay();
    }
}


var clearboard = function() {
	var gameBoard = document.getElementById('game-board')
	while (gameBoard.firstChild) {
    gameBoard.removeChild(gameBoard.firstChild);
	}
    createCards();
    cardsInPlay = [];
}
var clear;

function clearDelay() {
	clear = setTimeout(clearboard, 2000);
}

createCards();