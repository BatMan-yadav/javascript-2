// filter map and reduce

const num = [1,2,4,5,6,7,8,9,23]
let num1= num.filter((item) => {
    return item > 4
})
console.log(num1);


//reduce


const arrTotal = num.reduce( (acc ,cum) => {
    console.log(`acc : ${acc} cum : ${cum}`);
    return acc + cum

} , 0)
console.log(arrTotal);