const account_Id = 12345678
let accountEmail = "ayushsingh@gmail.com"
var accountPassword = "123123"
accountcity = " delhi" // This is bad practice try to define moreover it will also run 
// if we don't assign value then undefine appear in output 
let accountState;
console.log(accountState);// ->> undefined 
/* why we use " let " and var ?
 const -> For constant 
 var and let -> For variable but var doesn't support scope ("{ }") , let is modified version 
 so don't use var 
 */
//account_Id = 123232 // const value always fix change not allowed 
accountEmail = " ayush52497@gmail.com"
accountPassword= "090909"
console.log(account_Id);
console.log(accountEmail);
console.log(accountPassword);
// console.table() help to print in one go .. tabular form 
console.table([account_Id,accountEmail,accountPassword,accountcity]);

