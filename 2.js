// Перепишите `if..else` с использованием нескольких операторов `?`. 
// Для читаемости — оформляйте код в несколько строк.

////////////////// Задание //////////////////
// var message;

// if (login == 'Pitter') {
//   message = 'Hi';
// } else if (login == 'Owner') {
//   message = 'Hello';
// } else if (login == '') {
//   message = 'unknown';
// } else {
//   message = '';
// }

////////////////// Решение //////////////////
var message;
var login; /// Что-бы убрать собщение ReferenceError: login is not defined 
// задекларируем переменную login. (Логично предположить, что переменная login должна быть задекларирована раньше в коде.)

message = (login == 'Pitter') ? 'Hi' : 
          (login == 'Owner') ? message = 'Hello' :
          (login == '') ? message = 'unknown' : message = '';