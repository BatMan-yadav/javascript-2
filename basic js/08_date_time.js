// date 

let mydate = new Date()
console.log(mydate);
console.log(mydate.toString());               // day month dd yyyy   hh:mm:ss timezone
console.log(mydate.toDateString());           // day month dd yyyy 
console.log(mydate.toISOString());            
console.log(mydate.toJSON())                 
console.log(mydate.toLocaleDateString());    /* mm/dd/yyyy */    
console.log(mydate.toLocaleString());       /*  mm/dd//yyyy hh:mm:ss pm/am  */



// creating our own date



let myPerDate = new Date(2023,11,4)
console.log(myPerDate.toDateString());