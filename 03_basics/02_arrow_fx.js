// arrow  function and this  keyword

const obj1 = {
    username : "akash",
    age : 12,
    printMsg : function(){
        console.log(`${this.username} welcome to our beautifull website`);
    }
}

// console.log(obj1.printMsg());

obj1.printMsg()



//+++++++++ arrow function


const laddar = (x,y) => {
    return x+y
}
console.log(laddar(23,56))

const gaddi = (x,y) => (x+y)
console.log(gaddi(34,56));