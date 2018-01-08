window.onload = function () {
	var col = getRandomInt(1, 20),
		row = getRandomInt(1, 20), 
		countLR  = 0,
		countUpD = 0,
		lengthRow = 20,
		lengthCol = 20,
		n = lengthRow * lengthCol,
		targRow = getRandomInt(1, 20),
		targCol = getRandomInt(1, 20);
	createMatrix(n);
	setCell(row, col, true);
	getTarget(targRow, targCol);


	key_down();

	document.onkeydown = function(kodkey) {
		if (kodkey.key == "d") {
			countLR += 1;
			move(countLR, countUpD, row, col, n, targRow, targCol);
		};
		if (kodkey.key == "a") {
			countLR -= 1;
			move(countLR, countUpD, row, col, n, targRow, targCol);
		};
		if (kodkey.key == "w") {
			countUpD -= 1;
			move(countLR, countUpD, row, col, n, targRow, targCol);
		};
		if (kodkey.key == "s") {
			countUpD += 1;
			move(countLR, countUpD, row, col, n, targRow, targCol);
		};
	};
};

	function key_down () {
		var e = event.keyCode;
		console.log(e);
	};

function move (c, c2, row, col, n1, targRow, targCol) {
	for (var i = 1; i <= 20; i++) {
		for (var j = 1; j <= 20; j++) {
			setCell(i, j, false);
		};	
	};	

	setCell(row + c2,	col + c,	true);
	getTarget(targRow, targCol);
	findTarget(row + c2, col + c, targRow, targCol);

}

// Создание матрицы ячеек 
function createMatrix (n) {
	var matrix = document.getElementById('matrix'),
		 div, i;
	for (var i = 0; i < n; i++) {
		div = document.createElement('div');
		div.className = 'cell';
		matrix.appendChild(div); // Добавляем внутрь (div id="matrix") новый div
	};
};

// Функция генерации случайных целых чисел в пределах max - min
function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
};


function getElement (row, col) {
	return document.getElementById('matrix').children[(row - 1)*20 + col - 1];
};


function setCell (row, col, val) {
	var z = getElement(row, col);
	if (val === true) {
		z.classList.add('on');		// Добавляю новый клас 'on'
	} else {
		z.className = 'cell';
	}

};

function getTarget (targRow, targCol) {
	ztarget = getElement(targRow, targCol);
	ztarget.classList.add('targ');
};

function findTarget (row, col, targRow, targCol) {
	if ((row == targRow) && (col == targCol)){
		alert('Victory');
	};
};