const name = "Suhani";
const repocount = 50;

//console.log(name + repocount + "Value"); //Suhani50Value.

//console.log(`Hello my name is ${name} and my repo count is ${repocount}`);

const gameName = new String('suhani');

//console.log(gameName[0]); // s
//console.log(gameName.__proto__);

 //console.log(gameName.length);
 //console.log(gameName.toUpperCase()); //SUHANI

 //console.log(gameName.toUpperCase); //[Function: toUpperCase]

 //console.log(gameName.charAt(2)); //h
 //console.log(gameName.charAt()); //s
//console.log(gameName.charAt); //[Function: charAt]

//***************************index************ */

// console.log(gameName.indexOf('h')); //2
//console.log(gameName.indexOf); //[Function: indexOf]
//console.log(gameName.indexOf());//-1
//console.log(gameName.indexOf(0));//-1
//console.log(gameName.indexOf(-1));//-1


const stringNew = gameName.substring(0,4);
//console.log(stringNew); //suha

//const stringNew = gameName.substring(1,4);
//console.log(stringNew); //uha

const anotherString = gameName.slice(-8, 4)
//console.log(anotherString); //suha


const newStringOne = "   XYZ   "
console.log(newStringOne);
console.log(newStringOne.trim());

console.log(newStringOne.replace('Y', '-'));
console.log(newStringOne.split('-'));

const url = "https://hitesh.com/hitesh%20choudhary"
console.log(url); //https://hitesh.com/hitesh-choudhary
console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'));


//+++++++++++++++++++++++++++++++++++++++++SitaRam.js+++++++++++++++++++

/*
console.log('some' + 'time');
console.log('some' + ' ' + 'work'); 
console.log('hello bhai') // print with given spacses

chek type of value:=
console.log(typeof('some' + 'time')); // string
console.log(typeof('some' + 3)); // string because js convert number in string.[type coresion topic // automatioc convert]
console.log(typeof(3 +'some')); // also give a solution in string.
console.log(typeof('some' + ' ' + 'work')); // string
console.log(typeof(0.90)); // number not decimalm float
console.log(typeof(9));  // number

console.log('$' + 20.95 + 7.99); // these give in solution in string becuses type coresion
console.log('$' + (20.95 + 7.99)); // they give solution coreect but float value have some consfsion
console.log('$' + (2095 + 799) / 100); // when correct ans is this.


console.log(typeof('$' + 20.95 + 7.99)); // type give in string
console.log(typeof('$' + (20.95 + 7.99))); // also give in string
console.log(typeof('$' + (2095 + 799) / 100)); // string type.

console.log('Items (' + (1 + 1) + '): $' + (2095 + 799) / 100); //Items (2): $28.94

alert('Items (' + (1 + 1) + '): $' + (2095 + 799) / 100);
*/


//+++++++diffrance between  double and single code++++++++++

console.log('hellow'); //hellow
console.log("hellow"); //hellow
//console.log(''i' waan eat'); give error
console.log("can't eat"); //can't eat
console.log("'I' an learning things"); //'I' an learning things

//escape charecter:
console.log("I\'m an learning things"); //I'm an learning things [\' ye use kre toh double or silgnr code main priblem nhi hoge]
console.log("'\I\'m an learning things"); //'I'm an learning things
console.log('i\' waan eat'); // i' waan eat 
//console.log(''I\'m an learning things'); // use in single code they give error.



//++++++++++++++++++++++++++++++++++++++++++++++++++++
//changing a next line
console.log('some\ntext'); // outpute - some
                                        text
<script>
alert('some\ntext');

//----
templet ``
console.log(`Items (${1 + 1}): $${(2095 + 799) / 100}`); //Items (2): $28.94
console.log(`i\' waan eat`); //i' waan eat