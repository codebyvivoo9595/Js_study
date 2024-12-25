//Number 
//+++++++++++++++++++++++++++++++++++++++++++++++
// const score = 100;
// console.log(score);

// const balance = new Number(100);
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(5));//Number of digits after the decimal point. Must be in the range 0 - 20, inclusive.
// //100.00000



// //toprecision method

// const otherNumber = 11.22334
// console.log(otherNumber.toPrecision(2));
// //11
// /* Must be in the range 1 - 21, inclusive.
// Returns a string containing a number represented either in exponential or fixed-point notation with a specified number of digits.
// */

// const otherNumber1 = 111.22334
// console.log(otherNumber1.toPrecision(4));
// //111.2

// const otherNumber2 = 111.89334
// console.log(otherNumber2.toPrecision(4));//111.9
// console.log(otherNumber2.toPrecision(5));//111.89

// //Use carefully in this case 
// console.log(otherNumber2.toPrecision(2));//1.1e+2 (2 values and then remaining values in exponential)

// //Localestrings

// const ROI = 158765327;
// console.log(ROI.toLocaleString()); //158,765,327 - by default us standerds
// console.log(ROI.toLocaleString('en-IN'));//15,87,65,327 - Indian standerds 

//Max value - max value to be store 
//Min value - min value to be store 
//max_safe_integer - Max integer can be saved 

//++++++++++++++++++++++++++++++++++++++++++++++++++

//Maths 

// console.log(Math);//Object [Math]
// console.log(Math.abs(-5));
// /*Returns the absolute value of a number (the value without regard to whether it is positive or negative). For example, the absolute value of -5 is the same as the absolute value of 5.*/

// console.log(Math.round(2.55));//3 // Round off value 
// console.log(Math.round(2.45));//2
// console.log(Math.ceil(2.55));//3 //Topmost round value 
// console.log(Math.floor(2.55));//2 //lower round value pick

// //sqrt - squreroot
// //pow - power of 

// console.log(Math.min(2.55,3,5,10)); //Pick the min value // 2.55

// console.log(Math.max(2.55,3,5,10)); //max value 10


//Math.random (value always 0-1 and random values it will give)

// console.log(Math.random());//0.8517662408799886//0.7455015135296981

// console.log((Math.random()*10)+1);
// console.log(Math.floor((Math.random()*10)+1)); 
// //it will range (1-10)
// //If i want range from 11-20

// If we want the random number just like dice is thrown we can use this formula 
const min = 10 
const max = 20 
console.log(Math.floor(Math.random()*10(max - min+ 1)) + min);
