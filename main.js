console.log('main.js is linked!');
var redSquare = document.getElementById('red-box');
var blueSquare = document.getElementById('blue-box');
var yellowSquare = document.getElementById('yellow-box');
var greenSquare = document.getElementById('green-box');
var startButton = document.getElementById('start-button');

var simonColors = [redSquare, blueSquare, yellowSquare, greenSquare];

var flashColor = function() {
	setTimeout(userMoves())
}

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

var userInteraction = function(); {
	if (redSquare.addEventListener('click', redSquare === true)
		return userMoves.push(redSquare);
	} else if (greenSquare.addEventListener('click', greenSquare === true) {
		return userMoves.push(greenSquare);
	} else if (yellowSquare.addEventListener('click', yellowSquare === true) {
		return userMoves.push(yellowSquare);
	} else if (blueSquare.addEventListener('click', blueSquare === true) {
		return userMoves.push(blueSquare);
	}
};







var target = event.target;
event.target.classList.add(selector)
event.target.removeEventListner(click, simonColors)
}




var newRound = function() {

};











var resetButton = document.getElementById('reset');
var clearGame = function(){
	location.reload();
};


startButton.addEventListener('click', badMoveAlert);
var badMoveAlert = function() {
	alert ("Buuuh!! Wrong move, mate");
}; 
resetButton.addEventListener('click', clearGame);

redSquare.addEventListener('click', redSquare);
greenSquare.addEventListener('click', greenSquare);
blueSquare.addEventListener('click', blueSquare);
yellowSquare.addEventListener('click', yellowSquare);





	

