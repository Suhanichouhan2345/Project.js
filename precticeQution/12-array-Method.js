// array
const myArray = [1,2,90,40,5,6,78,9,0];
//console.log(myArray);
//console.log(myArray[-1]); // undefined
//console.log(index[0]);//error


const varibleAraay = ["XYZ" , "palak" , "sawani" , "shareeya" ];
//console.log(varibleAraay);

const myArray2 = new Array(1,2,3,4,"suhani");
//console.log(myArray2 );


const array = [0,1,2,6];
//console.log(array)
//Array Method
//array.push(3);
//console.log(array);
//console.log(array.length);
//array.pop(3);// index 3 remove karkega
//array.pop();// abh last main jo bhi value h vo remove karega
//console.log(array); //[ 0, 1 ]
//console.log(array.length);

//array.push("suhnai");
//array.push(0)
//console.log(array)


/********************************************************
 
push method => last main value add krta h
 pop method => last ke value remove karega index bhi de sakte h but defautl last index value

 unshift method => first index main value add krta h
 shift method =>  fiest index se value remove krta h


slice method => myArr.slice(1, 3) ye index ke value dega
myArr.splice(1, 3) =>  myArr.slice(1, 3) ye index ko hata ke valu degi iskee agee or piche ke {sirf yahi value print karke }

In JavaScript, slice() and splice() are distinct array methods with different purposes: slice() creates a new array by extracting a portion of the original without modifying it, while splice() modifies the original array by adding, removing, or replacing elements. 

The slice() method takes a start index and an optional end index (exclusive) to return a shallow copy of the selected elements.  It does not change the original array, making it ideal for creating copies or sub-arrays.  For example, arr.slice(1, 4) returns elements from index 1 up to (but not including) index 4. 

The splice() method takes a start index, a delete count, and optional new items to insert.  It mutates the original array and returns an array containing the deleted elements.  For instance, arr.splice(2, 1, 'new') removes one element at index 2 and inserts 'new' at that position, directly altering the array's contents.
*/
//*******************[unshit method]********* */
const fruits = ["apple", "banana"];
const newLength = fruits.unshift("mango", "grape");
//console.log(fruits); // ["mango", "grape", "apple", "banana"]
//console.log(newLength); // 4   

//Prepending another array: Use the spread operator to avoid nesting the array as a single element:
const target = [4, 5, 6];
const source = [1, 2, 3];
target.unshift(...source); // [1, 2, 3, 4, 5, 6]


//console.log(array);
//array.unshift(9)
//console.log(array);
//array.unshift(8)
//console.log(array);

/*
outpute :=
[ 0, 1, 2, 6 ]
[ 9, 0, 1, 2, 6 ]
[ 8, 9, 0, 1, 2, 6 ]
*/



/*******************************[shift method]*********************** */

//The method takes no parameters:

//array.shift();

//Example:

const myFish = ["angel", "clown", "mandarin", "surgeon"];
const removed = myFish.shift();

//console.log(myFish); // ["clown", "mandarin", "surgeon"]
//console.log(removed); // "angel"

//console.log(array)
//array.shift(); // agee ke value remove krta h
//console.log(array);
//array.shift();
//console.log(array);


//console.log(array)
 //console.log(array.includes(9));false
 //console.log(array.indexOf(3)); // -1 because ye h hi nhi vale


 const newArray = array.join();
 //console.log(newArray); //0,1,2,6

 
 //const newArray = array.join(4);
 //console.log(newArray); //0414246
 //console.log(array)
 //console.log(typeof newArray); //string


 //const newArray = array.join(myFish );//0clown,mandarin,surgeon1clown,mandarin,surgeon2clown,mandarin,surgeon6
  //console.log(newArray); 


  //********************************************************************** */

  // slice, splice

  
const myArr = [0, 1, 2, 3, 4, 5]

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);
console.log(myn2);

/* outpute :-

A  [ 0, 1, 2, 3, 4, 5 ]
[ 1, 2 ]
B  [ 0, 1, 2, 3, 4, 5 ]
C  [ 0, 4, 5 ]
[ 1, 2, 3 ]

*/