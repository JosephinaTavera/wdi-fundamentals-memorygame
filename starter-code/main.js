// created variables

var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";

var boardVar = document.getElementById('game-board');


var createBoard = function(){
	for (var i =0; i < 4; i++){
	var deck = document.createElement('div');
	deck.className = "card";
	boardVar.appendChild(deck);
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