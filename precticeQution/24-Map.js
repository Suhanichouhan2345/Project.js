// map
const map = new Map();
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")

//console.log(map);
/*
outpute :
Map(3) {
  'IN' => 'India',
  'USA' => 'United States of America',
  'Fr' => 'France'
}
*/

/*
const map = new Map();
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")


console.log(map);
outpute will be same :

Map(3) {
  'IN' => 'India',
  'USA' => 'United States of America',
  'Fr' => 'France'
}

*/

for(const [key] of map){
    // console.log(key );
}

/*
IN
USA
Fr
*/


for (const [key, value] of map) {
     console.log(key, ':-', value);
}

/*
IN :- India
USA :- United States of America
Fr :- France
*/

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

/*
 for (const [key, value] of myObject) { // give error
   console.log(key, ':-', value);
    
}
   */

let myMap = new Map();

myMap.set("name", "Rahul");
myMap.set("age", 20);

console.log(myMap.get("name")); // Rahul