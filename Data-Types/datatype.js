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

let ankit = null;
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
    name: "ankit",
    age: 27,  // yha age 27 hai
    marks: 85,
    isPass: true
};

// ab man lo agr hme sutdent me age ko badahana hai like 27 to 28 to ye object me kaise hoga
student["age"] = student["age"] + 1;
student["name"] = "Omkar yadav";
student["marks"] = 89;
student["isPass"] = false;


console.log(student);  // full detail about student

console.log(student["age"])  // iss trh hm ak ak values ko bhee access kr skte hai 
console.log(student["name"]) // " " cod is impoortent in tis method
console.log(student["marks"])
console.log(student["isPass"])

// ya phir aise

console.log(student.name)
console.log(student.age)
console.log(student.marks)
console.log(student.isPass) // Dono trh se apn object ke values ko access kr skte hai

// ab man lo agr hme sutdent me age ko badahana hai like 27 to 28 to ye object me kaise hoga 



