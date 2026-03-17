function calculateCartPrices(prices) {
    return prices
}
console.log(calculateCartPrices(10, 20, 30)) // yha pe 3 values passs krne pe keval phla hi value bs print krega 
// Output: 10 (when we pass multiple arguments to a function, only the first argument is considered and the rest are ignored. So in this case, only the first value 10 is passed to the function and the rest 20 and 30 are ignored, hence the output is 10)
 // so we will use rest parameter to get all the values passed to the function as an array
function calculateCartPrice(...price) {
    return price;
}   
console.log(calculateCartPrice(10, 20, 30)) // Output: [10, 20, 30] (when we use rest parameter, all the values passed to the function are collected into an array, so in this case, the output is an array containing all the values passed to the function)  

const prices = [10, 200, 30];
const array =[10, 20, 30]
function returnsecondvalue(getarray){
    return getarray[1];
}
console.log(returnsecondvalue(array)); // Output: 20 (when we pass an array to a function, we can access the individual elements of the array using their index. In this case, we are accessing the second element of the array which is 20, hence the output is 20)
console.log(returnsecondvalue(prices)); // Output: 20 (when we pass an array to a function, we can access the individual elements of the array using their index. In this case, we are accessing the second element of the array which is 20, hence the output is 20)   
