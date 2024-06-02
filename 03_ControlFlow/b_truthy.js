
const email = "ayush@gmail.com"

if(email) {
    console.log("Got a email");
}
else {
    console.log("don't have email");
}
// false  value 
//false ,0 , -0 ,bigint 0n , "" , null , undefined , NaN  // EXECPT THIS ALL ARE TRUTHY VALUE 

// THRUTHY VALUE 
//  "0", 'false'," ", [], {}, function(){}
// nullish coalessing Operator (??) : NULL UNDEFINED 

let val1;
// val1 = 5 ?? 10   // when we call from datBASE sometime we get two values then we adjest 
// val2 = null ?? 10
val1 = undefined?? 10
console.log(val1);
// terniary operator 
// condition? true : false

const a = 100 ;
a<=50 ?  console.log("less or equal to 50"): console.log("greater or equal to 50");