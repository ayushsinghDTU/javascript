// for 
// const array = [1,2,3,4,5]
// for (let i= 0; i< array.length; i++) {
//     const element = array[i];
//     console.log(element);
    
// }
// other basics loops for , while , DO while etc

// Array specifiec loops 
// const  arr = [1,2,3,4,5]
// for (const num of arr) {
//     console.log(num);
// }



// Maps 
const map = new Map()
map.set("1" , "INDIA")
map.set("2","USA")
map.set("3", "japan")

// for (const key  of map) {
//     console.log(key);
// }
for (const [key,value] of map) {
   // console.log(key,':-', value);
}

// const myobject = {               // object is not iterable my this method 
//     'game1' : 'NFS',
//     "game2" : 'spiderman'
// }
// for (const [key, value ] of myobject) {
//     console.log(key,":-",value);
// }

const myobject2  ={
    js    : 'javascript',
    cpp   : 'c++',
    rb    : 'ruby',
    swift : 'swift by apple'
}
for (const key in myobject2) {
  // console.log(myobject2[key]);
 // console.log(`${key} shortcut is for ${myobject2[key]}`);
}
// array 
//const  coding =["js","rb","py","java","cpp"]
//for (const key in coding) {
  // console.log(key);  // index value 
 //  console.log(coding[key]);
//}
// map can't be iterable 

// for each loop  -> higher order function 
const  coding = ["js","rb","py","java","cpp"]
coding.forEach( function (item){    
   // console.log(item);

}
) 
// other parameter to access 
//coding.forEach( (val) => {console.log(val);})

//coding.forEach( (val , index, arr ) => {console.log(val,index,arr);})

// [{},{},{}] object with in array -> iteration

const mycoding = [
  {  language : "java",
    languagename : "js"
},
{
    language : "cpp",
    languagename : "c++"
},
{
    language : "python",
    languagename : "py"
},
]
mycoding.forEach((val)=>{
    console.log(val.languagename);
})


