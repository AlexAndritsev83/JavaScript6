/**
 * Задача 3.
 *
 * Создайте функцию `f`, которая отнимает от первого параметра второй и делит на третий.
 *
 * Условия:
 * - Генерировать ошибку, если в качестве любого входного аргумента было предано не число.
 */

// Решение
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

    return (arguments[0] - arguments[1]) / arguments[2];
  
         
};


//Проверка
console.log(f(9, 3, 2)); // 3

exports.f = f;
