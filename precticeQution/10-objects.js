const add  = {
    name : "suhani",
}

 add.age = 18;
 console.log(add);
 Object.freeze(add.age = 23);
 console.log(add);

// Deleting Properties
//The delete keyword deletes a property from an object:
/*
//Examples
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
};
*/
delete person.age;
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
};

delete person["age"];


/*
The delete keyword deletes both the value and the property.

After deleting, the property is removed. Accessing it will return undefined.
*/


/*
const person = {
  firstName: "John",
  lastName: "Doe"
};

//console.log("firstName" in person);//true
//console.log("John" in person);//false


myObj = {
  name:"John",
  age:30,
  myCars: {
    car1:"Ford",
    car2:"BMW",
    car3:"Fiat"
  }
}
//console.log(myObj.myCars.car2);
//delete myObj.myCars.car2;
//console.log(myObj)


/*
You can access nested objects using the dot notation or the bracket notation:

Examples
myObj.myCars.car2;
myObj.myCars["car2"];
myObj["myCars"]["car2"];
let p1 = "myCars";
let p2 = "car2";
myObj[p1][p2];
Summary
Object properties are key:value pairs
Access properties with dot notation or bracket notation
Add, change, and delete properties using assignment and delete
Use the in operator to check if a property exists
*/