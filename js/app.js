'use strict';

 let hours=['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '1pm']

let seattle= {
    name:'seattle',
    max:65,
    min:23,
    avg:6.3,
    totalCookies:[],
    total:0,
   // hours:['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '1pm']
}
//console.log(seattle);
// console.log('max: ', seattle.max);
// console.log('min: ', seattle.min);
// console.log('avg: ', seattle["avg"]);


// console.log(document);
// document.write('<h1>'+'Cookie Stand'+'</h1>')

let parent=document.getElementById('parent');

let articleElement=document.createElement('article');
parent.appendChild(articleElement);

let h1Element=document.createElement('h1');
articleElement.appendChild(h1Element);
h1Element.textContent='Pat\'s Salmon cookies : sales data' ;

let h2Element=document.createElement('h2');
articleElement.appendChild(h2Element);
h2Element.textContent=seattle.name;

let ulElement=document.createElement('ul');
articleElement.appendChild(ulElement);


for(let i=0; i<hours.length; i++){
    //console.log(seattle.hours[i]);  
    seattle.totalCookies[i]=randomNumber(seattle.min,seattle.max,seattle.avg);
    seattle.total+=seattle.totalCookies[i];
    let liElement=document.createElement('li');
    ulElement.appendChild(liElement);
    liElement.textContent=`${hours[i]}: ${seattle.totalCookies[i]} cookies `;
}
//console.log(parent);
//console.log(total);
let liElement=document.createElement('li');
ulElement.appendChild(liElement);
liElement.textContent=`Total ${seattle.total} cookies`;


function randomNumber(min, max, avg ) {
    return Math.floor(((Math.random() * (max - min)) + min)*avg);
}
//console.log(randomNumber(seattle.min,seattle.max));



let tokyo= {
    name:'Tokyo',
    max:24,
    min:3,
    avg:1.2,
    totalCookies:[],
    total:0,
}


 let articleElement1=document.createElement('article');
 parent.appendChild(articleElement1);

let h2Element1=document.createElement('h2');
articleElement1.appendChild(h2Element1);
h2Element1.textContent=tokyo.name;

let ulElement1=document.createElement('ul');
articleElement1.appendChild(ulElement1);


for(let i=0; i<hours.length; i++){
    tokyo.totalCookies[i]=randomNumber(tokyo.min,tokyo.max,tokyo.avg);
    tokyo.total+=tokyo.totalCookies[i];
    let liElement1=document.createElement('li');
    ulElement1.appendChild(liElement1);
    liElement1.textContent=`${hours[i]}: ${tokyo.totalCookies[i]} cookies `;
}

let liElement1=document.createElement('li');
ulElement1.appendChild(liElement1);
liElement1.textContent=`Total ${tokyo.total} cookies`;
console.log(tokyo.total);




let dubai= {
    name:'Dubai',
    max:38,
    min:11,
    avg:3.7,
    totalCookies:[],
    total:0,
}


 let articleElement2=document.createElement('article');
 parent.appendChild(articleElement2);

let h2Element2=document.createElement('h2');
articleElement2.appendChild(h2Element2);
h2Element2.textContent=dubai.name;

let ulElement2=document.createElement('ul');
articleElement2.appendChild(ulElement2);


for(let i=0; i<hours.length; i++){
    dubai.totalCookies[i]=randomNumber(dubai.min,dubai.max,dubai.avg);
    dubai.total+=dubai.totalCookies[i];
    let liElement2=document.createElement('li');
    ulElement2.appendChild(liElement2);
    liElement2.textContent=`${hours[i]}: ${dubai.totalCookies[i]} cookies `;
}

let liElement2=document.createElement('li');
ulElement2.appendChild(liElement2);
liElement2.textContent=`Total ${dubai.total} cookies`;
console.log(dubai.total);


let paris= {
    name:'Paris',
    max:24,
    min:3,
    avg:1.2,
    totalCookies:[],
    total:0,
}


 let articleElement3=document.createElement('article');
 parent.appendChild(articleElement3);

let h2Element3=document.createElement('h2');
articleElement3.appendChild(h2Element3);
h2Element3.textContent=paris.name;

let ulElement3=document.createElement('ul');
articleElement3.appendChild(ulElement3);


for(let i=0; i<hours.length; i++){
    paris.totalCookies[i]=randomNumber(paris.min,paris.max,paris.avg);
    paris.total+=paris.totalCookies[i];
    let liElement3=document.createElement('li');
    ulElement3.appendChild(liElement3);
    liElement3.textContent=`${hours[i]}: ${paris.totalCookies[i]} cookies `;
}

let liElement3=document.createElement('li');
ulElement3.appendChild(liElement3);
liElement3.textContent=`Total ${paris.total} cookies`;
console.log(paris.total);



let lima= {
    name:'Lima',
    max:16,
    min:2,
    avg:4.6,
    totalCookies:[],
    total:0,
}


 let articleElement4=document.createElement('article');
 parent.appendChild(articleElement4);

let h2Element4=document.createElement('h2');
articleElement4.appendChild(h2Element4);
h2Element4.textContent=lima.name;

let ulElement4=document.createElement('ul');
articleElement4.appendChild(ulElement4);


for(let i=0; i<hours.length; i++){
    lima.totalCookies[i]=randomNumber(lima.min,lima.max,lima.avg);
    lima.total+=lima.totalCookies[i];
    let liElement4=document.createElement('li');
    ulElement4.appendChild(liElement4);
    liElement4.textContent=`${hours[i]}: ${lima.totalCookies[i]} cookies `;
}

let liElement4=document.createElement('li');
ulElement4.appendChild(liElement4);
liElement4.textContent=`Total ${lima.total} cookies`;
console.log(lima.total);