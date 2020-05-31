/**
 * Задача 5.
 *
 * Создайте функцию `isPositive`, которая принимает число качестве аргумента.
 * Функция возвращает булевое значение.
 * Если число, переданное в аргументе положительное — возвращается true.
 * Если число, переданное в аргументе отрицательное — возвращается false.
 * 
 * Условия:
 * - Генерировать ошибку, если в качестве входного аргумента был передан не числовой тип;
 */

// Решение
function isPositive(data) {
    
        if (typeof arguments[0] !== 'number') {
            throw new Error(`Ошибка. В качестве аргумента \"${arguments[0]}\" был передан не числовой тип.`);
          
            return;                 
        };
    
        if (arguments[0] > 0) {
            console.log('true');

            return true;
        } else if (arguments[0] < 0) {
            console.log('false');

            return false;
        } else if (arguments[0] == 0) {
            console.log('false');
            return false;        
        };    
};      

//Проверка
isPositive(-3); // false
isPositive(3); // true




exports.isPositive = isPositive;
