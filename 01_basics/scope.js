


function one(){
    const username = "gagan";
    function two(){
        const name = "pandey";
        console.log(username); // prints "gagan"
    }
    two(); // call the inner function
}

one(); // prints "gagan"
console.log(one()); // prints "gagan" then undefined
//***********************************************************************************************************
// kuch badhiya chizz hai function ke baare me  */

function addone(num1){
    return num1 + 1
}
 

addone(5); // Output: 6
 // now this is called function decalration

 const addtwo = function(num1){
    return num1 + 2;
    }
addtwo(5); // Output: 7
// this is called function expression because we are assigning a function to a variable
