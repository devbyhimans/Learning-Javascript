console.log("2">1);//true
console.log("02">1);//true

//----------------------
//but manytimes predictable result is not obtained so must avoid the comparison of different datatypes

console.log(null>0);//false
console.log(null==0);//false
console.log(null>=0);//true
//Reason--
/* equality check == and comparisons >,<,>=,<= works differently.
---
comparisons convert null to number treating it as 0 */

console.log(undefined>0);//false
console.log(undefined==0);//false
console.log(undefined>=0);//false

//--------------------------
//strict check -- ===
//hecks datatype as well as value)
