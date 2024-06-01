// global scope 
// {
   // inside this  block_scope 
//}
let a = 300;
if(true){
  let a =30
//   console.log("INNER", a);   // block scope 
}
// console.log(a); // global scope
// global scope is diffent in web console and in environment like here and vs studio

console.log(addone(4))   // it will run 
function addone(num) {
return num+1;
}

addtwo(4)                         // it dosen't run 
const addtwo = function (numbber) {
    return numbber+ 2
}

