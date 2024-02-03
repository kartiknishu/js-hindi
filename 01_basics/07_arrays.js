const myarray= [0,1,2,3,4,5];
// console.log(myarray);

// console.log(typeof myarray);

myarray.push(6);
myarray.push(7);

console.log(myarray);

let newarray = myarray.slice(0,2)
console.log(newarray);
console.log(myarray);

newarray= myarray.splice(0,2);
console.log(newarray);
console.log(myarray);





