// functions

// function _function_name(){
//     code 
//     function def
// }


// first functions

//defining a function
function say_my_name(){

    console.log("you are akash yadav");
}

//calling a functions
say_my_name //function refrence 
say_my_name()


//function to add two number

function sum(a,b){
 return a + b
}

x = 10
y = 20


console.log(sum(x,y));   // first way
 
const result = sum(x,y)   //second way
console.log("sum of two given numbers = ",result);    


function logginMessage(username){
    return `${username} sucessfully login`
}
let userN  = "akash"
console.log(logginMessage(userN));


// objects and function

function object_info(object_){
return `your username ${object_.username} and your passwords is ${object_.pass}`
}

const obj02 = {
    username : "akash21333",
    pass : "akash121MRT@"
}

let result02 = object_info(obj02)
console.log(result02); 