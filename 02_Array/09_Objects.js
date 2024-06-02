// two method to create object ->> constructor , ->> literal 
//Singleton 
// if we make  like  literal then it's not like singleton 
// if we make  like constractor then it will be singleton

///********* */ object literals

// see how to use symbol in object key
const mysym = Symbol("key1") 


const Jsuser = {
    name : "Ayush",   // name // key : "Ayush" // value
    "Full name ": "Ayush singh ",
    [mysym] : "key1",
    age : 19,
    emali_Id :  "ayush@google.com  "   ,
    isLoggedIn : false  
} 
// how to access  ?

// console.log(Jsuser.emali_Id);  // in  normal way  by using this automa.. it take key as string 
// console.log(Jsuser["emali_Id"]);   // but in this we need to specify it as string 
// console.log(Jsuser["Full name "] );  // this is the only way to access this type of key 

// for symbol output  is like 
// console.log(Jsuser[mysym])

// to change somthing in object 

 /*Jsuser.emali_Id = "singh@dtu.ac.in"
// want to freeze the changes 
//Object.freeze(Jsuser)
Jsuser.isLoggedIn = true 
// console.log(Jsuser.isLoggedIn);

// function in object 
Jsuser.greeting  = function () {         //  function defined 
    
    console.log("hello JS user");
}
console.log(Jsuser.greeting());  // use in object 

Jsuser.greetingTwo  = function () {         
    
    console.log(`hello JS User, ${this.name}`);  // here, refering the name  by using this 
}*/
// console.log(Jsuser.greetingTwo());

// *******  constructor 

const instaUser = new Object()  // constructor => singleton 
instaUser.Id = "123abc"
instaUser.name = " Ayush "
instaUser.emali_Id = "user1@gmail.com"
// console.log(instaUser);


const regularUser = {
 email : " name@gmail.com",     /// object in object 
 fullname: {
    username:{
        firstname : "Ayush",
        lastname : "singh"

    }
 }
}
//console.log(regularUser.fullname.username);

// combine object

// 1st method 
const obj1 = {1 : "a", 2: "b"}
const obj2 = { 3:"c", 4: "d"}
const obj3 = Object.assign({}, obj1, obj2)  // see docum... object.assign mdn 
// console.log(obj3);

// 2nd by using spread 
const obj4 = {...obj1,...obj2}
// console.log(obj4);

// console.log(instaUser);
// console.log(Object.keys(instaUser));  // all keys in one array  so we can use all array function 
// console.log(Object.values(instaUser)); // array 
// console.log(Object.entries(instaUser)); // array 
 
// console.log(instaUser.hasOwnProperty('emali_Id')); //  check if this is present or not 





