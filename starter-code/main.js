// created variables

var cards = ["queen", "queen","king", "king"];
var cardsInPlay = [];

var boardVar = document.getElementById('game-board');

var isMatch = function(inPlay){
	// test two cards match 
	if (inPlay[0] === inPlay[1]){
		return true
	}
}

//checks to see if there are cards in play
function isTwoCards() {

  // add card to array of cards in play
  // 'this' hasn't been covered in this prework, but
  // for now, just know it gives you access to the card the user clicked on
  cardsInPlay.push(this.getAttribute('data-card'));

  // if you have two cards in play check for a match
  if (cardsInPlay.length === 2) {

    // pass the cardsInPlay as an argument to isMatch function
    isMatch(cardsInPlay);

    // clear cards in play array for next try
    cardsInPlay = [];

  }

}

// encounter problems when adding DOM commands.  

var createBoard = function(){
	for (var i =0; i < cards.length; i++){

	var deck = document.createElement('div');
	deck.className = "card";
	boardVar.appendChild(deck);
    boardVar.setAttribute('data-card', cards[i]);	
	deck.addEventListener('click', isTwoCards);     
//deck.innerHTML = '<img src="KDiamonds.png" alt="King of Diamonds" />';.
}
}

createBoard();




/*if (cardTwo === cardFour  || cardTwo === cardThree){
	alert("You found a match!")
}
else {
if (cardOne === cardThree || cardOne === cardFour){
		alert("You found a match!")
}
else{
if (cardOne === cardTwo){
		alert("You found a match!")
}
else {
if (cardThree === cardFour){
		alert("You found a match!")
}
else{
	alert("Sorry, try again.")
}
}
}
}*/