"use strict";


function random(min, max) {
  var min = 1;
  var max = 100;
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
};


function game(deadLine) {

var userNumber = prompt('Угадай целое число от 1 до 100 включительно:');

while ((userNumber != winNumber) && (deadLine != 0)) {
	if (userNumber == null) {
	alert('Сдулся? =(');
	break;
} else {
		userNumber = parseInt(userNumber);

		if (isNaN(userNumber)) {
			alert('Введи число!');
				deadLine = deadLine - 1;
			if (deadLine > 0) {
				userNumber = prompt('Попыток: ' + deadLine);
			} else {
				break;
			}
		} else if (userNumber < winNumber) {
			alert('Больше!');
				deadLine = deadLine - 1;
			if (deadLine > 0) {
				userNumber = prompt('Попыток: ' + deadLine);
			} else {
				break;
			}
		} else {
			alert('Меньше!');
				deadLine = deadLine - 1;
			if (deadLine > 0) {
				userNumber = prompt('Попыток: ' + deadLine);
			} else {
				break;
			}
		}
	};
} if ((userNumber != winNumber) && (deadLine == 0)) {
	alert('Игра окончена. ОК, чтобы повторить.');
	winNumber = random();
	game(10);
} else {alert('Правильно! ОК, чтобы повторить.');winNumber = random();game(10);}

};


var winNumber = random();

var deadLine = 10;

game(10);