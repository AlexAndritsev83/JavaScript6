/**
 * Задача 4.
 *
 * Реализуйте класс Stringer, который будет иметь следующие методы (каждый принимает строку в качестве аргумента):
 * 
 * - reverse(string) — возвращает строку в перевернутом виде;
 * - uppercaseFirst(string) — возвращает строку, сделав ее первую букву заглавной;
 * - uppercaseAll(string) — делает заглавной первую букву каждого слова строки и возвращает её.
 *
 * Условия:
 * - Реализация решения — это синтаксис современных классов JavaScript.
 */

// Решение
class Stringer {
    
    reverse(str) {
        if (typeof str !== 'string'){
            throw new Error ('В качестве аргумента передана не строка');
        } else {
        
            return str.split('').reverse().join('');
        };
    }

    uppercaseFirst(str) {
        if (typeof str !== 'string'){
            throw new Error ('В качестве аргумента передана не строка');
        } else {

        return str[0].toUpperCase() + str.slice(1);
        };
    }

    uppercaseAll(str) {
        if (typeof str !== 'string'){
            throw new Error ('В качестве аргумента передана не строка');
        } else {
        
        return str.toLowerCase().split('').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('');
        };
    }
}

//Проверка
const stringer = new Stringer();

console.log(stringer.reverse('good morning!')); // !gninrom doog
console.log(stringer.uppercaseFirst('good morning!')); // Good morning!
console.log(stringer.uppercaseAll('good morning!')); // Good Morning!

exports.Stringer = Stringer;
