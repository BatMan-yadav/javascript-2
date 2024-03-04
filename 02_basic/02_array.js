// more array methods
// merging two arrays
let myArr1 = ["batman", "superman","flash"]
let myArr2 = ["ironman","hulk","doctorStrange"]

console.log(myArr1.concat(myArr2));  

// merging two or more than two array

let myArr3 = [...myArr1,...myArr2]
console.log(myArr3);

// to check whether the other datatype is array or not

let name2 = "yadav"
console.log(Array.isArray(name2));


//converting other datatype into an array

let name = "akashyadav"
console.log(Array.from(name));


let marks1 = 22
let marks2 = 78
let marks3 = 45
console.log(Array.of(marks1,marks2,marks3));

