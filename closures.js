// In js the closurs are the function that remember their outer function after the outer function finished their execution


// Ex :--

// function outer() {
//     let count = 0;

//     function inner() {
//         count++;
//         console.log(count);
//     }

//     return count;
// }

// console.log(outer());




// Most Confusing Concept for me 🤣

// function test() {
//     return 5;
// }  
// console.log(x ,test())// krne par yha 5 qq or kaise aa rha hai 


// Resion:==   because test() == 5 “Jab hum test() ko console.log me use karte hai, to function execute hota hai aur jo value return hoti hai wo directly print ho jati hai.”


// test() == 5 (only at that moment when it is executed)

function test() {
    return 5
}  
console.log(test())
let x=test()
console.log(x,test())