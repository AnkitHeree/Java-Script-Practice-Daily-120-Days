// 🔥 FINAL MASTER RULES

// 👉 Rule 1:
// return value → wahi return

// 👉 Rule 2:
// no return → undefined

// 👉 Rule 3:
// return functionName → function return

// 👉 Rule 4:
// return functionName() → function call ka result return

// 👉 Rule 5:
// return ke baad kuch nahi chalta

// rule1

// function same(){
//   let  a = 10
//   return a
// }
// console.log(same())  //10 same return



// rule 2 no return == undefine

//  function same(){
//   const  x = 10
 
//  }
//  console.log(same())  // undefine



// rule 3  return function name just 

// function outer() {
//     function inner() {
//         return 10;
//     }
//     return inner; // function return ho raha hai
// }

// const x = outer();
// console.log(x);   // kya hai?  [Function: inner]  main tumhe machine de raha hu
// console.log(x()); // kya hai?  10  main machine chala ke result de raha hu


// rule 4


// function inner() {
//     return 10;
// }

// function outer() {
//     return inner(); //  call ho raha hai
// }

// console.log(outer());


// rule 5 return ke bad kuch nhi chlta

function ankit(){
    console.log("ankit Here")
    return 10
    console.log("ankit not here")
}

console.log(ankit())




