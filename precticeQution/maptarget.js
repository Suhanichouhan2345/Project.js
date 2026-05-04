let users = [
  { id: 1, name: "A" },
  { id: 2, name: "B" },
  { id: 3, name: "c" }
];

let result = users.reduce((x, y) => {
  x[y.id] = y.name;
  return x;
}, {});

//console.log(result);

const arr = [[1,2], [3,4], [5,6]];
let res = arr.reduce((x,y) =>{
//return x.concat(y);
return [...x, ...y];
},[])

console.log(res);