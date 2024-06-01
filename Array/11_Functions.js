// console.log("H");
// console.log("I");
// console.log("E");
// console.log("T");

// function sumofTwo  (number1,number2) {    //inside  () we called parameter 
//     console.log(number1 + number2);
    
// }
// sumofTwo(2,4);
sumofTwo(2,"8")  // it take as string and merge  ,, // we call here () argument 
sumofTwo(2,"a") // same here , so we need to check datatype  or __ by using if else condition

function sumofTwo  (number1,number2) {   
        let result = number1 + number2
        return result        
}
const result = sumofTwo(3,4)
// console.log("Result", result );

function loginuserMessage (username = "sam"){ 
    if(username === undefined ){ 
        console.log("Please enter a username");
        return 
    }
    return `${username} just logged in`
}
// console.log(loginuserMessage("Ayush"));
 // console.log(loginuserMessage())

 // related to shoping cart 
 function calculateCartPrice(val1 , val2 ,...num1) {
    return num1
 }

//console.log(calculateCartPrice(200,300));  // here problem is we don't kown how many prices will come ,so we want some auto.. loop type 
// solution rest operator (... )  same as spread operator but here we call it rest 
//console.log(calculateCartPrice(200,300,400,500));

const user ={
    username : "Ayush",
    price : 199
}
// how to pass object in function

function handleObject(anyobject) {
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}

handleObject(user);

const myNewArray = [ 200,400,500]
function returnsecondvalue(getarray) {
    return getarray[1]
    
}
  
console.log(returnsecondvalue(myNewArray));

