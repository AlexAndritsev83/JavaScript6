/**
 * Задача 2.
 *
 * Создайте функцию `f`, которая возвращает сумму всех переданных числовых аргументов.
 *
 * Условия:
 * - Функция должна принимать любое количество аргументов;
 * - Генерировать ошибку, если в качестве любого входного аргумента было предано не число.
 */

// // Решение
function f() {
        
    for (let i = 0; i < arguments.length; i++) {
        // console.log(arguments[i]);

        for (let i = 0; i < arguments.length; i++)
        {
            if (typeof arguments[i] !== 'number') {
                    throw new Error(`Ошибка. В качестве аргумента \"${arguments[i]}\" был передано не число.`);
                    // console.log(arguments[i]);
                    return;                 
            }
        }    
    }    

    for (let i = 0; i < arguments.length; i++) {
            let sum = 0;
            
            for (let i = 0; i < arguments.length; i++) {
                sum =  sum + arguments[i];
            }
                
            return sum;
    }     
};

//Проверка
console.log(f(1, 1, 1, 2, 1, 1, 1, 1)); // 9

exports.f = f;
