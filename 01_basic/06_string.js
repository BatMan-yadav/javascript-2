//string concatenation
//1 method
const name = "akash"
let gmail = 121
let gmail2 = "@gmail.com"
console.log(name + gmail + gmail2)


//2nd method recommended
console.log(`gmail of user is ${name}${gmail}${gmail2}`)

// stings method
let value = "akash yadav"
console.log(value.charAt(2))        //find chararter at index 2
console.log(value.indexOf('a'))     //find the index of first "a"
console.log(value.toUpperCase())    //convert string into uppercase
console.log(value.toLowerCase())    //convert string into lowercase

let newValue = value.substring(4,7)     //substring(start_value ,end_value) start with index 4 and end with (7-1 = 6) index
console.log(newValue)

const new2Value = value.slice(0,-1)    //same as substring but it can take paramerter in negative indecies also 
console.log(new2Value);

//trim

let anotherString = "    akash    "
console.log(anotherString)
console.log(anotherString.trim());
console.log(anotherString.trimEnd());
console.log(anotherString.trimStart());

//replace

let url = "https://www.akashyadav.com/20%contactinfo"
console.log(url.replace('20%', "-"));                         //replace(search, replace)

console.log(url.includes("akashyadav"));                 // true => present
console.log(url.includes("akashkumar"));                 // false => not present



let vari = "akash-kumar-yadav,ahir,rao,yaduvanshi"
console.log(vari.split("-"));         //used to split on the base of giving character


