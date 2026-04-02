// summ of array

// let arr = [3,4,5,6,7]
// let sum = 0;
// for(let i=0;i<arr.length;i++){
//     sum = sum + arr[i];
//     console.log(sum)   // output will 3 ,7 ,12,18,25
// }


// Find Maximum Number

let numbers = [3, 7, 2, 9, 5];
let max = numbers[0];

for(let i = 1; i < numbers.length; i++) {
    if(numbers[i] > max) {
        max = numbers[i];
    }
}

console.log("Maximum Number is:", max);   //output 9

// Dry run:

// i = 1, numbers[1] = 7
// 7 > 3 → max = 7
// i = 2, numbers[2] = 2
// 2 > 7 → false → max = 7
// i = 3, numbers[3] = 9
// 9 > 7 → true → max = 9
// i = 4, numbers[4] = 5
// 5 > 9 → false → max = 9