const collage = {
  name : 'Sistec-Gn',
  "My name" : "Suhani chouhan",
  age : 19,
  arry : ['one' , 'two']

}
//console.log(collage);

/*
{
  name: 'Sistec-Gn',
  'My name': 'Suhani chouhan',
  age: 19,
  arry: [ 'one', 'two' ]
}

*/
//const suhani = Symbol("uma");

//const value = {
  //[suhani] : "suhanichouhan"
//}
//console.log(value) //{ Symbol(uma): 'suhanichouhan' }

/*
const suhani = Symbol("uma");

const value = {
  suhani : "suhanichouhan"
}
console.log(value) //{ suhani: 'suhanichouhan' }
*/

const mySym = Symbol("key1")

const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

//console.log(JsUser.full name"]); error

//console.log(JsUser["full name"]);
//console.log(JsUser[" full name"]); // undefined resion space 

//JsUser.email = "hitesh@chatgpt.com"
 //Object.freeze(JsUser)
JsUser.email = "hitesh@microsoft.com"
 Object.freeze(JsUser)
 console.log(JsUser);


/*
console.table(JsUser);

┌───────────────┬──────────┬────────────┬─────────────────────┐
│ (index)       │ 0        │ 1          │ Values              │
├───────────────┼──────────┼────────────┼─────────────────────┤
│ name          │          │            │ 'Hitesh'            │
│ full name     │          │            │ 'Hitesh Choudhary'  │
│ age           │          │            │ 18                  │
│ location      │          │            │ 'Jaipur'            │
│ email         │          │            │ 'hitesh@google.com' │
│ isLoggedIn    │          │            │ false               │
│ lastLoginDays │ 'Monday' │ 'Saturday' │                     │
└───────────────┴──────────┴────────────┴─────────────────────┘
*/