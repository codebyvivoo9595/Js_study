/*

//Promise 1
const promise1 = new Promise(function(resolve,reject){
    //Do any async Tasks 
    //dB calls, cryptography
    setTimeout(() => {
        console.log('Async Task complete......1st')
        resolve()
    }, 1000);
    
}) 


//hych connection ahe resolve barobar
promise1.then(function(){
    console.log("Promise Consumed....2nd");
    
})

*/


/*
//2nd promise

new Promise(function(resolve,reject){
    setTimeout(() => {
    console.log('Async Task 2 here ');
    resolve()
    }, 2000);
}).then(function(){
    console.log('Async 2 Resolved.....');
})
    
*/

const promise3 = new Promise(function(resolve,reject){
    setTimeout(() => {
    // resolve madhun apan mostly object pass karto pn function, array, object pn pass karu shakto
        resolve({user:'Vivek',email:'vivek@gmail.com',})
    }, 1000);
})

promise3.then(function(userData){
console.log(userData);

})



const promise4 = new Promise(function(resolve,reject){
    setTimeout(function(){
      let error = false;
      if(!error){
        resolve({userName:"Vivek",pass:"viv123"})
      }else{
        reject('Error:Something Went wrong')
      }
    },1000)
})

//.then() jevhya value access karych asetil tr use karnar
//.catch() jevha error handle karych asel tr .catch karnar
promise4.then((user)=>{
    console.log(user); 
    return user.userName
    //for accessing the inner property we are using 
    //.then channing
}).then((userName)=>{
    console.log(userName)
}).catch((error)=>{
    //for handling error we are using .catch
    console.log(error);
}).finally(()=>console.log("The promise is either Resolved or Rejected")//every time finally execute
)


/*
//For syntyactical sugar we can use like this also
promise4
.then((user)=>{
    console.log(user); 
    return user.userName
}).then((userName)=>{
    console.log(userName)
}).catch((error)=>{
    console.log(error);
})

*/



const promise5 = new Promise((resolve,reject)=>{
    setTimeout(function(){
        let error = false;
      if(!error){
        resolve({userName:"Chaitalee",pass:"Viv1432"})
      }else{
        reject('Error:Promise 5 Wents wrong')
      }


    },1000)
})

//We are using the async function 
/*
async function consumePromiseFive(){
    //promise 5 is an object 
    //jar varti error false ala tr to aplyala handle pn kela pahije 
    try{
        const responce = await promise5
        console.log(responce);
    }catch(error){
         console.log(error);
    }
}

//1 sec cha delay asala tri ethe error nahi mart karn apan async keyword use kela ahe so 
consumePromiseFive()

//--------------------------------------------

//async API we are creating

async function getAllUsers() {
    try{
        const response = await fetch('https://api.github.com/users/hiteshchoudhary')
    console.log(response);
    const data = await response.json()
    console.log(data);   
    }catch(e){
        console.log("Error:",e);   
    }
}

getAllUsers()

*/


//here we are using the .then() & .catch()


fetch('https://api.github.com/users/hiteshchoudhary')
.then((response)=>{
    return response.json()
}).then((data)=>{
console.log(data);
})
.catch((error)=>console.log("error",error)
)