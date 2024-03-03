//****************------- nummbers and math --------*****************/

let score = 2000

let balance = new Number(100)


console.log(score,typeof(score));
console.log(balance , typeof(balance));


//number methods

let number = 10000
console.log(number.toFixed(3));    //decimal number

let number2 = 100000
console.log(number2.toLocaleString("en-IN"));     //convert number according to indian standard


let number3 = 121.32324 
console.log(number3.toPrecision(4));    // => 121.3  used to round off or significatn digits



//maths

console.log(Math.abs(-6));      //convert negative integer into positive
console.log(Math.round(4.2));   //used for roundoff
console.log(Math.ceil(2.2));
console.log(Math.floor(2.9));

console.log(Math.random());
console.log((Math.random()) * 10);
console.log(Math.floor(Math.random()*10));



let min = 10;
let max = 22;
console.log(Math.random() * (max - min +1));
console.log(Math.floor(Math.random() * (max - min + 1) ) + min)