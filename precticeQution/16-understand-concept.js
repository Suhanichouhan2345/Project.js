/*
const user = {
    username: "hitesh",
    greet: function() {
        const inner = function() {
            console.log(this.username);
        }
       inner();
    }
}

user.greet(); //undefined
*/


/*
const user = {
    username: "hitesh",
    greet: function() {
        console.log(this.username);
    }
}

const greetFunc = user.greet;
greetFunc(); //undefined
*/


/*
const user = {
    username: "hitesh",
    greet: () => {
        console.log(this.username);
    }
}

user.greet(); //undefined
*/

/*
const obj = {
    value: 10,
    getValue: function() {
        return () => {
            console.log(this.value);
        }
    }
}
    

obj.getValue()(); //10
*/

const func = () => { name: "hitesh" }
console.log(func()); //undefined


