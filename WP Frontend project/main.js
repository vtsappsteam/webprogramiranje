// //Deklaracija promenljivih
// let a = 10;
// let b = a + 7;
// let c = "Zdravo! " + b; 

// console.log(c);

// let niz = [];
// niz.push(5);
// niz.push(7);
// niz.push(9);
// niz.push(10);
// niz.push(11);

// console.log(niz);
// console.log(niz.length);

// niz.push("Cao!");
// console.log(niz);

// // for(let i = 0; i < niz.length; i+=2)
// //     console.log(niz[i]);

// niz.forEach((element, i) => {
//     console.log(element + " " + i);
// });


import {silos} from "./silos.js";
import {fabrika} from "./fabrika.js";

// let silos1 = new silos("silos 1", 1000);
// silos1.trenutno = 1100;
// silos1.crtajSilos(document.body);

let fabrika1 = new fabrika("Zitopek");

fabrika1.dodajSilos(new silos("Silos 1", 2000));
fabrika1.dodajSilos(new silos("Silos 2", 2000));
fabrika1.dodajSilos(new silos("Silos 3", 2000));

fabrika1.crtajFabriku(document.body);