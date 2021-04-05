'use strict';

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm']
let shopArr = [];
function Shop(name, max, min, avg) {
    this.shopsName = name;
    this.maxCust = max;
    this.mincust = min;
    this.avgcookie = avg;
    this.custEachHour = [];
    this.cookieEachHour = [];
    this.dailyLocationTotal = 0;
    shopArr.push(this);

}
Shop.prototype.calcCustEachHour = function () {
    for (let i = 0; i < hours.length; i++) {
        this.custEachHour.push(randomNumber(this.mincust, this.maxCust));

    }
}
Shop.prototype.calcCookieEachHour = function () {
    for (let i = 0; i < hours.length; i++) {
        this.cookieEachHour.push(Math.round(this.custEachHour[i] * this.avgcookie));
        this.dailyLocationTotal += this.cookieEachHour[i];
    }

}

let seattle = new Shop('seattle', 65, 23, 6.3);
seattle.calcCustEachHour();
seattle.calcCookieEachHour();
let tokyo = new Shop('Tokyo', 24, 3, 1.2);
tokyo.calcCustEachHour();
tokyo.calcCookieEachHour();
let dubai = new Shop('Dubai', 38, 11, 3.7);
dubai.calcCustEachHour();
dubai.calcCookieEachHour();
let paris = new Shop('Paris', 38, 20, 2.3);
paris.calcCustEachHour();
paris.calcCookieEachHour();
let lima = new Shop('Lima', 16, 2, 4.6);
lima.calcCustEachHour();
lima.calcCookieEachHour();
console.log(shopArr);

let parent = document.getElementById('parent');
console.log(parent);

let articleElement=document.createElement('article');
parent.appendChild(articleElement);

let h1Element=document.createElement('h1');
articleElement.appendChild(h1Element);
h1Element.textContent='Pat\'s Salmon cookies : sales data' ;

let image = document.createElement('img');
    articleElement.appendChild(image);

    image.setAttribute('src', 'img/salmon.PNG',  this);


let tableElement = document.createElement('table');
parent.appendChild(tableElement);

let theadElement = document.createElement('thead');
tableElement.appendChild(theadElement)

let headingRow = document.createElement('tr');
theadElement.appendChild(headingRow);

let thElement1 = document.createElement('th');
headingRow.appendChild(thElement1);

for (let i = 0; i < hours.length; i++) {
    let thElement = document.createElement('th');
    headingRow.appendChild(thElement);
    thElement.textContent = hours[i];
}

let thElement4=document.createElement('th');
headingRow.appendChild(thElement4);
thElement4.textContent='Daily location total';

let tbodyElement = document.createElement('tbody');
tableElement.appendChild(tbodyElement);

// let bodyRow=document.createElement('tr');
// tbodyElement.appendChild(bodyRow);
for (let i = 0; i < shopArr.length; i++) {
    let bodyRow = document.createElement('tr');
    tbodyElement.appendChild(bodyRow);
    let thElement2 = document.createElement('th');
    bodyRow.appendChild(thElement2);
    thElement2.textContent = shopArr[i].shopsName;
    for (let j = 0; j < hours.length; j++) {
        let tdElement = document.createElement('td');
        bodyRow.appendChild(tdElement);
        tdElement.textContent = shopArr[i].cookieEachHour[j];
    }
    let tdElement1 = document.createElement('td');
    bodyRow.appendChild(tdElement1);
     tdElement1.textContent=shopArr[i].dailyLocationTotal;

}

let tfootElement=document.createElement('tfoot');
tableElement.appendChild(tfootElement);

let footRow=document.createElement('tr');
tfootElement.appendChild(footRow);

let thElement3=document.createElement('th');
footRow.appendChild(thElement3);
thElement3.textContent='Total';

for (let i=0; i<hours.length; i++){
let total=0;
let tdElement2=document.createElement('td');
footRow.appendChild(tdElement2);
for(let j=0; j<shopArr.length; j++){
   total+=shopArr[j].cookieEachHour[i]
}
 tdElement2.textContent=total;

}
let tdElement3=document.createElement('td');
footRow.appendChild(tdElement3);
let finalColomn=0;
for (let i=0; i<shopArr.length; i++){
finalColomn+=shopArr[i].dailyLocationTotal;
}
tdElement3.textContent=finalColomn;
















































//  let hours=['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '1pm']

// let seattle= {
//     name:'seattle',
//     max:65,
//     min:23,
//     avg:6.3,
//     totalCookies:[],
//     total:0,
//    // hours:['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '1pm']
// }
// //console.log(seattle);
// // console.log('max: ', seattle.max);
// // console.log('min: ', seattle.min);
// // console.log('avg: ', seattle["avg"]);


// // console.log(document);
// // document.write('<h1>'+'Cookie Stand'+'</h1>')

// let parent=document.getElementById('parent');

// let articleElement=document.createElement('article');
// parent.appendChild(articleElement);

// let h1Element=document.createElement('h1');
// articleElement.appendChild(h1Element);
// h1Element.textContent='Pat\'s Salmon cookies : sales data' ;

// let h2Element=document.createElement('h2');
// articleElement.appendChild(h2Element);
// h2Element.textContent=seattle.name;

// let ulElement=document.createElement('ul');
// articleElement.appendChild(ulElement);


// for(let i=0; i<hours.length; i++){
//     //console.log(seattle.hours[i]);  
//     seattle.totalCookies[i]=randomNumber(seattle.min,seattle.max,seattle.avg);
//     seattle.total+=seattle.totalCookies[i];
//     let liElement=document.createElement('li');
//     ulElement.appendChild(liElement);
//     liElement.textContent=`${hours[i]}: ${seattle.totalCookies[i]} cookies `;
// }
// //console.log(parent);
// //console.log(total);
// let liElement=document.createElement('li');
// ulElement.appendChild(liElement);
// liElement.textContent=`Total ${seattle.total} cookies`;


// function randomNumber(min, max, avg ) {
//     return Math.floor(((Math.random() * (max - min)) + min)*avg);
// }
// //console.log(randomNumber(seattle.min,seattle.max));



// let tokyo= {
//     name:'Tokyo',
//     max:24,
//     min:3,
//     avg:1.2,
//     totalCookies:[],
//     total:0,
// }


//  let articleElement1=document.createElement('article');
//  parent.appendChild(articleElement1);

// let h2Element1=document.createElement('h2');
// articleElement1.appendChild(h2Element1);
// h2Element1.textContent=tokyo.name;

// let ulElement1=document.createElement('ul');
// articleElement1.appendChild(ulElement1);


// for(let i=0; i<hours.length; i++){
//     tokyo.totalCookies[i]=randomNumber(tokyo.min,tokyo.max,tokyo.avg);
//     tokyo.total+=tokyo.totalCookies[i];
//     let liElement1=document.createElement('li');
//     ulElement1.appendChild(liElement1);
//     liElement1.textContent=`${hours[i]}: ${tokyo.totalCookies[i]} cookies `;
// }

// let liElement1=document.createElement('li');
// ulElement1.appendChild(liElement1);
// liElement1.textContent=`Total ${tokyo.total} cookies`;
// console.log(tokyo.total);




// let dubai= {
//     name:'Dubai',
//     max:38,
//     min:11,
//     avg:3.7,
//     totalCookies:[],
//     total:0,
// }


//  let articleElement2=document.createElement('article');
//  parent.appendChild(articleElement2);

// let h2Element2=document.createElement('h2');
// articleElement2.appendChild(h2Element2);
// h2Element2.textContent=dubai.name;

// let ulElement2=document.createElement('ul');
// articleElement2.appendChild(ulElement2);


// for(let i=0; i<hours.length; i++){
//     dubai.totalCookies[i]=randomNumber(dubai.min,dubai.max,dubai.avg);
//     dubai.total+=dubai.totalCookies[i];
//     let liElement2=document.createElement('li');
//     ulElement2.appendChild(liElement2);
//     liElement2.textContent=`${hours[i]}: ${dubai.totalCookies[i]} cookies `;
// }

// let liElement2=document.createElement('li');
// ulElement2.appendChild(liElement2);
// liElement2.textContent=`Total ${dubai.total} cookies`;
// console.log(dubai.total);


// let paris= {
//     name:'Paris',
//     max:24,
//     min:3,
//     avg:1.2,
//     totalCookies:[],
//     total:0,
// }


//  let articleElement3=document.createElement('article');
//  parent.appendChild(articleElement3);

// let h2Element3=document.createElement('h2');
// articleElement3.appendChild(h2Element3);
// h2Element3.textContent=paris.name;

// let ulElement3=document.createElement('ul');
// articleElement3.appendChild(ulElement3);


// for(let i=0; i<hours.length; i++){
//     paris.totalCookies[i]=randomNumber(paris.min,paris.max,paris.avg);
//     paris.total+=paris.totalCookies[i];
//     let liElement3=document.createElement('li');
//     ulElement3.appendChild(liElement3);
//     liElement3.textContent=`${hours[i]}: ${paris.totalCookies[i]} cookies `;
// }

// let liElement3=document.createElement('li');
// ulElement3.appendChild(liElement3);
// liElement3.textContent=`Total ${paris.total} cookies`;
// console.log(paris.total);



// let lima= {
//     name:'Lima',
//     max:16,
//     min:2,
//     avg:4.6,
//     totalCookies:[],
//     total:0,
// }


//  let articleElement4=document.createElement('article');
//  parent.appendChild(articleElement4);

// let h2Element4=document.createElement('h2');
// articleElement4.appendChild(h2Element4);
// h2Element4.textContent=lima.name;

// let ulElement4=document.createElement('ul');
// articleElement4.appendChild(ulElement4);


// for(let i=0; i<hours.length; i++){
//     lima.totalCookies[i]=randomNumber(lima.min,lima.max,lima.avg);
//     lima.total+=lima.totalCookies[i];
//     let liElement4=document.createElement('li');
//     ulElement4.appendChild(liElement4);
//     liElement4.textContent=`${hours[i]}: ${lima.totalCookies[i]} cookies `;
// }

// let liElement4=document.createElement('li');
// ulElement4.appendChild(liElement4);
// liElement4.textContent=`Total ${lima.total} cookies`;
// console.log(lima.total);