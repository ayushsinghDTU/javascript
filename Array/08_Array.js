
const myCreatedArr = ["ayush", "jarvis","nobody"]
const score        = ["100","122","124"]

// myCreatedArr.push(Ironman);
// console.log(myCreatedArr);

//first method to merge 

// myCreatedArr.push(score) // we can push array aslso 
// console.log(myCreatedArr[3][0]); //  3rd ele is  another array so another [] to find ele in that array 

// 2nd methods  by using concat function
const Allresult = myCreatedArr.concat(score);
// console.log(Allresult[4]);

// another using spread operator  [ ... 1st, ...2nd]
const all_new_result = [...myCreatedArr, ...score];
// console.log(all_new_result);

const  array_new = [1,2,3,[4,5],[6,7,[8,9]]];
// console.log(array_new);
const real_array_new = array_new.flat(Infinity); // instrad of infinity we can provide depth of flating ,by using flat -> result is all in one bracket 
//  console.log(real_array_new);

// asking for array or not && converting into array 

// console.log(Array.isArray("Ayush")); // asking 
// console.log(Array.from("Ayush"));// converting 

// console.log(Array.from({name : "Ayush"}));  //we need to specify key based 

let score1 =100
let score2 =200
let score3 = 300

// console.log(Array.of(score1,score2,score3));
































 
















