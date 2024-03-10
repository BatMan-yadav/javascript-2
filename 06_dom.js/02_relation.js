const container = document.querySelector(".parent")
// console.log(container);

for (let i = 0; i < container.children.length ;i++) {

    //console.log(container.children[i].innerHTML);
    container.children[i].style.backgroundColor= "#003566"
    container.children[i].style.fontSize="25px"
    container.children[i].style.width="200px"
    container.children[i].style.margin="90px"
    container.children[i].style.padding="15px"
    container.children[i].style.paddingLeft="30px"
    container.children[i].style.borderRadius="10px"
    container.children[i].style.boxShadow="0px 0px 40px #ffc300"    
}


console.log(container.firstElementChild.textContent);
console.log(container.lastElementChild.textContent);


// to find parent of element

const days = document.querySelectorAll(".day")
console.log(days[2].parentElement.innerHTML);
console.log(days[2].parentNode);


console.log(days[2].nextElementSibling.textContent);
console.log(days[2].previousElementSibling.textContent);


console.log("nodes", container.childNodes);
