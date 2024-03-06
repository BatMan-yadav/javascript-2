//objects  {non-singleton}


//declaring objects

const mySym = Symbol("yadav")  //declaring symbol
const user = {
    name : "akash",
    [mySym] :"yadav",
    age : 17,
    "full name" : "akash yadav",
    gmail : "akash12mrt@gmail.com",
    isLoggedIn : false,
    loginDays : ["monday", "tuesday" ,"sunday"]
}

// acessing objects

console.log(user.name);      // not a good way
console.log(user["name"]);
console.log(user["full name"]);
console.log(user[mySym]);         // way to print symbol in objects

// printing full objects

console.log(user);


// changing the value of key in object

user.gmail = "akashyadav121mrt@gmai.com"
console.log(user);

// if we have make sure that value of keys does not change in objects


Object.freeze(user)   // now it will frezze
user.gmail = "yadav132@gmail.com"
console.log(user);



