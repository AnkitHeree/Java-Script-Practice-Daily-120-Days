// Q1: Reverse a string (without using .reverse())

// function revrseStr(str){
//     let value ="";
//     for(let i=str.length-1;i>=0;i--){
//         value += str[i];
//     }
//     return value;
// }
// console.log(revrseStr("hello"));



function reverseString(str) {
    let arr = str.split("");
    let result = "";

    for (let i = arr.length - 1; i >= 0; i--) {
        result += arr[i];
    }

    return result;
}
console.log(reverseString("hello"));
