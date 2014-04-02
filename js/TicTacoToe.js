var level = new Array(9);
var currentTurn = 1;

/**
 * Clear the level
 */
function clearLevel () {
	for (var i = level.length - 1; i >= 0; i--) {
		level[i] = 0;
	};
}

function setLevelField(levelField, value) {
	if (level[levelField] == 0) {
		level[levelField] = value;
		changeTurn();
	}
}

function updateLevel () {
	for (var i = level.length - 1; i >= 0; i--) {
		
		if(level[i] == 0) {
			$(".lf" + i).css("background-color", "black");
		} else if (level[i] == 1) {
			$(".lf" + i).css("background-color", "blue");
		} else if (level[i] == 2) {
			$(".lf" + i).css("background-color", "red");
		}
	}
}

function changeTurn () {
	if (currentTurn == 1) {
		currentTurn = 2;
	}

	else if (currentTurn == 2) {
		currentTurn = 1;
	}
}

$(document).ready(function(){
	clearLevel();
	updateLevel();

	$( ".lf0" ).click(function() {
		if(level[0] == 0) {
			setLevelField(0, currentTurn);
			updateLevel();
		}
	});


	$( ".lf1" ).click(function() {
		if(level[1] == 0) {
			setLevelField(1, currentTurn);
			updateLevel();
		}
	});

	$( ".lf2" ).click(function() {
		if(level[2] == 0) {
			setLevelField(2, currentTurn);
			updateLevel();
		}
	});

	$( ".lf3" ).click(function() {
		setLevelField(3, currentTurn);
		updateLevel();
	});

	$( ".lf4" ).click(function() {
		setLevelField(4, currentTurn);
		updateLevel();
	});

	$( ".lf5" ).click(function() {
		setLevelField(5, currentTurn);
		updateLevel();
	});

	$( ".lf6" ).click(function() {
		setLevelField(6, currentTurn);
		updateLevel();
	});

	$( ".lf7" ).click(function() {
		setLevelField(7, currentTurn);
		updateLevel();
	});

	$( ".lf8" ).click(function() {
		setLevelField(8, currentTurn);
		updateLevel();
	});
});
