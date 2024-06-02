// Array 
// declaration 

const myArr = [1,2,3,4,5]; // typw can be different
// console.log(myArr);
// console.log(myArr[0]);

const myArr_2 = new Array(1,2,3,4)

// methods 

// myArr.push(6);
// console.log(myArr);
// myArr.pop();
// console.log(myArr);
// myArr.unshift(5)
// console.log(myArr)
// myArr.shift();
// console.log(myArr)
// console.log(myArr.includes(8)); // Is this present or not?
console.log(myArr.indexOf(5)); // find the index 

const NewArr = myArr.join() // convert into string 
// console.log(myArr);
// console.log(typeof NewArr); // string 

// slice , splice 
// console.log("A", myArr);


const myn1 = myArr.slice(1,3) // this doesn't include 3 original array remains same 

console.log(myn1); 
// console.log("B",myArr); // [1,2 ,3,4 ,5]

const myn2 = myArr.splice(1,3); // this will include (1,3) 3 also and take out from the array , original array changed 
// console.log(myn2); //    [ 2,3,4]
// console.log("C", myArr); // [1,5]





