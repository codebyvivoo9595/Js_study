const myName = Vivek;

let age = 25;

//console.log('My Name is '+myName+' & Age is '+age);

//Insted of this we can use String Interpolution 
// Here we can perform run time (on go) operations on it 
//${} ==> Place Holders 
// console.log(`Hello My Name is ${myName} and my age is ${age}`);

//Another way the declare of string 

const oneString = new String('Vivek');  
console.log(oneString.toUpperCase);
console.log(oneString.charAt(2));
console.log(oneString.indexOf('v'));

const secString = oneString;
console.log(secString.substring(0,3));//Viv
console.log(secString.substring(-4,2));//here we are using indexing so can not give negetive value
console.log(secString.slice(-4,2)); // it will accept the negetive values 

console.log(oneString.trim());
console.log(oneString.replace('v','B'));
console.log(oneString.split('-'));







