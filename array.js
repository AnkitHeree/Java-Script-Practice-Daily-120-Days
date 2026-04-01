// let start array

// let marks = [20,30 ,50,60]
// console.log(marks)
// console.log(marks.length)  // find length o array

//hetrogenious  means  multiple dtatypes we can store in an  array 

// let hetrogenious = [20,"ankit",50.60,false]
// console.log(hetrogenious)

// // enter data in last.push

// hetrogenious.push(90); //added back 90
// hetrogenious.push("ankit3"); // added ankit 3
// console.log(hetrogenious)

// // delet element from last

// hetrogenious.pop("ankit3");
// console.log(hetrogenious)  // deleted ankit 3

// // add at  start 

// hetrogenious.unshift(11)
// console.log(hetrogenious)  // 11 add to the start

// // for delete

// hetrogenious.shift() 
// console.log(hetrogenious)  // 11 deleted from starting  // dont pefer shift and unshift
//  let arr =[10,20,30,40]
//  for (let i = 0;i<=arr.length;i++){
//     console.log(i )  // 1,2,3,4   // .length use to tell length of array
//  }

//  for(num of arr){
//     console.log(num)  // it direct print value
//  }


// slice of Array beech ka part nikalna

// let att = [1,2,3,4,5]
// const arr2 = att.slice(2,4)

// console.log(att)

// // console.log(att.splice(1,3)) //  isme hm original arry me deta htate hai mtlb beech me se part bahr nikalna in array aur ye part array se niukl jayega Ex
// console.log(att)  // sirf 1 or 5 bache hai ab
// const att2 = att.splice(1,3,"ankit",21)  // extract arry phir usme add bhee kr rhe hai 
// console.log(att)



// spreed oprator * Importent  - combine

// 1 trika

// const arr = [10,30,40,50]
// const arr2=[0,1,2,3]
// arr.push(arr2)
// console.log(arr)  //output and arry to judega but [] ye bracket bhee aa yayenge aray me

// 2 Safe Trika


// const arr = [10,30,40,50]
// const arr2=[0,1,2,3]
// const arr4 = ["ankit","yadav",false]
// const arr5 = [0.1,0.2,0.3]
// const arr3 = arr.concat(arr2 ,arr4, arr5)  // concat mtlb jodna  jitne chahe utne jod skte hai ex

// console.log(arr3) 



//arr.spred -- arry ko tod ke ak me store krta hai 
// 3 trika 


// const arr = [10,30,40,50]
// const arr2=[0,1,2,3]
// const arr4 = ["ankit","yadav",false]

// const arr3 = [...arr,...arr2 ,...arr4,] //todke element nikal ke ak me add kr deta hai most used

// console.log(arr3) 




//arry tostring arry string bn jayega

// const name = ["alice", "ankit ","bob"]
// console.log(name.toString());   // ye array string bn jayega 

// // join same kam krta hai arry to string bass isme kuch alg jaise 

// console.log(name.join("-")); 
// console.log(name.join("*")); 
// console.log(name.join("  ")); 
// console.log(name.join("----"));  // jo add krenge op aa jayega join se



// index pta kr skte hai using 

// arr = ["ankit","hello","lol"]
// console.log(arr.indexOf("ankit"))
// console.log(arr.indexOf("lol"))   // is trh or agr index nhi rhega to -1 degaa



// arr = ["ankit","hello","lol" , "ankit"]  //agr koi value 2 bar ho to bhee indexOf sirf 1 wala he retun krega 

// //indexOf

//  console.log(arr.indexOf("ankit"))

//  //lastIndexOf

//   console.log(arr.lastIndexOf("ankit"))  // lastOfindex ka use krke hm o double ankit wale index ko piche se access kr skte hai 

//   //includes

//   console.log(arr.includes("lol"))  // true false me kya lol hai array me 




// sorting  assemnding order in array 

// arr = ["ankit","hello","lol" , "quet" ,"noit"]  //agr koi value 2 bar ho to bhee indexOf sirf 1 wala he retun krega 
//  arr.sort();

//  console.log(arr)  // alphabets wise 

//  // if small charactor hai to O ASCII table ke according chlega Ex 

//  arr = ["Ankit" , "ankit" ,"Rahul","rahul" ,"Sumit","sumit"]
//  arr.sort(); //assending order
//  console.log(arr)  // ye Data ko ASCII Table ke throw yad rkhta hai

// // use to reverse array

//  arr.reverse(); //desending order
//  console.log(arr)



arr = [100,99,30,20,50] 
arr2 = ["ankit","Ankit",30 , 40 ,60,false,true]

 arr.sort();
 arr2.sort()
 console.log(arr)  // ye bhee asscii table ke according he sort hoga later wise phle 1 hai to ASCII chek Phir 
console.log(arr2)
 // note sorting charactor ke basis par hoti hai in js me arry ki because arry me varity of data store ho skte hai in js

 

 //but Number ko Assending order me laa skte hai using a function
arr = [100,99,30,20,50]
 arr.sort((a,b)=>a-b);
 console.log(arr)   // lo ho gya sir assending order