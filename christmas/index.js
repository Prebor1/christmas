/**
 * @type {{what:string, who1:string, muszak1:string, who2?:string, muszak2?:string}}
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

