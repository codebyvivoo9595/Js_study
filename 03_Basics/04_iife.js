//Immediately Invoked Function Expressions [IIFE]

// function chai(){
//     console.log(`DB Connected`);
// }

//why we are used the iife
// Karan kadhi-kadhi Global scopes chya polution mule problem hoto tya mule jar ekhade function immidiate call karych asel tr iife use karto 
//Simple syntax wrap the function in paranthesis and execution()
//example anyfunction()
//wraping in side () & execution ()
//(anyfunction(){})()  this one iife

//To end the invoked function in javascript we have to add the ; otherwise it will give the error

//Named iife
// (function chai(){
//     console.log(`Please have the tea`);
// })();
//Unnamed iife
// (()=>{
//     console.log(`Hi Vivek`);
//     console.log(`How are you?`);
// })()

//iife with parameter
// ((name)=>{
//         console.log(`Hi ${name}`);
//         console.log(`How are you?`);
// })("vivek")
//Hi vivek , How are you