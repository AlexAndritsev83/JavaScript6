/**
 * Задача 7.
 *
 * Создайте функцию `f`, которая принимает массив в качестве параметра.
 * Функция возвращает undefined, и последовательно выводит в консоль (с помощью console.log) элементы массива,
 * переданного в качестве аргумента.
 *
 * Условия:
 * - Генерировать ошибку, если в качестве входного аргумента был передан не массив;
 * - Генерировать ошибку, если в качестве входного аргумента был передан пустой массив;
 * - Обязательно использовать рекурсию;
 * - Использовать циклы запрещено.
 *
 * Заметки:
 * - Возможно вам понадобится метод splice → https://developer.mozilla.org/uk/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
 */


// Решение

function f(arr) {
    
    if (Array.isArray(arr) === false) {
        console.log(arr);
        throw new Error('В качестве входного аргумента был передан не массив');
    } 
    if (!arr.length) {
        console.log(arr);
        throw new Error('качестве входного аргумента был передан пустой массив');
    }

    let i = 0;
    function printArr(arr) {
        console.log(arr[i]);
        i++;
        if (i < arr.length) printArr(arr);
    };

    printArr(arr);

    return undefined; 
    
};


//Проверка
f([1, 2, 3]);
// 1
// 2
// 3

exports.f = f;
