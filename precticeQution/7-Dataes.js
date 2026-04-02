let DateMy = new Date();
//console.log(DateMy); //2026-03-29T13:59:05.754Z
//console.log(DateMy.toString()); //Sun Mar 29 2026 19:29:56 GMT+0530 (India Standard Time)
//console.log(DateMy.toDateString()); //Sun Mar 29 2026
//console.log(DateMy.toLocaleDateString()); //29/3/2026
//console.log(DateMy.toLocaleTimeString()); //7:46:10 pm
//console.log(DateMy.toLocaleString());//29/3/2026, 7:47:17 pm

//console.log(typeof DateMy);//object
//console.log(typeof DateMy.toLocaleString());//string
//console.log(typeof DateMy.toLocaleDateString());//string

//let myCreatedDate = new Date(29,3,26);
console.log(myCreatedDate.toLocaleString());//26/4/1929, 12:00:00 am

//let myCreatedDate = new Date(29-3-26);
//console.log(myCreatedDate.toLocaleString());//1/1/1970, 5:30:00 am

 // let myCreatedDate = new Date(2023, 0, 23)
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// let myCreatedDate = new Date("2023-01-14")
let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",
    
})