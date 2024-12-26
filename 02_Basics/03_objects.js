//Objects can be declared in the 2 ways 
//1. Literal - If we use Literal then it will not made like singletone Object 
//2. Constructor- if we use constructor then it will made singleton object

//Singleton (only one copy of object which is in the same class)
//Object.create() - This is constructor


//Object Literals

//symbol using
const mysymbol = Symbol("key1")

const jsUser = {
    name:"Vivek",
    "full Name":"Vivek V Bagane",
    age:25,
    location:"HYB",
    email:"vivek123@gmail.com",
    isLoggedin:false,
    lastLoginDays:["Monday","Saturday"],
    //mysymbol:"myKey1"
    [mysymbol]:"myKey1"
};

// console.log(jsUser.email);//vivek123@gmail.com
// //console.log(jsUser[email]);//error (by default in object email treated as string "email" )
// console.log(jsUser["email"]);//vivek123@gmail.com
//WE can not use like this console.log(jsUser."full Name");
//Correct way
// console.log(jsUser["full Name"]);
// console.log(typeof mysymbol);//String

//For Sysmbol we can use like this mysymbol:"myKey1" if use like this then the type of symbol is string so define the symbol in object like  
// console.log([mysymbol]);
// console.log(typeof [mysymbol]);

//How we can override the values of object 
//console.log(jsUser["email"]);//vivek123@gmail.com
//jsUser.email = "Abc@gmail.com"
//console.log(jsUser["email"]);//Abc@gmail.com

//Use can freeze the object it's proprty can not be changed further, we have to use the freeze on object 

//Object.freeze(jsUser)
//jsUser.email="123@gmail.com";
//console.log(jsUser);
/*
{
  name: 'Vivek',
  'full Name': 'Vivek V Bagane',
  age: 25,
  location: 'HYB',
  email: 'Abc@gmail.com',
  isLoggedin: false,
  lastLoginDays: [ 'Monday', 'Saturday' ],
  [Symbol(key1)]: 'myKey1'
}
*/


//We can use the function as the object property 
jsUser.greeting = function(){
    console.log("Hi Chaitu");
    
} 

console.log(jsUser.greeting);
//[Function (anonymous)] - It will return the Anonymus function return back as a referance.
console.log(jsUser.greeting());
//Hi Chaitu

jsUser.greetingTwo = function(){
    console.log(`Hello Js User Vivek & Chaitu,${this.name}`); 
} 

console.log(jsUser.greeting());//Hi Chaitu
console.log(jsUser.greetingTwo());//Hello Js User Vivek & Chaitu,Vivek









