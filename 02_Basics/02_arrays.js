const Marvel_hero = ['thor','ironman','spiderman']
const Dc_hero = ['superman','flash','batman']

//Marvel_hero.push(Dc_hero)

//console.log(Marvel_hero);
//[ 'thor', 'ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]  
//It will take dc array as the another paramerter(array in side array) 

// console.log(Marvel_hero[3]);
// //[ 'superman', 'flash', 'batman' ]
// console.log(Marvel_hero[3][1]);//flash


//console.log(Marvel_hero.concat(Dc_hero));
//[ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]
//It will concat all the array 

//Spread operator 
const all_seprate_hero = [...Marvel_hero, ...Dc_hero]
console.log(all_seprate_hero);
//it will sepreate the all ex.glass futala tr kacha spred hotil

const anotherArray = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_anotherArray = anotherArray.flat(Infinity)
//flat(depth) - kiti level paryt dycha ahe  
console.log(real_anotherArray);
//[1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5 ]

console.log(Array.isArray("Vivek"));//false
console.log(Array.from("Vivek"));//[ 'V', 'i', 'v', 'e', 'k' ]
console.log(Array.from({name:"Vivek"}));//it will give empty array because we have to specify for what we have to make the array

let score1 = 100,score2=200,score3=300
const valarray = Array.of(score1,score2,score3)
console.log(valarray);
//[ 100, 200, 300 ]
//A set of elements to include in the new array object. Returns a new array from a set of elements.