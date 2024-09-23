//  primitive 

// 7 types : String , Number , Boolean , Null , Undefined , Symbol , BigInt

const score = 100
const scorevalue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);

const bigNumber = 346386746872367637n
// console.log(typeof (bigNumber));


// Reference Type / Non - Primitive

//  Array , Objects , Functions , Functions
const heroes = ["shaktiman" , "naagraj" , "donga"];
let MyObj = {
    name: "janvi",  // (curly brekets ni andar hoi tene object kevay)
    age : 21,
}

// const myFunction = function(){
//     console.log("Hello World");
// }

console.log(typeof anotherId);


// ++++++++++++++++++++++++++++++++++++++

// stack (primitive) ,  Heap (Non-Primitive)

let myYoutubename = "dashlaniyajanvi.com"

let anothername = myYoutubename
anothername = "janvipatel"

console.log(anothername);
console.log(myYoutubename);



