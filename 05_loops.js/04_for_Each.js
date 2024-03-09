// for each loop

const arr = ["python" ,"java", "javascript", "ruby","swift", "c","c#", "c++", "kotlin" ,"react", "r" ,"bhai lang"]

arr.forEach(function (item) {
    if(item.length >= 5){
        // console.log(item);
    }
        
})
arr.forEach(function (value ,index , arr) {
    // console.log(value,index,arr);
    
})


const myCodding =[
    {
        language : "javascript",
        file: "js"
    },
    {
        language : "python",
        file: "py"
    },
    {
        language : "ruby",
        file: "rb"
    },
    {
        language : "c++",
        file: "cpp"
    },
    {
        language : "hyper text markup language",
        file: "html"
    },
    {
        language : "cascsding style sheet",
        file: "css"
    }
]
myCodding.forEach((item) => {
    console.log(`language name :- ${item.language} , extension :- ${item.file}`);
})