// What is a block 

// a block is defined by the Curley Backets {} it also known as compound statement
// block is use to compile multiple js statement in to a group

// why we need to group all the statement Together

//we need to group the statement toghether so that we can use multiple statements in a place where js expects only one statement

// ex:  

// if(true) // it will so error

// // but

// if(true) console.log("ankit")  // it dosent give erorr and here we are not using block but still program run becuse without block we can only run single statement
// and block use to wrap multiple statement together in side it

// what is block scope

// {
    // each and every variables and function that we useing inside this block that is known as block scope
//     var a =10
//     let b =20
//     const c =30  // let and const are stored in different memory that will removed aftr the block is execute thats why we get  not defined console.error();
//     console.log(a)
//     console.log(b)
//     console.log(c)
// }
// console.log(a)
// console.log(b)
// console.log(c)

// Q3 what is shadowing

// if we have same name variable outside the block so the block side variable will shadow outer global variable
// ex


{
    var a =10
    let b =20
    const c =30
    console.log(a)
     console.log(b)
    console.log(c)  // shadowing mtlb jo value a me aayegi vo inner me se he phle aayege outer will not assign in that
}
console.log(b) // if we trying this it will also print 10



