let score = "33"
console.log(typeof score); //one way of using
console.log(typeof (score)); //second way of using


//Case : NaN
let score1="333vivek"
//Coverting it into number 
console.log(typeof(score1))

let valueIsNumber = Number(score1)
console.log(typeof(valueIsNumber)) 
//Data type is showing a number but when we put the value then we are getting NaN 9(Not a Number))  

//Case : null

let v1 = null

console.log(typeof(v1))//Object
let checkIsNumber = Number(v1)
console.log(typeof (checkIsNumber))//Number
console.log(checkIsNumber)//0

//Case : Undefined  
let v2 = Undefined

console.log(typeof(v2))//Undefine
let checkIsNumber2 = Number(v2)
console.log(typeof (checkIsNumber2))//Number
console.log(checkIsNumber2)//NaN


//Case: boolean

let checkval = true

console.log(typeof(checkval))//boolean
let checkIsNumber3 = Number(v1)
console.log(typeof (checkIsNumber3))//Number
console.log(checkIsNumber3)//True 1 false 0


//Case : String

let stringval = "Chaitalee Madam"

console.log(typeof(stringval))//string
let checkIsNumber4 = Number(stringval)
console.log(typeof (checkIsNumber3))//Number
console.log(checkIsNumber3)//NaN

//"33"=>33
//"33abc"=>NaN
//true=>1; false=>0

//let isLoggedIn=1
//let isLoggedIn = ""   //false
let isLoggedIn = "Vivek" //True

let booleanIsLogged = Boolean(isLoggedIn) //boolean
console.log(booleanIsLogged)//True


//1=>true
//""=>false
//"Vivek"=>true


let someNumber = 33
let stringNumber = string(someNumber)
console.log(stringNumber) //33
console.log(typeof(stringNumber))//String 