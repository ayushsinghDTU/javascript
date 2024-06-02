
const user = {
    username : " Ayush",
    price : 100,

    welcomeMessage : function(){
        console.log( `Hello , ${this.username} welcome to website`)  // use 'this' to access
        console.log(this);
    }
}
// user.welcomeMessage()
// user.username = "singh"  // context changed 
// user.welcomeMessage()
// console.log(this);  // here we get empty bracket , but in web console we get window becz mostly the globel obect is windows 

// function chai() {
//     username : "Ayush"
//     console.log(this); 
// }
// function chai2() {
//     username : "Ayush"
//     console.log(this.username);   // we get undefined value , becz "This" will run in object .
// }
// chai2()  // so we have so much in output , something lie on this  let check 


const chai =() => {    // arrow function 
  let username ="Ayush"
  //console.log(this);
}
chai();

// arrow function 

// const addtwo = (num1,num2) => {   // basic function 
//     return num1 + num2
// }
// const addtwo = (num1,num2) => num1 + num2  // implicit  function
// or 
//const addtwo = (num1,num2) => (num1 + num2) // if curly bracket will use then "return"  should used 
const addtwo = (num1,num2) => ({username : "Ayush"})  // to return in object ( ) should be used 
console.log(addtwo(3,4)); 

