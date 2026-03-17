const user ={
    username: 'gagan',
    price: 100,
    getPrice: function(){
      //  return this.price; // this keyword refers to the current object, in this case, it refers to the user object
     console.log(`Price: ${this.username}`); // Output: {username: 'gagan', price: 100, getPrice: ƒ} (this refers to the user object)    

    }
}
  console.log( user.getPrice()); 

  // Output: Price: gagan (when we call the getPrice method on the user object, the this keyword inside the method refers to the user object, so it accesses the username property of the user object and prints it)
 /* const chai = function(){
    let username = "gagan";
    console.log(`Price: ${this.username}`); // Output: Price: undefined (when we call the chai function, the this keyword inside the function does not refer to any object, so it is undefined)
  }*/

    // now with the help of arrow function we can solve this problem because arrow functions do not have their own this keyword, they inherit the this value from the enclosing scope (the scope in which they are defined)
  const chai = () => {
    let username = "gagan";
    console.log(`Price: ${this.username}`); // Output: Price: gagan (when we call the chai function, the this keyword inside the function refers to the enclosing scope, which is the global scope in this case, so it accesses the username variable defined in the global scope and prints it)
  }
 // if we explain arrow function in simple words then we can say that arrow functions are a shorter syntax for writing functions in JavaScript. 
 // They are also known as "fat arrow" functions because of the => syntax used to define them.
 //  Arrow functions do not have their own this keyword, they inherit the this value from the enclosing scope (the scope in which they are defined). 
 // This makes them useful for writing concise and more readable code, especially when working with callbacks and higher-order functions.
 chai();

 const addthree = (num1, num2, num3) => {
    return num1 + num2 + num3;
 }  
 console.log(addthree(1, 2, 3)); // Output: 6 (when we call the addthree function with the arguments 1, 2, and 3, it returns the sum of those numbers, which is 6)
 // if we have only one parameter in the arrow function then we can omit the parentheses around the parameter
 
 // if we remove the parentheses around the parameter then it will work fine but
 //  if we have more than one parameter then we need to use parentheses around the parameters
  const addtwo = (n1, n2) => (n1 + n2); //when we donot put curlybraces we do not need to return the value because it is implicit return in arrow function
  console.log(addtwo(1, 2)); // Output: 3 (when we call the addtwo function with the arguments 1 and 2, it returns the sum of those numbers, which is 3)
   // now to discuss what is implicit return in arrow function, 
   // it means that when we have only one expression in the arrow function, we can omit the curly braces and the return keyword,
   //  and the value of that expression will be returned automatically.
myArray.forEach(element => {
  
});