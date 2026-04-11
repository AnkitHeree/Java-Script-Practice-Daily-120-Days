// Q1 What is Temporal Dead Zone
// Q2 Did Let and Const Declareration are Hoisted
// Q3 Diffrence Between Syntax Error Refrence Error vs Type Error

// Ans yes Let and Const Declaration is Hoisted but these are in the temporal dead zone and they are not in global memory they are in anpother memory and we can not access this memory space

// Ex


//  console.log(a) // we can not access a 
// let a =10;
// var b =20;


// let a =10;
// console.log(a) // now we can access it
// var b =20;

// what is temporal Dead Zone

//temporal Dead Zone is A time Sice when this let variable was hoisted and till it is initialize some values that time between them its known as the TDZ
//Ex :

// console.log(a)
// let a =10;

console.log("ankit")
// let a =10
// let a =20  canot Declare like this 

