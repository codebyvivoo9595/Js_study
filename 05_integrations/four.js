const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}


// for in loop
for (const key in myObject) {
    //console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    //console.log(programming[key]);
}
//In for in loop by default return the keys
//In for of loop by default return the values 


// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")

//Because the map is not iterable we can not do like this 

// for (const key in map) {
//     console.log(key);
// }

//Mostly used 
//Objects ==> for in loop 
//array ==> for of loop & other array specifc loop also we can use 