// Перепишите код, заменив оператор `switch` на оператор `if..else`:

////////////////// Задание //////////////////
// const value = 'c';

// switch (value) {
//     case 'a':
//         console.log('a');
//         break;

//     case 'b':
//     case 'c':
//     case 'd':
//     case 'e':
//         console.log('others');
//         break;

//     default:
//         console.log('unknown');
// }

////////////////// Решение //////////////////
const value = 'c';

if (value === 'a') {
    console.log('a');    
}   else if (value === 'b') {
    console.log('others');
}   else if (value === 'c') {
    console.log('others');
}   else if (value === 'd') {
    console.log('others');
}   else if (value === 'e') {
    console.log('others');
}   else {
    console.log('unknown');
}