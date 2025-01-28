// Array ==> Object ==> null
// String ==> Object ==> null

function multipleBy5(num){
    return num*5
}

multipleBy5.power=2

// console.log(multipleBy5(5));
// console.log(multipleBy5.power);
// console.log(multipleBy5.prototype);
//25
//2
//{}  
// ha jo empty array milalay mhnje by default kahitri context set zalet tya method cha this ahe va 
//tyachya kahitri internal properties pn astat

//Make a note that functions are function and functions are object also 
//karan javascript prototype varti-varti jatch
//rahate vo paryat tyla object parent milat nahi 
//ani javascript madhye object cha parent null asto
// so object chya varti nahi jau shakt 




function createUser(username,score) {
    this.username = username
    this.score = score
}

createUser.prototype.increment = function(){
    this.score++
    //jisne bhi bulaya usaka score increment kardo
}

createUser.prototype.printMe = function(){
    console.log(`Price is ${this.score}`);
    //Jisne bhai pucha usaka score batao
    //calling function 
}


const chai = new createUser("chai",25)
const Tea = createUser("Tea",250)




/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/