
let score = "XYZ";

//console.log(score);
//console.log(typeof(score)); //string

/* use to conver the type of string into number */
let numberValue = Number(score);
//console.log(numberValue); //NaN
//console.log( typeof (numberValue)); // number 

let age = "33";
//console.log(age); //33
//console.log(typeof (age)); // string

let storeage = Number(age);
//console.log(storeage ); //33
//console.log(typeof(storeage )); // number

// "33" => 33
// "33abc" => NaN
//  true => 1; false => 0


/* use to conver the type of number into String */
let otherNumber = 33;

console.log(typeof (otherNumber)); //number

let stringNumber = String(otherNumber);
console.log(stringNumber);
console.log(typeof (stringNumber)); //string

// *********************** Operations ***********************

let value = 3
let negValue = -value
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = "hello"
let str2 = " hitesh"

let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");

// console.log( (3 + 4) * 5 % 3);

// console.log(+true);
// console.log(+"");

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
++gameCounter;
console.log(gameCounter);

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion