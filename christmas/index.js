/**
 * @type {{munka:string, who1:string, muszak1:string, who2?:string, muszak2?:string}}
 */
const arr = [
    {
        munka: "Logisztika",
        who1: "Kovács Máté",
        muszak1: "Délelöttös",
        who2: "Kovács József",
        muszak2: "Délutános"
    },
    {
        munka: "Könyvelés",
        who1: "Szabó Anna",
        muszak1: "Éjszakai"
    },
    {
        munka: "Játékfejlesztés",
        who1: "Varga Péter",
        muszak1: "Délutános",
        who2: "Nagy Eszter",
        muszak2: "Éjszakai"
    }
];

//table elkeszitese

const jsSection = document.createElement('div');
jsSection.id = 'jssection';
jsSection.classList.add('hide'); //alapbol el van rejtve, csak a gombra kattintva jelenik meg
document.body.appendChild(jsSection);

const table = document.createElement('table');
jsSection.appendChild(table);

const thead = document.createElement('thead');
table.appendChild(thead);

const header = document.createElement('tr');
thead.appendChild(header);

const headerList = ["Osztály", "Manó" ,"Műszak"];

for (let elem of headerList){

    const th = document.createElement('th');
    th.innerText = elem;
    header.appendChild(th);
}

const tbody = document.createElement('tbody');
table.appendChild(tbody);

renderTableBody(arr);

/**
 * 
 * @param {{munka:string, who1:string, muszak1:string, who2?:string, muszak2?:string}[]} array 
 */

function renderTableBody(array) {

    for (let elem of array) {

        const tr1 = document.createElement('tr');
        tbody.appendChild(tr1);

        const td1 = document.createElement('td');
        td1.innerText = elem.munka;
        tr1.appendChild(td1);

        const td2 = document.createElement('td');
        td2.innerText = elem.who1;
        tr1.appendChild(td2);

        const td3 = document.createElement('td');
        td3.innerText = elem.muszak1;
        tr1.appendChild(td3);

        if (elem.who2) {

            td1.rowSpan = 2;

            const tr2 = document.createElement('tr');
            tbody.appendChild(tr2);

            const td4 = document.createElement('td');
            td4.innerText = elem.who2;
            tr2.appendChild(td4);

            const td5 = document.createElement('td');
            td5.innerText = elem.muszak2;
            tr2.appendChild(td5);
            
        }
    }
}

//form elkeszitese

const form = document.createElement('form');
jsSection.appendChild(form);
form.id = 'jsform';

form.appendChild(createInput("Osztály:", "munka"));
form.appendChild(createInput("Manó 1:", "who1"));
form.appendChild(createSelect("Manó 1 műszak:", "muszak1", ["Délelőttös", "Délutános", "Éjszakai"]));

//hibas/hianyos
form.appendChild(createCheckbox("Két manót veszek fel", "addMasodikmano"));

form.appendChild(createInput("Manó 2:", "who2"));
form.appendChild(createSelect("Manó 2 műszak:", "muszak2", ["Délelőttös", "Délutános", "Éjszakai"]));

const hozzaadasGomb = document.createElement('button');//hibas/hianyos
hozzaadasGomb.type = 'submit';
hozzaadasGomb.innerText = 'Hozzaadas';
form.appendChild(hozzaadasGomb);

//segedfuggvenyek

/**
 * 
 * @param {string} labelText 
 * @param {string} Id 
 * @returns 
 */

function createInput(labelText, Id) {

    const div = document.createElement('div');

    const label = document.createElement('label');
    label.innerText = labelText;
    label.htmlFor = Id;
    div.appendChild(label);

    const input = document.createElement('input');
    input.type = 'text';
    input.id = Id;
    div.appendChild(input);

    const error = document.createElement('span');
    error.className = 'error';
    div.appendChild(error);

    return div;
}

/**
 * 
 * @param {string} labelText 
 * @param {string} Id 
 * @param {string[]} options 
 * @returns 
 */

function createSelect(labelText, Id, options) {

    const div = document.createElement('div');

    const label = document.createElement('label');
    label.innerText = labelText;
    label.htmlFor = Id;
    div.appendChild(label);

    const select = document.createElement('select');
    select.id = Id;
    div.appendChild(select);

    for (let optionText of options) {
        const option = document.createElement('option');
        option.innerText = optionText;
        option.value = optionText;
        select.appendChild(option);
    }

    const error = document.createElement('span');
    error.className = 'error';
    div.appendChild(error);

    return div;
}

/**
 * 
 * @param {string} labelText 
 * @param {string} Id 
 * @returns 
 */

function createCheckbox(labelText, Id) {

    const div = document.createElement('div');
    form.appendChild(div);

    const label = document.createElement('label');
    label.innerText = labelText;
    label.htmlFor = Id;
    div.appendChild(label);

    const input = document.createElement('input');
    input.type = 'checkbox';
    input.id = Id;
    div.appendChild(input);

    return input, div;
}

//validalas fuggvenyek

/**
 * 
 * @param {HTMLInputElement} input 
 * @returns {boolean}
 */
function validateField(input) {
    let valid = true;

    if (input.value === "") {
        const div = input.parentElement;
        const message = div.querySelector('.error');
        if (message) {
            message.innerText = "Mező kitöltése kötelező!";
        }
        valid = false;
    }

    return valid;
}

/**
 * 
 * @param {HTMLInputElement} input1
 * @param {HTMLInputElement} input2
 * @param {HTMLInputElement} input3
 */
function validateFields(input1, input2, input3) {

    let valid = true;

    if (!validateField(input1)) {
        valid = false;
    }
    if (!validateField(input2)) {
        valid = false;
    }
    if (!validateField(input3)) {
        valid = false;
    }
    return valid;
}

