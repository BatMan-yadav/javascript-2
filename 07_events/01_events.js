const btn = document.querySelector("#btn")
function random(){
     let code =   Math.floor((Math.random() * (255 - 1 +1) ))  
     return code   
}
function colorGenerator( ){
    let cc = `rgb(${random()},${random()},${random()})`
    return cc
}


btn.addEventListener("mouseout" ,function colorChanger(){
    const body = document.querySelector("body")
    body.style.backgroundColor = colorGenerator()
})