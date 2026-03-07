// Note : --Always use keyword for declare a variable //

let name = "Ankit Here";
let age = 44;
console.log(name + " " + age);

var size = 24;  // old keywords we can chage it value exmple
var size = 25;

console.log(size);

let score = 24;  // let new way but isme variable ko bar bar redclare nhi kr skte lakin update kr skte hai example
score = 25;

console.log(score);

const pi =3.14; // const me jo bhee declarte hoga o kbhi change nhi ho skta ye permanent hota hai exple jaise pie radius etc
//pi=3.16;  // error aa jayega 
console.log(pi)  

let a ;  // undefine aayega because agr koi variabe declare kiya but value nhi di to compiler automatic undefine dega
console.log(a);

// const x;   // error dega because const ko value dena he dena hota hai 
const x =10;
console.log(x)  

// note: -- do curly brackets ke beech me jo bhee code hota hai use block code khte hai Example {code} == block code

// block code 

{
    let name = "ankit";
    console.log(name);
}
// note :-- curly bracket jha se suru hota hai vha se nya block start hotra hai in js  ab both let deifferent hai ine alg values store hai
{
    let name = "yadav";
    console.log(name);
}