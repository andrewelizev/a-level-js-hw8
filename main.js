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

let dom = document.getElementById('dataJson');
let url = 'https://swapi.dev/api/people/1/';

let query = function(url) {
    fetch(url)
    .then(response => response.json())
    .then(data => jsonToTable(dom, data))
    .catch(err => console.log(err));
};

function jsonToTable(dom, data) {
    console.log(data);

    let tr, td;
    let tableBody = document.createElement('table');
    tableBody.setAttribute('id', 'tableBody');

    for (let key in data) {
        tr = document.createElement('tr');
        td = document.createElement('td');
        td.innerText = key;
        tr.append(td);

        td = document.createElement('td');

        if (data[key].includes('https://swapi.dev/api/')) {
            let btn = document.createElement('button');
            btn.setAttribute('value', data[key]);
            btn.innerText = data[key].slice(22, -1);
            btn.setAttribute('onclick', 'query(value)');
            td.append(btn);
            tr.append(td);
        } else if(Array.isArray(data[key])) {
            for (let elem of data[key]) {
                console.log(elem);
                if (elem.includes('https://swapi.dev/api/')) {
                    let btn = document.createElement('button');
                    btn.setAttribute('value', elem);
                    btn.innerText = elem.slice(22, -1);
                    btn.setAttribute('onclick', 'query(value)');
                    td.append(btn);
                }
            }
            tr.append(td);
        } else {
            td.innerText = data[key];
            tr.append(td);
        }

        tableBody.append(tr);
    }

        table = document.getElementById('tableBody');

        if (!table) {
            dom.append(tableBody);
        } else {
            table.replaceWith(tableBody);
        }
}

query(url);



console.log('HW2 ==================================================');
// HW2
// Расширить функцию отображения:
// Если одно из полей строка или массив.
// Если строки или строка содержат в себе https://swapi.dev/api/
// То выводить вместо текста строки кнопку, при нажатии на которую:
// делается fetch данных по этой ссылке
// функция отображения запускает сама себя(рекурсивно) для отображения новых данных в том же элементе.


console.log('HW3 ==================================================');
// HW3




console.log('HW4 ==================================================');
// HW4