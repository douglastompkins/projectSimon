console.log('main.js is linked!');
var red = document.getElementById('red-box');
var blue = document.getElementById('blue-box');
var yellow = document.getElementById('yellow-box');
var green = document.getElementById('green-box');
var startButton = document.getElementById('start-button');
var resetButton = document.getElementById('restart-button');
var simonColors = [blue, green, yellow, red];

var flashColor = function() {
	setTimeout(userMoves());
};

// var gameMoves = {
// 	moves: [],
// 	movesCopy: [],
// 	round: 0,
// };

var computerMoves = [];

var userMoves = [];

var rightMoves = [];



var randomColor = function() {
// pick random color and put in computermoves
  var randomIndex = Math.floor(Math.random() * simonColors.length);
  return simonColors[randomIndex];
};



var flashColor = function() {
	var color = randomColor();
	computerMoves.push(color);
	color.classList.add('active');
	window.setTimeout(function() {
	  color.classList.remove('active');
    }, 5000)
  };


  var redClick = function() {
  	red.classList.add('active');
	window.setTimeout(function() {
	red.classList.remove('active');
    }, 5000)
    userMoves.push(red);
  };

  var blueClick = function() {
  	blue.classList.add('active');
  	window.setTimeout(function() {
  	blue.classList.remove('active');
  	}, 5000)
  	userMoves.push(blue);
  };
  
  var greenClick = function() {
  	green.classList.add('active');
  	window.setTimeout(function() {
  	green.classList.remove('active');
  	}, 5000)
  	userMoves.push(green);
  };

  var yellowClick = function() {
  	yellow.classList.add('active');
  	window.setTimeout(function() {
  	yellow.classList.remove('active');
  	}, 5000)
  	userMoves.push(yellow);
  };

  userInteraction = function() {
  	yellowClick;
  	redClick;
  	blueClick;
  	greenClick;
  };

compareMoves = function() {
	if (computerMoves[0] === userMoves[0]) {
		return trialAlert;
	} else {
		return badMoveAlert;
	};
};


	// for (var i in computerMoves) {
	// 	for (var j in userMoves) {
	// 		if (computerMoves[i] == userMoves[j]) {
	// 			return trialAlert;
	// 		};
	// 	};
	// };

// finalCompare = function() {
// 	if (compareMoves === true) {
// 		return trialAlert;
// 	} else {
// 		return badMoveAlert;
// 	};
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

var startGame = function() {
	window.alert("The game Consists of 4 boxes containing diferrent colors, the computer selecs randomlly a color and is up to the user to remember and select the color. The computer will continue to select new Colors depending if the User sucessfully selects them.");
	flashColor();
    
};

var badMoveAlert = function() {
	window.alert("Buuuh!! Wrong move, mate! Try Again!!");
	clearGame();
}; 

var trialAlert = function() {
	window.alert("do it");
};





startButton.addEventListener('click', startGame);

resetButton.addEventListener('click', badMoveAlert);

red.addEventListener('click', redClick);

blue.addEventListener('click', blueClick);

green.addEventListener('click', greenClick);

yellow.addEventListener('click', yellowClick);

gamePlay = [flashColor, userInteraction, compareMoves, computersMovesLoop];

var gameLoop = function() {
	for (i = 0; i < gamePlay.length; i++) {
		console.log(gameLoop[i]);
     };
  };

var computersMovesLoop = function() {
	var index;
	for (index = 0; i < computerMoves.length; index++) {
		return computersMovesLoop[index] + flashColor;
    };
};




	

