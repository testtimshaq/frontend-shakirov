		// var y = prompt('Введите цифру или число для сложения:');
		// var v = 0;
		

		// while (y != null) {
		// y = parseInt(y);
		// if (isNaN(y) == true)
		// 	{
		// 		alert('Введено некорректное значение =(');
		// 		break;
		// } else
		// {
		// 	v = v + y;
		// }
		
		// 	y = prompt('Введите цифру или число для сложения:');
		// }

		// alert('Сумма введенных значений: ' + v);
"use strict";


function random(min, max) {
  var min = 1;
  var max = 100;
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
};


function range(){

}


var winNumber = random();

var userNumber = prompt('Угадай целое число от 1 до 100 включительно:');

while (userNumber != winNumber) {
	if (userNumber == null) {
	alert('Сдулся? =(');
	break;
} else {
		userNumber = parseInt(userNumber);

		if (isNaN(userNumber)) {
			alert('Введи число!');
			userNumber = prompt('Угадай целое число от 1 до 100 включительно:');
		} else if (userNumber < winNumber) {
			alert('Больше!');
			userNumber = prompt('Угадай целое число от 1 до 100 включительно:');
		} else {
			alert('Меньше!')
			userNumber = prompt('Угадай целое число от 1 до 100 включительно:');
		}
	};
} if (userNumber == null) {
	alert('Игра окончена. ОК, чтобы повторить!');location.reload();
} else {alert('Правильно! ОК, чтобы повторить!');location.reload();}








// нажал отмена?
	// Сдулся? =(
// парсим. NaN?
	// Введи число!
// меньше?
	// Больше!
// Меньше!