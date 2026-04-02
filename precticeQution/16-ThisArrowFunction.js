const user = {
    username : "suhani chouhan",
    pricse : 999,

      welcomeMassage  : function(){
        console.log(`${this.username}, welcome to website`);
       // console.log(this); // welcomeMassage: [Function: welcomeMassage]
      } 
}

//console.log(user);
//user.welcomeMassage();
//user.username ="uma chouhan";
//user.welcomeMassage();


//console.log(this.user); //undefined

//console.log(this); // {}

 function save(){
    let username = 'suhani';
    //console.log(this.username); // undefined
}
//save();


//const save = function(){
  //  let username = "suhani"
   // console.log(this.username); // undefined
//}
//save();

const chai =  () => {
    let username = "hitesh"
    console.log(this);
}


// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2 
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 ) // ye breackets uases krne pr return type nhi likhte.

const addTwo = (num1, num2) => ({username: "hitesh"})


console.log(addTwo(3, 4))


//const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()