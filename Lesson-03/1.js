/**
 * Задача 1.
 *
 * Напишите функцию upperCaseFirst(string).
 * Функция преобразовывает первый символ переданной строки в заглавный и возвращает новую строку.
 *
 * Условия:
 * - Функция принимает один параметр;
 * - Функция содержит валидацию входного параметра на тип string.
 */

// Решение

upperCaseFirst('pitter'); // Pitter
upperCaseFirst(''); // ''

exports.upperCaseFirst = upperCaseFirst;

function upperCaseFirst(string) {
    if (typeof string == 'string') {
        let newString = string.charAt(0).toUpperCase() + string.slice(1);
        return newString;
    }   
}

//Моя проверка
// console.log(upperCaseFirst('pitter'));
// console.log(upperCaseFirst(' '));


