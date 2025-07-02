let score ="33";

console.log(typeof(score));//string

//Number()-->converts to number
let valueInNumber = Number(score);
console.log(typeof(valueInNumber)); //number

//-------------------
let score2 ="33abc";
let score4=undefined;

console.log(typeof(score2));//string

//Number()-->converts to number
let valueInNumber2 = Number(score2);
let valueInNumber4 = Number(score4);

/* so even though score2 isnt a number but the 
Number() converts that to number so be careful */
console.log(valueInNumber2);//NaN
console.log(typeof(valueInNumber2)); //number

console.log(valueInNumber4);//NaN
console.log(typeof(valueInNumber4)); //number


//--------------------
let score3 =null;


//Number()-->converts to number
let valueInNumber3 = Number(score3);

/* so even though score3 isnt a number but the 
Number() converts that to number so be careful */
console.log(valueInNumber3);//0
console.log(typeof(valueInNumber2)); //number

//----------------------
let isLoggedIn=1;
 console.log(Boolean(isLoggedIn)) //true

 //1=>true; 0=>false;
 //""=>false
 //"Himanshu"=>true;

 //-----------
 let number=33;
 console.log(typeof(number)) //number

 let numStrg=String(number);
 console.log(typeof(numStrg)); // string

 /* *************operations****************** */ 
 
 console.log(2**3); //-->2^3

 //important
 console.log("1"+2); //12
 console.log(1+"2"); //12
 console.log("1"+2+2); //122--treated every thing as string
 console.log(1+2+"2"); //32

/* string first->then all converted to string
    string last->first opertions happen then comes string*/


