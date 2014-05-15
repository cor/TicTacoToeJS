var level = new Array(9);
var currentTurn = 1;
var gameRunning = true;
var gameWinner = 0;

$(document).ready(function(){
	clearLevel();
	updateLevel();

		$( ".lf0" ).click(function() {
			if (gameRunning) setLevelField(0, currentTurn);
			else resetGame();
		});

		$( ".lf0" ).click(function() {
			if (gameRunning) setLevelField(0, currentTurn);
			else resetGame();
		});


		$( ".lf1" ).click(function() {
			if (gameRunning) setLevelField(1, currentTurn);
			else resetGame();
		});

		$( ".lf2" ).click(function() {
			if (gameRunning) setLevelField(2, currentTurn);
			else resetGame();
		});

		$( ".lf3" ).click(function() {
			if (gameRunning) setLevelField(3, currentTurn);
			else resetGame();

		});

		$( ".lf4" ).click(function() {
			if (gameRunning) setLevelField(4, currentTurn);
			else resetGame();

		});

		$( ".lf5" ).click(function() {
			if (gameRunning) setLevelField(5, currentTurn);
			else resetGame();
		});

		$( ".lf6" ).click(function() {
			if (gameRunning) setLevelField(6, currentTurn);
			else resetGame();
		});

		$( ".lf7" ).click(function() {
			if (gameRunning) setLevelField(7, currentTurn);
			else resetGame();
		});

		$( ".lf8" ).click(function() {
			if (gameRunning) setLevelField(8, currentTurn);
			else resetGame();
		});

		$( ".levelField").click(function() {
			updateLevel();
		});
});

function updateLevel () {
	for (var i = level.length - 1; i >= 0; i--) {
		if(level[i] === 0) {
			$(".lf" + i).css("background-color", "#a4a4a4");
		} 

		else if (level[i] == 1) {
			$(".lf" + i).css("background-color", "#3ce6c2");
		} 

		else if (level[i] == 2) {
			$(".lf" + i).css("background-color", "#e0002e");
		}
	}

	if (checkForVictory(1) == true) {
		gameRunning = false;
		gameWinner = 1;
	}
	
	else if (checkForVictory(2) == true) {
		gameRunning = false;
		gameWinner = 2;
	}
	if (gameIsTie()) {
		gameRunning = false;
		gameWinner = 4;
	}

	if(gameWinner == 0 ) $(".victoryDisplay").html('<p><p>');
	if(gameWinner == 1 ) $(".victoryDisplay").html('<p class="blueVictory">Blue has won!</p>');
	if(gameWinner == 2 ) $(".victoryDisplay").html('<p class="redVictory">Red has won!</p>');
	if(gameWinner == 4 ) $(".victoryDisplay").html('<p class="tieVictory">The game is a Tie</p>');
}

function checkForVictory (playerToCheck) {
	var winningMoves = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];

	for (var i = winningMoves.length - 1; i >= 0; i--) {
		if (level[winningMoves[i][0]] == playerToCheck && level[winningMoves[i][1]] == playerToCheck && level[winningMoves[i][2]] == playerToCheck ) return true;
	}
	return false;
}

function gameIsTie() {
	var gameIsTieVar = true;
	for (var i = level.length - 1; i >= 0; i--) {
		if (level[i] == 0) gameIsTieVar = false;
	}
	return gameIsTieVar;
}

function setLevelField(levelField, value) {
	if (level[levelField] === 0) {
		level[levelField] = value;
		changeTurn();
	}
}

function resetGame (){
	gameRunning = true;
	gameWinner = 0;
	clearLevel();
	updateLevel();
}

function clearLevel () {
	for (var i = level.length - 1; i >= 0; i--) {
		level[i] = 0;
	}
}
function changeTurn () {
	if (currentTurn == 1) {
		currentTurn = 2;
	} else if (currentTurn == 2) {
		currentTurn = 1;
	} else { currentTurn = -1; }
}