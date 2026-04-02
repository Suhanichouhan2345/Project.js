"use strict"; // treat all JS code as newer version

/*
alert(4+7);  // we are using nodejs, not browser

let value = alert(4+7);
console.log(value);
console.log(alert(4+3));
*/

let name = "Suhani chouhan";
let age = 18;
let isLoggedIn = false;
let state;

// number => 2 to power 53
// bigint
// string => ""
// boolean => true/false
// null => standalone value
// undefined => 
// symbol => unique

console.log(typeof[name,age,isLoggedIn,state]);//object
console.table([name,age,isLoggedIn,state]);
console.table( typeof[name,age,isLoggedIn,state]); //object

console.log(typeof age); //number
console.log(typeof (age)); //number

console.log(typeof (undefined)); //undefined
console.log(typeof (null)); //object