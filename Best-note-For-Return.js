// 1. Simple Return Value
// function a() {
//     return 5;
// }
// console.log(a());

// 👉 Output: 5



// 🟢 2. No Return
// function a() {
//     console.log(10);
// }
// console.log(a());

// 👉 Output:

// 10
// undefined




// 🟢 3. Return Variable
// function a() {
//     let x = 20;
//     return x;
// }
// console.log(a());

// 👉 Output: 20



// 🟢 4. Return Expression
// function a() {
//     return 5 + 5;
// }
// console.log(a());

// 👉 Output: 10



// 🟡 5. Return Function
// function a() {
//     function b() {
//         return 10;
//     }
//     return b;
// }

// let x = a();
// console.log(x());

// 👉 Output: 10




// 🟡 6. Return Function Call
// function a() {
//     function b() {
//         return 10;
//     }
//     return b();
// }

// console.log(a());

// 👉 Output: 10



// 🟡 7. Return Nothing Explicitly
// function a() {
//     return;
// }
// console.log(a());

// 👉 Output: undefined




// 🔴 8. Return + Console.log
// function a() {
//     console.log("Hello");
//     return 5;
// }
// console.log(a());

// 👉 Output:

// Hello
// 5




// 🔴 9. Return ke baad code
// function a() {
//     return 5;
//     console.log("Hello");
// }
// console.log(a());

// 👉 Output:

// 5
// 👉 ❗ "Hello" kabhi print nahi hoga





// 🔴 10. Nested Function Call
// function a() {
//     return 5;
// }

// function b() {
//     return a();
// }

// console.log(b());

// 👉 Output: 5




// 🔴 11. Return Function vs Call
// function a() {
//     return 5;
// }

// console.log(a);   // function
// console.log(a()); // 5

// 👉 Output:

// function a() { return 5; }
// 5




// 🔴 12. Multiple Returns (Only First Works)
// function a() {
//     return 5;
//     return 10;
// }
// console.log(a());

// 👉 Output: 5





// 🔴 13. Return Inside Condition
// function a(x) {
//     if (x > 0) {
//         return "Positive";
//     }
//     return "Negative";
// }

// console.log(a(5));

// 👉 Output: Positive






// 🔴 14. Return Object
// function a() {
//     return {name: "Ankit"};
// }
// console.log(a());

// 👉 Output:

// {name: "Ankit"}
// 🔴 15. Return Array
// function a() {
//     return [1, 2, 3];
// }
// console.log(a());

// 👉 Output:

// [1, 2, 3]


