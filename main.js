console.log('main.js is linked!');
var redSquare = document.querySelector('.red-box');
var blueSquare = document.querySelector('.blue-box');
var yellowSquare = document.querySelector('.yellow-box');
var greenSquare = document.querySelector('.green-box');
var startButton = document.querySelector('.button');

var simonColors = [redSquare, blueSquare, yellowSquare, greenSquare];

// var gameMoves = {
// 	moves: [],
// 	movesCopy: [],
// 	round: 0,
// };

var computerMoves = [];

var userMoves = [];

var randomChoice = Math.random();

var randomColor = function() {
	if (randomChoice <= 0.25)
		return computerMove.push(redSquare);
	} else if (randomChoice > 0.25 && <= 0.50) {
		return computerMove.push(blueSquare);
	} else if (randomChoice > 0.50 && <= 0.75) {
		return computerMove.push(greenSquare);
	} else {
        return computerMove.push(yellowSquare);
	}

};

compareMoves = function(); {
	if (computerMoves === userMoves)
		return true;
    } else {
    	return false;
    }

};


var gamePlayStart = function() {
	if (randomColor == true)
		return computerMoves.push

}

var newRound = function() {

};


var startGame = document.getElementById('startButton')
var beginGame = 




var resetButton = document.getElementById('reset')
var clearBoard = function(){
	location.reload();
};


startButton.addEventListener('click', );

redSquare.addEventListener('click', clickSquare);
greenSquare.addEventListener('click', clickSquare);
blueSquare.addEventListener('click', clickSquare);
yellowSquare.addEventListener('click', clickSquare);


	

