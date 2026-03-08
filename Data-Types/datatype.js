// Datatypes in jas Number, string, boolean, Undefine, null, BigInt, symbol

//there are two types of data types 1 Premitive :-- that is fix data type 2 NonPrimitive : -- Objects

let age = 24;
console.log(age);

let name = "Ankit";
console.log(name);

let isFollow = true;
console.log(isFollow);

let people;
console.log(people);

let ankit=null;
console.log(ankit);

let nuber = BigInt("100000");
console.log(nuber)

let boy = Symbol("ankit");
console.log(boy);  // these all are primitive data types ye fix hai 

// non primitive data type : object , arrays , Functions this all non primitive datatypes

// object is a collaction of value / variables like : - age name number boolean  etc  these all collecte data is called object;
// key : values = object
const student = 
{ 
name:"ankit",
  age:27,
  marks:85,
  isPass:true
};

console.log(student);

console.log(student["age"])  // iss trh hm ak ak values ko bhee access kr skte hai 
console.log(student["name"])
console.log(student["marks"])
console.log(student["isPass"])

