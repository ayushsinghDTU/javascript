
const name = "Ayush"
const repoCount = 10

// console.log(name + repoCount + " value"); => old time practice 

// new method => sting interpolation 

//console.log(`Hello my name is ${name} and my repoCount is ${repoCount}`)

// another way to create String 
const GameName =new String( `Ayush--singh_dtu`)
//console.log(GameName);
// above can be use in web console and see more feature 
//console.log(GameName[0]);
//console.log(GameName.__proto__); // to see object 

//console.log(GameName.toLowerCase());
// to find the character by giving index 
//console.log(GameName.charAt(2));
// to find the index  by giving char 
//console.log(GameName.indexOf('T'));

// substring 
const newString = GameName.substring(0,2);
console.log(newString);
const anotherString = GameName.slice((- 8, 4));
console.log(anotherString);

// trim  -> the  extra space 
const NewString_One = "  Ayush  "
console.log(NewString_One);
console.log(NewString_One.trim());

// want to replace something 

const url = "https:// Google.com/instagram%20search"
console.log(url.replace('%20','-'));
// find if this present or not 
console.log(url.includes('instagram')) // Present 
console.log(url.includes('singh')); // Not Present 


// If we want to convert into array based on something 
console.log(GameName.split('--'));

