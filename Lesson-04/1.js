/**
 * Задача 1.
 *
 * Создайте объект `person` c одним свойством `salary`.
 * При чтении этого свойства должна возвращаться строка с текстом.
 * Если до конца месяца осталось больше чем 20 дней — возвращается строка `good salary`, а если нет — `bad salary`
 * 
 * Условия:
 * - Свойство salary обязательно должно быть геттером.
 */

// const person = {};

// Решение

const person = {
    get salary () {
            let date = new Date();
            let time = new Date(date.getTime());
            time.setMonth(date.getMonth() + 1);
            time.setDate(0);
            let days = time.getDate() > date.getDate() ? time.getDate() - date.getDate() : 0;
            let answer = null;
        return days > 20 ? 'good salary' : 'bad salary';
    }
};

//Моя проверка вывода
// console.log(person.salary);

person.salary; // good salary

exports.person = person;
