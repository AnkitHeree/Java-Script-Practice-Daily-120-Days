// loops are use to repet code again and again repet 

for(let i = 0; i<5;i++){
    console.log("Ankit Here")  // initialization , condition ,updation 
}

// sum of numbers
let sum = 0;
for(let i = 0; i<=5; i++){
sum = sum + i;
console.log("sum = ",sum)
}
console.log("sum = ",sum);

// infinite loop never create 

// while loop
//syntax:-

// while(condition){
//     // do some work 
// }


let i = 5;
while(i<5){
    console.log("ankit",i);
    i++;
}


// do while loop isme condition phle he cheak ho jati hai mtlb ye 1 bar run hoga he hoga

let num = 0;
do{
    console.log("ankit");
    num++
}
while(num<=5);  // last me condition ke bad shirf do while loop me semicolon lgta hai


//for-of loop it is use to apply loops on string and arrays

//syntax:-

// for(let value of stringVariable){
//     //do some code
// }


let str = "ankit";
for(let i of str){
    console.log(i)
}

//find string size  for of loop is use for string

let lengthOfStrings=0;
let strin = "ankit";
for(let i of strin){
    console.log("i=",i)
    lengthOfStrings++;
}
console.log(lengthOfStrings)  

