/**
 * Задача 2.
 *
 * Создайте объект `person` у которого будет 2 свойства: `rate` и `salary`.
 *
 * Свойство `rate` можно менять, но нельзя удалять.
 * Также это свойство не должно участвовать в перечислении всех свойств при переборе.
 *
 * Свойство `salary` нельзя удалять.
 * Также это свойство не должно участвовать в перечислении всех свойств при переборе.
 * При чтении свойства `salary` возвращает результат умножения поля `rate` на текущее число в месяце.
 *
 * Если rate не установлен — возвращаем число 0.
 * 
 * Условия:
 * - Свойство salary обязательно должно быть геттером.
 */
// 'use strict'

//Моя проверка
// Решение
const person = {};

Object.defineProperty(person, 'rate', {
    value: undefined, 
    writable: true, 
    enumerable: false, 
    configurable: false} 
);

Object.defineProperty(person, 'salary', {
    get: function() {
        let date = new Date(2020, 0, 10);
        let day = date.getDate();
        let output = 0;
        return output = this.rate === undefined ? 0 : this.rate * day;
    },
    enumerable: false, 
    configurable: false
});

person.rate = 30;

// Предположим что сегодня 10 января, в этом случае это свойство возвращает число 300
person.salary;

exports.person = person;

//Моя проверка
// person.rate = 30;
// console.log(person.salary);
// console.log(person.rate);
// person.rate = 40;
// Object.defineProperty(person, 'rate', {writable: false})
// delete person.rate;
//Check
// for (let key in person) console.log(key);
// let check = Object.getOwnPropertyDescriptors(person);
// console.log(person.rate);
// console.log(check);
// console.table(check);
