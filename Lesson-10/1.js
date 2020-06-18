/**
 * Задача 1.
 *
 * Напишите имплементацию функции Function.prototype.bind().
 *
 * Наша собственная функция bind() должна задавать контекст выполнения целевой функции,
 * и возвращать новую, привязанную версию целевой функции.
 *
 * Функция bind() должна обладать следующими параметрами:
 * - Первый параметр — это функция, контекст выполнения которой мы хотим привязать;
 * - Второй параметр — это объект (не массив), в контексте которого нужно вызывать функцию из первого параметра;
 * - Третий и все остальные параметры — это аргументы для вызова функции из первого параметра.
 *
 * Генерировать ошибки если:
 * - Первый параметр не является типом function;
 * - Второй параметр не является типом object;
 * - Второй параметр является массивом.
 *
 * Условия:
 * - Использовать встроенную функцию Function.prototype.bind() запрещено.
 */

// Решение

const checkForFunction = function() {

    if (!(typeof(arguments[0]) === 'function')) {
        throw new Error('First argument is not a function');
    };
}

const checkForObjectAndArray = function() {

    if (!(typeof(arguments[0]) === 'object')) {
        throw new Error('Second argument not an object');
    };

    if (Array.isArray(arguments[0])) {
        throw new Error('Second argument is array');
    };
}


const bind = function(func, context) {

    checkForFunction(func);             
    checkForObjectAndArray(context);              

    const restArgs = [].slice.call(arguments, 2);

    return function() {
        
    const fnArgs = [].slice.call(arguments);
        
   return func.apply(context, restArgs.concat(fnArgs));
    };
};


//Проверка
function getName(greeting, message) {
    return `${greeting} ${message} ${this.name}.`;
}

const user = { name: 'Walter', getName };
const oliver = { name: 'Oliver' };

const boundedGetName = bind(getName, oliver, 'Hello!', 'I am');

console.log(user.getName('Hello!', 'My name is')); // Hello! My name is Walter.
console.log(boundedGetName()); // Hello! I am Oliver.

exports.bind = bind;


//Моя проверка
// console.log('=== My check ==='); 
// const getName1 = 1;
// const oliver1 = [];
// const boundedGetName1 = bind(getName, oliver1, 'Hello!', 'I am');
// console.log(boundedGetName1()); // Hello! I am Oliver.