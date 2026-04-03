// for of

//["","",""]
//[{},{},{}]

const arr = [1,2,3,4,5,6,7];
//console.log(arr);

/*
for(const num of arr){
    console.log(num)
}
outpute : 
1
2
3
4
5
6
7
*/

const greatings = " hellow world";
for(const greet of greatings){
 //console.log(greatings); // outpute main greatings dala toh jitne words honge outne bar greating chalega
}



/*
const greetings = "Hello world!"
for (const greet of greetings) {
  if(greet == " "){ 
        continue;

    }
        console.log(`Each char is ${greet}`)
    
}
    
 outpute :
Each char is H
Each char is e
Each char is l
Each char is l
Each char is o
Each char is w
Each char is o
Each char is r
Each char is l
Each char is d
Each char is ! // without space print hua h
*/

const greetings = "Hello world!"
for (const greet of greetings) {
    if(greet == " "){ 
        break;

    }
        console.log(`Each char is ${greet}`)
    
}

/*
Each char is H
Each char is e
Each char is l
Each char is l
Each char is o
*/