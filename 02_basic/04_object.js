// object {singleton}

const user1 = new Object()

// const user1 = {}
user1.name = "yadav"
user1.age = 15
user1.isLoggedIn = false

console.log(user1);


//object in object (nesting object)


const userInfo = {
    name : {
        fullName : {
            userid : "akash yadav"
        }
    }
}

console.log(userInfo.name.fullName.userid);

// merging two object

const obj1 = {1 : "a" , 2 : "b"}
const obj2 = {2 : "c" , 3 : "d"}

const obj3 = Object.assign({}, obj1 ,obj2)
console.log(obj3);