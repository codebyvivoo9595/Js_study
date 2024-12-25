//Array 
//Always the do the Shallow copy 
//Means if we changed the value in array then they changed the original value like (stack meomory disscuded) 
//---------------------------------------------
/*
//Declaration 1
const arr = ['1', 10, 'Vivek',true, 0.55]
console.log(arr);//[ '1', 10, 'Vivek', true, 0.55 ]
console.log(arr[5]);//Undefine
console.log(arr[2]);//Vivek

//Declaration 2
const arr2 = new Array(1,2,3,4,5)
console.log(arr2);


*/
//---------------------------------------------

// Array Methods 
/*
const myarr = [1,2,3,4,5,6]
myarr.push(7);//add in array 
myarr.pop()//delete last element 
console.log(myarr);
myarr.unshift(8);
//Inserts new elements at the start of an array, and returns the new length of the array.
console.log(myarr);//[ 8, 1, 2, 3,4, 5, 6]
myarr.shift(8)
//Removes the first element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
//[1, 2, 3,4, 5, 6]
console.log(myarr.includes(9));//false 
//Determines whether an array includes a certain element, returning true or false as appropriate.
console.log(myarr.indexOf(6));//5 th index value is 6 
//Returns the index of the first occurrence of a value in an array, or -1 if it is not present.
console.log(myarr.indexOf(10));//-1

const newarry = myarr.join()
console.log(myarr);
console.log(typeof myarr);//Object 
console.log(newarry);
console.log(typeof newarry);//String 
//Join will change the type string 

*/
//----------------------------------------------------

//Slice, Splice 


