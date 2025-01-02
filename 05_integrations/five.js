//for each loop 

const coding = ["js", "ruby", "java", "python", "cpp"]

//For for each we are passing the one anonemous function with one argument so we can access the values in side the loop   
// coding.forEach( function (val){
//     console.log(val);
// } )

//Here we are using arrow function in the for each 
// coding.forEach( (item) => {
//     console.log(item);
// } )

//If i want to pass the function to the loop 
// function printMe(item){
//     console.log(item);
// }

//Yes we can, we are passing the referance to the loop 
// coding.forEach(printMe)

//For each having the multiple arguments (item, index, arr)
// coding.forEach( (item, index, arr)=> {
//     console.log(item, index, arr);
// } )

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    console.log(item.languageName);
} )