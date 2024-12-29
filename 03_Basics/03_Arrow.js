const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

//we are using this for to access the current contex.

// user.welcomeMessage()
//hitesh , welcome to website
// user.username = "Vivek"
// user.welcomeMessage()
//Vivek , welcome to website


 //console.log(this);
 //{} - node madhe ata  this empty object ahe 
 //Pn jar log() apan browser var kele tr  window() return kart karan broser madhe Global object ahe window() object tya mulech apan sagele event capture karto
 // Karan pahila js fkt browser madhech execute hot hoti pn atta apan independently execute karu shakto node use karun 



// function chai(){
//     let username = "hitesh"
//     console.log(this.username);
// we can not access username using this here 
// }

// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }

// ass pn access karu nay shakat 


const chai =  () => {
    let username = "hitesh"
    console.log(this);
}

// chai()

//Arrow function syntax   () => {} 

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }
// Explicit return 

//Implicit return hya madhe aapan return lihit nahi ani return karanari value same line madhe asate 
// const addTwo = (num1, num2) =>  num1 + num2

//jar apan {} use kele tr return lihavch lagel
//pn apan () use kele tr return nahi lihav laganar 
//                              value return hotiye
// const addTwo = (num1, num2) => ( num1 + num2 )

//Object return karycha asel tr tyla paranthesis ()madhe wrap karav lagt.. 
const addTwo = (num1, num2) => ({username: "hitesh"})


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()

