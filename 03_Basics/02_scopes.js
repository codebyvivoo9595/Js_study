//var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("Block Scope: ", a);
    
}



// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

     two()

}

// one()
//Child function can acess the parent data 


if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++

// Ethe pahile call karu shakto 
// console.log(addone(5))

// function addone(num){
//     return num + 1
// }


//Hosting Concept
// variable declaration cya pahila apan value access karyla bagtoy
addTwo(5)
// const addTwo = function(num){
//     return num + 2
// }