// Сериализация и Парсинг JSON
/*const obj = {
    firstName: "Bob",
    secondName: "Thomas",
    speciality: "SWD",
    birthday: {
        day: 1,
        month: 1,
        year: 2000
    },
    currentLocation: 'Moscow',
    course: 1,
    items: ['math', 'JS', 'english']
};

let jsonObj = JSON.stringify(obj, (key, val) => {
    if(key == 'course' && val < 2 || key == 'items')
        return undefined;
    return val;
}, 4);

// JSON.stringify(obj, null, 2); // Если нужны переносы с пробелами, но не нужна обработка пар

console.log(jsonObj);

const arr = [100, 200, 'Hello world!', undefined, true, 700, false];

let jsonArr = JSON.stringify(arr);

console.log(jsonArr);

console.log(JSON.parse(jsonObj));
console.log(JSON.parse(jsonArr));*/

// Считывание JSON из файла
/*import otherJSON from '../JSONs/data.json' assert {type: 'json'};

console.log(otherJSON);*/

import CSSVariables from '../JSONs/CSSVariables.json' assert {type: 'json'};
console.log(CSSVariables);

const root = document.querySelector(':root');
const switchTheme = document.querySelector('#btn-switch-theme');
const themeStatus = document.querySelector('#theme-status')
var currentTheme = 'light';


switchTheme.addEventListener('click', () => {
    if(currentTheme == 'light') {
        currentTheme = 'dark';
        themeStatus.innerHTML = 'Тема: тёмная';
    }
    else {
        currentTheme = 'light';
        themeStatus.innerHTML = 'Тема: светлая';
    }
    setVariables(root, CSSVariables);
    localStorage.setItem('theme, currentTheme');
});


document.body.onload = () => {
    const storageTheme = localStorage.getItem('theme');
    if (localStorage.getItem('theme')) {
        currentTheme = storageTheme;
    }
    setVariables(root, CSSVariables)
};


function setVariables(HTMLElement, variables) {
    for (let variable of variables) {
        HTMLElement.style.setProperty(
            variable.name,
            variable[currentTheme]
        );
    }
}