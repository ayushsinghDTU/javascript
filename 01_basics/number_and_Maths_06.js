const score = 400
// console.log(score)
const balance = new Number(100.101)
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(2));

const hundreds = 1000000
// console.log(hundreds.toLocaleString()); // ('en-In') -> convert it into indian standard 
// o/p -> 10,00,000 by default-> US o/p -> 1,000,000


// **************Maths ****************

// console.log(Math);// go to web console to see features 
// console.log(Math.abs(-4));
// console.log(Math.round(5.65)); // round off 
// console.log(Math.ceil(4.1));// take upper value 
// console.log(Math.floor(4.9)); // take lowest value 
// console.log(Math.min(2,4,3,4));

// console.log(Math.random()); // value btw 0 - 1 (random value)
// console.log(Math.random()*10 + 1 );
// console.log(Math.floor(Math.random()*10 + 1))

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * max - min + 1) + min)
