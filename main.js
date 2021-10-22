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

function createCell(cellData) {
    let cell = document.createElement('td');

    if (typeof cellData === 'string' && cellData.includes('https://swapi.dev/api/')) {
            let btn = createButton(cellData);
            cell.append(btn);
            return cell;
        } else if (Array.isArray(cellData)) {

            for (let elem of cellData) {
                if (typeof elem === 'string' && elem.includes('https://swapi.dev/api/')) {
                    let btn = createButton(elem);
                    cell.append(btn);
                }
            }
            return cell;
        } else {
            cell.innerText = cellData;
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




console.log('HW4 ==================================================');
// HW4