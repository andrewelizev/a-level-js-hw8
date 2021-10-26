// GitHub https://github.com/andrewelizev/a-level-js-hw8

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

let queryData = function(url) {
    fetch(url)
    .then(response => response.json())
    .then(data => jsonToTable(dom, data))
    .catch(err => console.log(err));
};

queryData(url);

function createButton(url) {
    let btn = document.createElement('button');
    btn.setAttribute('value', url);

    // Код ниже добавляет имена кнопкам соответсвенно url, но значительно снижает скорость
    // fetch(url).then(response => response.json())
    // .then(data => btn.innerText = (data.name) ? data.name : data.title);

    btn.innerText = url.slice(22, -1);
    btn.addEventListener('click', () => queryData(url));
    return btn;
}

function linkToButton(str, cell) {
    if (typeof str === 'string' && str.includes('https://swapi.dev/api/')) {
        let btn = createButton(str);
        cell.append(btn);
        return cell;
    } else {
        cell.innerText = str;
        return cell;
    }
}

function createCell(cellData) {
    let cell = document.createElement('td');

    if (Array.isArray(cellData)) {
        for (let elem of cellData) {
            linkToButton(elem, cell);
        }
        return cell;
    } else {
        linkToButton(cellData, cell);
        return cell;
    }
}

function createRow(...cells) {
    let row = document.createElement('tr');
    row.append(...cells);
    return row;
}

function jsonToTable(dom, data) {

    let row, cellTitle, cellData, table;
    let tableBody = document.createElement('table');
    tableBody.setAttribute('id', 'tableBody');

    for (let key in data) {
        cellTitle = createCell(key);
        cellData = createCell(data[key]);
        row = createRow(cellTitle, cellData);
        tableBody.append(row);
    }

    table = document.getElementById('tableBody');

    if (!table) {
        dom.append(tableBody);
    } else {
        table.replaceWith(tableBody);
    }
}



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
// myfetch
// Используя XMLHTTPRequest, напишите промисифицированную функцию myfetch, т. е. функцию, которая возвращает промис,
// и работает схоже с fetch, только в один этап:
// myfetch('https://swapi.dev/api/people/1/')
//   .then(luke => console.log(luke))
// Функция myfetch ожидает что ответ будет в формате JSON (используйте JSON.parse(response.text))
// В случае ошибок (request.onerror или request.status не 200) не забудьте вызывать reject
// function myfetch(url){
//     return new Promise(function (resolve, reject){
//         const xhr = new XMLHTTPRequest()
//         ///...
//     })
// }

function myFetch(url) {
    return new Promise(function (resolve){
        let request = new XMLHttpRequest();

        request.open('GET', url);
        request.responseType = 'json';
        request.send();

        request.onload = function() {
            if (request.status !== 200) {
                return console.log(`${request.status}: ${request.statusText}`);
            } else {
                return resolve(request.response);
            }
        };
    });
}

// myFetch('https://swapi.dev/api/people/1/')
//   .then(luke => console.log(luke));



console.log('HW4 ==================================================');
// HW4
// race
// Используя Promise.race запустите запрос на API (myfetch) параллельно с delay. По результату определите,
// что было быстрее, запрос по сети, или определенный интервал времени. Подберите параметр delay так,
// что бы результат был неизвестен изначально, и при многократных запусках быстрее был то delay, то myfetch.
const myDelay = new Promise((resolve, reject) => setTimeout(() => resolve(console.log('myDelay')), 75));

const racePromis = Promise.race([
    myFetch('https://swapi.dev/api/people/1/').then(luke => console.log('myFetch ', luke)),
    myDelay
]);