
//------------Functions--------------- 

//console.log('Hi vivek');

// function sayHi(){
//     console.log('Hi vivek & Chaitu');
// }

//sayHi - Referance
//() - Execution 
//sayHi()

//                        parameters 
// function addTwoNumbers(number1,number2){
//     console.log(number1+number2);
// }

//          Argumnets
//addTwoNumbers(10,15);

//const result = addTwoNumbers(10,15);
//console.log(result);//undefined we are not returning any thing 

// function addTwoNumbers(number1,number2){
//     let res =number1+number2 ;
//     return res
// }

// Rest Operator 

//rest operator use kela tr run time la kiti pn values pathau shakto (karan kiti value pass karaycha ahet te mahiti nahi )
// function calculationCartPrice(...num1)
// {
//     return num1
// }
//console.log(calculationCartPrice(11,22,33,45,56));
//[ 11, 22, 33, 45, 56 ]


// function calculationCartPrice(val1,val2,...num1)
// {
//     return num1
// }

//console.log(calculationCartPrice(21,32,43,65,76));
//num1 = [ 43, 65, 76 ]
//val1=21  val2= 32

// Note : 
// return num1,val1,val2 
// ass lihile tr last return value mhnje val2 chi value 32 only return karel...

// const user ={
//     Product:"Iphone",
//     price:89000
// }
//___________________________________________________
//How to pass the object to the function

// function handelobject (anyobject){
//  console.log(`Hi Love ${anyobject.Product} and that price is ${anyobject.price}`);
// }

// handelobject(user)
//we can use like this also 
// handelobject({
//     Product:"Samsung S24 Ultra",
//     price:120000
//     })


//___________________________________________________
//How to pass array into the function 

// const myarray = [10,20,30,40]

// function returnArray(getarray){
//     return getarray[1]
// }

// console.log(returnArray(myarray));
//console.log(returnArray([10,222,3333,6666,88888]));
