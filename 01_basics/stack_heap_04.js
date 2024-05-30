// stack(Primitive) , heap(Non - Primitive)

let Client_One = "Ayush"
let Client_two = Client_One
console.log(Client_One);
console.log(Client_two);
// Above example is For stack (Primitive) --> make copy and pass it  , change doesn't affect

// Heap --> reference  pass original one , change affect 
let user_one = {
    Name : "Ayush" ,
    email :  "user@gmail.com"
}
let user_two = user_one
user_two.email = "ayush@gmail.com"

console.log(user_one);
console.log(user_two);

