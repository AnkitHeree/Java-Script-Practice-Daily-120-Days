var a=10  // note kbhi bhee var me jb hoisting hoti hai to o usme sirf varable declare hota hai value nhi jo value 
// uper diya hai o assign nhi hoga jb tk value ander na di jaye
function alt()
{
console.log(a) 
var a=20; // value yha assign huaa but print to phle he ho gya aur jb compiler ko koi value nhi mila to usne undefine so kr diya
}
alt()

// note var me variable ka declaration hoist hota hai, but value hoist nahi hoti