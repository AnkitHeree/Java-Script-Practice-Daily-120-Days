// summ of array

// let arr = [3,4,5,6,7]
// let sum = 0;
// for(let i=0;i<arr.length;i++){
//     sum = sum + arr[i];
//     console.log(sum)   // output will 3 ,7 ,12,18,25
// }



// Find Maximum Number

// let numbers = [3, 7, 2, 9, 5];
// let max = numbers[0];

// for(let i = 1; i < numbers.length; i++) {
//     if(numbers[i] > max) {
//         max = numbers[i];
//     }
// }

// console.log("Maximum Number is:", max);   //output 9

// Dry run:

// i = 1, numbers[1] = 7
// 7 > 3 → max = 7
// i = 2, numbers[2] = 2
// 2 > 7 → false → max = 7
// i = 3, numbers[3] = 9
// 9 > 7 → true → max = 9
// i = 4, numbers[4] = 5
// 5 > 9 → false → max = 9

// let arr = [10,90,70,60]
// let max = arr[0];
// for(let i = 0; i<arr.length;i++){
//     if(arr[i]>max){
//         max = arr[i];
//     }
// }
// // console.log(max)  for revision


// Count Even Numbers

// let arr = [4,3,8,5,7,10]
// let even = 0;

// for(let i =0 ; i<arr.length; i++){
//     if(arr[i]%2==0){
//         even++
//         console.log(arr[i])
//     }
// }

// console.log(even)  // crazy 



// reverse arr 

// let arr = [0,3,5,6,7,8]
// arr.reverse()
// console.log(arr)


// Check Number Exists or Not

// let arr = [0,3,5,6,7,8]
// let target = 6;
// for(let i = 0; i<arr.length; i++){
//     if(arr[i] == target){
//         console.log("Yes Target Exist That is " , arr[i])
//     }
// }
//done


// Count Occurrence  koi number kitni bar ayya

// const Occurence = [1,2,3,4,3,2,1,,3,5,2]
// let count = 2
// let aaya = 0
// for(let i =0;i<Occurence.length;i++){
//     if(count == Occurence[i]){
//         aaya++;
//        console.log(count)
//     }
   
// }
// console.log("Ye rha Result itni Bar ayya 2 :::>>",aaya)
 

// Find Minimum Number

// let arr = [9,4,2,1,6,8,0]
// let minum = arr[0]
// for(let i=0; i<arr.length; i++){
//     if(minum>arr[i]){
//         minum=arr[i]
//     }
// }
// console.log(minum)


// Thoda Sochna Padega 😈 find second largest number

let arr = [10,90,9,6,900]

let maxLarge = -Infinity
let maxLarge2 = -Infinity

for(let i = 0; i < arr.length; i++){
    if(arr[i] > maxLarge){
        maxLarge2 = maxLarge;
        maxLarge = arr[i];
    }
    else if(arr[i] > maxLarge2 && arr[i] !== maxLarge){
        maxLarge2 = arr[i];
    }
}

console.log(maxLarge2)

