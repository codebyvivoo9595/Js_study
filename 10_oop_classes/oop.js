//Object Litral

const user = {
    userName :'Vivek',
    loginCnt:8,
    signIn:true,
    getUserDetails:function(){
        //console.log("Got user details form dataBase");
        console.log(`Username:${this.userName}`);
    }
}

console.log(user)
console.log(user.getUserDetails());
//this we are using for the current context
console.log(this);
//Node var {} empty object milto pn browser var aplya window object milto


//constructor function
//const promise1 = new Promise()
//const date = new Date()

//here new is nothing but the constructor
//new is used to crete multiple execution context 
//if we want to replicate values like class is blue print and object is the realtime object 

function User(userName,loginCnt,signIn) {
    this.userName = userName;
    this.loginCnt = loginCnt;
    this.signIn = signIn;
    
    this.greetings= function(){
     console.log(`Hi ${this.userName}`);
     
    }
    return this
}

//so user_vivek che value override hotil user chitu ne so tya mule apan new keyword use karto 
//const user_vivek = User("Vivek",50,true)
//const user_chitu = User("Chitu",5,false)

//so new use kartoy 

const user_vivek = new User("Vivek",50,true)
const user_chitu = new User("Chitu",5,false)

//console.log(user_vivek);
// console.log(user_chitu);
//doni seperate value yetil override nahi karnar 
// Jeva apan new keyword use karto tar te implicitly this return kart jari apan nahi lihil tari 

// check constructor
console.log(user_chitu.constructor);
//[Function: User]
//return the function referance 

//Check instanceof on mdn 