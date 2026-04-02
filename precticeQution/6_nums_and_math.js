const score = 550;

const balance = new Number(100);
//console.log(balance); //[Number: 100]

//console.log(balance.toString().length); //3
//console.log(balance.toFixed(6)); //100.000000 // number le baad 6 zero aa gayange
//console.log(balance);  //[Number: 100]

const otherNumber = 123.966;
console.log(otherNumber.toPrecision(3)); //124


//const otherNumber = 123.966;
//console.log(otherNumber.toPrecision(4)); //123.0

//const otherNumber = 123.966;
//console.log(otherNumber.toPrecision(1)); 1e+2

const hundreds = 100000000000000000000;
 //console.log(hundreds.toLocaleString('en-IN')); //10,00,00,00,00,00,00,00,00,000 // en-IN matalab indian value.


 // +++++++++++++ Maths +++++++++++++++++++++++++++++

console.log(Math);  //Object [Math] {}
 console.log(Math.abs(-4)); //4
 console.log(Math.round(4.6)); //5
console.log(Math.ceil(4.2));  //5
 console.log(Math.floor(4.9)); //4
console.log(Math.min(4, 3, 6, 8)); //3
console.log(Math.max(4, 3, 6, 8)); //8

console.log(Math.random()); //0.28541289182743035
console.log((Math.random()*10) + 1); //1.2186374533150492
console.log(Math.floor(Math.random()*10) + 1); 

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)