// for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

//for of loop madhe condition & increment decrement karav lagat nahi 
for (const num of arr) {
    //console.log(num);
}

const greetings = "Hello world!"
for (const greet of greetings) {
    //console.log(`Each char is ${greet}`)
}

// Maps

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")


// console.log(map);
//Map always give the unique value (no duplicate entry)
//Map maintain the order 

//How we can extract the value from Map
//     array destructure
for (const [key, value] of map) {
    // console.log(key, ':-', value);
}

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}
//Object are not iterable when we use like map 
//Objects iterate in different way 

//So this kind of value extraction only used for Map 
// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
    
// }