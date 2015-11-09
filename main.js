console.log('main.js is linked!');
var redSquare = document.getElementById('red-box');
var blueSquare = document.getElementById('blue-box');
var yellowSquare = document.getElementById('yellow-box');
var greenSquare = document.getElementById('green-box');
var startButton = document.getElementById('start-button');
var resetButton = document.getElementById('restart-button');
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
	if (randomChoice < 0.26) {
		return computerMove.push(redSquare);
	} else if (randomChoice > 0.25 && randomChoice < 0.51) {
		return computerMove.push(blueSquare);
	} else if (randomChoice > 0.50 && randomChoice < 0.76) {
		return computerMove.push(greenSquare);
	} else {
        return computerMove.push(yellowSquare);
	}

};

// compareMoves = function(); {
// 	if (computerMoves === userMoves)
// 		return true;
//     } else {
//     	return false;
//     }

// };

// var userInteraction = function(); {
// 	if (redSquare.addEventListener('click', redSquare === true)
// 		return userMoves.push(redSquare);
// 	} else if (greenSquare.addEventListener('click', greenSquare === true) {
// 		return userMoves.push(greenSquare);
// 	} else if (yellowSquare.addEventListener('click', yellowSquare === true) {
// 		return userMoves.push(yellowSquare);
// 	} else if (blueSquare.addEventListener('click', blueSquare === true) {
// 		return userMoves.push(blueSquare);
// 	}
// };







// var target = event.target;
// event.target.classList.add(selector)
// event.target.removeEventListner(click, simonColors)
// }




// var newRound = function() {

// };




var clearGame = function(){
	location.reload();
};

var startGameAlert = function() {
	window.alert("The game Consists of 4 boxes containing diferrent colors, the computer selecs randomlly a color and is up to the user to remember and select the color. The computer will continue to select new Colors depending if the User sucessfully selects them.");
}

var badMoveAlert = function() {
	window.alert("Buuuh!! Wrong move, mate! Try Again!!");
}; 

var trialAlert = function() {
	window.alert("do it");
};





startButton.addEventListener('click', startGameAlert);

resetButton.addEventListener('click', badMoveAlert);

redSquare.addEventListener('click', trialAlert);
greenSquare.addEventListener('click', greenSquare);
blueSquare.addEventListener('click', blueSquare);
yellowSquare.addEventListener('click', yellowSquare);





	

