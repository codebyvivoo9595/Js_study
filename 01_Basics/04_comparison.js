// comparision geting true false values 
// console.log(2>1);
// console.log(2<1);
// console.log(2>=1);
// console.log(2<=1);
// console.log(2==1);
// console.log(2!=1);

// //Automatic convertion into int 
// console.log("2">1);//True 
// console.log("02">1);// True 

// console.log(null > 0 );//false
// console.log(null == 0);//false 
// console.log(null >= 0);//true

// the reason is that an equality check == and compariosn <> <= >= works differently 
// Comparion convert null to a number, trating as a 0. That why (Equality case) null >= 0 gives true  and(compariosion case) null > 0 false 


// console.log(undefined == 0); //false 
// console.log(undefined > 0); //false 
// console.log(undefined < 0); //false 
// console.log(undefined <= 0); //false 

//Strict check 

console.log("2" == 2); //True -  datatype conversion hoil ani value int convert houn 

console.log("2" === 2); //false - ethe datatype conversion nahi honar ajun data type check hoil value barobar 







