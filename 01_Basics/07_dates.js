//Date

/*
let mydate = new Date();
console.log(mydate);
//2024-12-25T12:08:00.034Z
console.log(mydate.toString());
//Wed Dec 25 2024 12:10:46 GMT+0000 (Coordinated Universal Time)
console.log(mydate.toISOString());
//2024-12-25T12:10:46.837Z
console.log(mydate.toDateString());
//Wed Dec 25 2024
console.log(typeof(mydate));//Object 
console.log(mydate.toLocaleString());
//12/25/2024, 12:13:01 PM
console.log(mydate.toLocaleDateString());
//12/25/2024

*/


//----------------------------------------

/*
//Date in specific format 1
let createDate = new Date(2023,0,23)
console.log(createDate);
//2023-01-23T00:00:00.000Z
console.log(createDate.toDateString());
//Mon Jan 23 2023
console.log(createDate.toLocaleString());
//1/23/2023, 12:00:00 AM

*/


//--------------------------------------------
//Date in specific format 2

// let newDate = new Date(2000,3,12,12,12,5)
/*
Date(year: number, monthIndex: number, date?: number, hours?: number, minutes?: number, seconds?: number, ms?: number): Date
*/

/*
console.log(newDate);
//2000-04-12T12:12:05.000Z
console.log(newDate.toDateString());
//Wed Apr 12 2000
console.log(newDate.toLocaleString()); 
//mm/dd/yy :hh?/mm?/ss?
//4/12/2000, 12:12:05 PM 
console.log(newDate.toLocaleDateString());
//mm/dd/yyyy
//4/12/2000

//getMonth()
//getDay()
//getMonth() + 1 

*/

//-------------------------------------
/*
//Time Stamps

let myTimeStamp = Date.now()
console.log(myTimeStamp);
//Total time in Ms - Milli seconds
console.log(createDate.getTime());
//it will give time in miliseconds 
//1674432000000

//We want the value date of time in miliseconds to Seconds 
console.log(Math.floor(Date.now()/1000));//1735129872
console.log(Math.floor(createDate.getTime()/1000));
//1674432000

*/

//-----------------------------------------

//Even we can define the properties also 
let todaysDate = new Date().toLocaleString('default',{
    weekday:"long"
})

console.log(todaysDate);//Wednesday







