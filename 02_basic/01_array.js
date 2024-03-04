//arrays

//declaring
const myArr = [1,2,3,4,99,55,6,]
console.log(myArr[2]);                  //print member at index 2
console.log(myArr);                     // will print whole array


/// arrays method
 
myArr.push(88)                         //will add new wlmwnt at end of the array
console.log(myArr);            

myArr.pop()                            //will delete last element of the array
console.log(myArr);

myArr.unshift(1)
console.log(myArr);                    // will add new element at last

myArr.shift()
console.log(myArr);                    // will remove first element of the array

console.log(myArr.includes(99));       // will give true/false according to existece of the element
console.log(myArr.indexOf(55));        //will give index of the given number


let myArr2 = myArr.slice(0,4)         // will return of the copy of the array member a.t range 
console.log(myArr2);
console.log(myArr);


let myArr3 = myArr.splice(0,4)      //same as slice but also manipulate the old array  aand also include range
console.log(myArr3);                  
console.log(myArr);
