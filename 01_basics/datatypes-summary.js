// primitive


// 7 types : String ,Number ,Boolean ,Null ,Undefined ,Symbol ,BigInt


 // reference types (non-primitive ) : Object , Array , Function
   // what is dynamically typed language : we can change the type of value stored in a variable
   // example 
   let x = 10; // x is a number
   x = "Hello"; // now x is a string
   console.log(x); // Output: Hello 
    // in JavaScript we can use typeof operator to check the type of a variable
    console.log(typeof x); // Output: string 
    // what is statically typed language : we cannot change the type of value stored in a variable
    // example in Java : 
    // int x = 10; // x is a number 
    // so javascript is a dynamically typed language because we can change the type of value stored in a variable
     const id = Symbol("id"); // Symbol is a unique and immutable primitive value that can be used as a key for object properties
     const anotherId = Symbol("id");
     console.log(id === anotherId);
        // Output: false because each Symbol is unique even if they have the same description

        // Arrays ,objects and functions  example
        const heros =["saktiman", " krishhh"]; // bracket dhyan me rkhna hai 
          let myobject ={
            name : "Gagan Pandey",
            age : 25,
            city : "Gorakhpur"

          }  // object is a collection of key-value pairs
  const myFunction = function() {
    console.log("Hello World");
  } // function is a block of code that can be executed when called 
  console.log(typeof heros); // Output: object
  console.log(typeof myobject); // Output: object           
    console.log(typeof myFunction); // Output: function

//=============================================================================================
 // stack ( primitive types ) and heap ( reference types ) memory in JavaScript
 // primitive types are stored in stack memory because they have a fixed size and are accessed directly
 // reference types are stored in heap memory because they can have a variable size and are accessed indirectly through a reference (pointer) to the memory location where the data is stored   
  let my