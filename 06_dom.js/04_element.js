//not recommended
// function addLanguage(language)

// {
//    let createLi = document.createElement("li")
//    createLi.innerHTML = `${language}`   
//    document.querySelector(".language").appendChild(createLi)
// }
function addOptiLanguage(language){
    const li = document.createElement("li");
    li.appendChild(document.createTextNode(language))
    document.querySelector(".language").appendChild(li)

}
addOptiLanguage("ruby")
addOptiLanguage("python")
addOptiLanguage("swift")
addOptiLanguage("c++")
addOptiLanguage("c")
addOptiLanguage("c#")
addOptiLanguage("java")
addOptiLanguage("kotlin")
addOptiLanguage("html")
addOptiLanguage("css")
addOptiLanguage("r")
addOptiLanguage("golang")
addOptiLanguage("bhailang")