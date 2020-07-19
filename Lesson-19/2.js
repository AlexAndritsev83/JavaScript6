/*
# Задача 2

Создайте функцию `getCustomers` которая умеет объединять 2 массива с объектами.

Операция объединения происходит по ключу `id` и только для объектов у которых установлен флаг `verified: true`.

**Обратите внимание**:

1. Функция `getCustomers` должна возвращать промис;
2. Использование `async & await` **запрещено**;
3. Использование посторонних библиотек **запрещено**;
4. В том случае если в массиве `countries` отсутствует необходимый `id` промис **должен** реджектится с текстом `We don't have information about country for this customer: ${customer.name}`;
5. Склеивание происходит **только** для объектов с флагом `verified: true`.
*/

// Решение
const getCustomers = function (arr1, arr2) {

    const merge = new Promise(
        (resolve, reject) => {

            let arr3 = arr1.map((item, i) => Object.assign({}, item, arr2[i]));

            if (arr1[0].verified === true) {

                let arr4 = arr3.filter(arr3 => arr3.verified === true);

                resolve(arr4);
            } else {
                let error = new Error(`We don't have information about country for this customer: ${arr1[0].name}`);
                
                reject(error.message)
            }
        }
    );

    return merge;
};



// Пример использования

const customers = [{
        id: 'A1',
        name: 'Oliver',
        verified: true
    },
    {
        id: 'A2',
        name: 'alex'
    }
];

const countries = [{
        id: 'A1',
        country: 'usa'
    },
    {
        id: 'A2',
        country: 'poland'
    }
];

getCustomers(customers, countries)
    .then((customers) => console.log(customers))
    .catch(error => console.log(error))