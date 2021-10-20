// GitHub https://github.com/andrewelizev/a-level-homeworks

// Lesson 08



console.log('HW1 ==================================================');
// HW1
// fetch basic
// С помощью следующего кода считать и вывести информацию о Люке Скайвокере:
// fetch('https://swapi.dev/api/people/1/')
//   .then(res => res.json())
//   .then(luke => console.log(luke))
// Напишите функцию для отображения любого JSON в форме таблицы. Функция должна принимать два параметра:
// DOM - элемент, в котором строится таблица
// JSON, который нужно отобразить.

// let dom = document.getElementById('dataJson');

let luke = fetch('https://swapi.dev/api/people/1/')
    .then(response => response.json())
    .then(data => console.log(data));

console.log(luke);



console.log('HW2 ==================================================');
// HW2



console.log('HW3 ==================================================');
// HW3




console.log('HW4 ==================================================');
// HW4