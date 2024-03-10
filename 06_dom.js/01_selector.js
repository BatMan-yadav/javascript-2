// selectors

const temp1 = document.getElementsByClassName("bg-black")
const temp2  = document.getElementsByTagName("h1")
const temp = document.getElementById("title")
temp.style.padding="20px"
temp.style.backgroundColor="orange"
temp.style.color="red"


console.log(temp.innerText)    //it provide onlu inner text
console.log(temp.textContent)  // it provide all text including hidden text
console.log(temp.innerHTML)    // it provide inne html 


// query selectors

const qs = document.querySelector("h2")    // select only first element 
console.log(qs);

const temp6 = document.querySelector("ul")
let changeColor = temp6.querySelector("li")
changeColor.style.backgroundColor = "aquamarine"
changeColor.style.padding="20px"
changeColor.style.width ="200px"

let sele = document.querySelectorAll("li")
console.log(sele);
//sele[1].style.color="pink"

sele.forEach( (element)=>{
    //return element.style.color="brown"
})

const classSele = document.getElementsByClassName("list-items")
console.log(classSele);                                                 // now it will give html collections
console.log(Array.from(classSele));
const myArr = Array.from(classSele)
myArr.map((item)=>{
    item.style.color="orange"
    item.style.backgroundColor = "white"
   
})

