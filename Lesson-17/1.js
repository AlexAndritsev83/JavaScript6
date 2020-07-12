/**
 * Задача 1.
 *
 * Напишите функцию postpone, которая выводит в консоль счетчик с задержкой.
 *
 * Функция принимает 3 параметра:
 * - Первый параметр `start` — число, c которого начнется отсчет;
 * - Второй параметр `end` — верхний порог, до которого будет идти отсчет;
 * - Третий параметр `delay` — это время в `мс` между выводами.
 *
 * Условия:
 * - Функция принимает три параметра;
 * - Функция содержит валидацию входных параметров на тип number;
 * - Обязательно использование таймера setTimeout и цикла for;
 * - Функция должна уметь считать в обе стороны.
 */

// Решение



function postpone(start, end, delay) {

    if (typeof start !== 'number') {
        throw new Error('В качестве аргумента передан не числовой тип данных')

    } else if (typeof end !== 'number') {
        throw new Error('В качестве аргумента передан не числовой тип данных')
    
    } else if (typeof delay !== 'number') {
        throw new Error('В качестве аргумента передан не числовой тип данных')
    } else {

        if (start < end) {

            for (let i = start; i <= end; i++) {
                setTimeout(() => {
                    console.log(i);
                }, i * delay);
            }

        } else {

            for (let i = 3; i >= 1; i--) {
                setTimeout(() => {
                    console.log(start--);
                }, i * delay);
            }

        }

    }
};

//Проверка
postpone(1, 3, 1000);
// 1
// 2
// 3
postpone(3, 1, 1000);
// 3
// 2
// 1

exports.postpone = postpone;