//Memory are two type Stack (primmitve)and Heap Memory(Non-primmitve)

//Stack => primitve data Types => humko memory ke "Copy milti h"

//Heap => Non-primitve data Types => humko memory ke "Refrance milta h orignal value ka"

// primitve value : ye copy pass karne stack ain isliye value first same milage second value copy hoti h jo change ho sakte h.
let name = "suhani";
let anaotherNAme = name;

//anaotherNAme = ""
anaotherNAme = "uma chouhan";
console.log(name);
console.log(anaotherNAme);

// Non -primitive data type ye dono wk hi agala point karnage or oringinal value hi return hogi 
let user =  {
    userEmail : "Suhaani123@gmail.com"
}

let userTwo = user;

console.log(user);
console.log(userTwo);