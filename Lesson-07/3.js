/**
 * Задача 3.
 *
 * Напишите функцию `createArray`, которая будет создавать массив с заданными значениями.
 * Первым параметром функция принимает значение, которым заполнять массив.
 * А вторым — количество элементов, которое должно быть в массиве.
 *
 * Генерировать ошибки, если:
 * - В качестве первого аргумента были переданы не число, не строка, не объект и не массив;
 * - В качестве второго аргумента был передан не число.
 */

// Решение

const checkArguments = function (arg1, arg2) {
    if (!(typeof arg2 === 'number')) {
        console.log('Not a number');

        return null;
    }   

    if (!(typeof arg1 === 'number') 
        && !(typeof arg1 === 'string' || arg1 instanceof String) 
        && !(Array.isArray(arg1))
        && !(Object.prototype.toString.call(arg1) === '[object Object]')
    ) {
        
        return null;
    }
};



const createArray = function(el, number) {
    checkArguments(el, number)
    
    const arr = new Array(number);

    return arr.fill(el);
    
};

//Моя Проверка
// const result1 = checkArguments('x', 5);

// console.log(result1); // [ x, x, x, x, x ]


//Проверка

const result = createArray('x', 5);

console.log(result); // [ x, x, x, x, x ]

exports.createArray = createArray;
