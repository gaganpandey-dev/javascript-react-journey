"use strict"; // it is a directive that is used to enable strict mode in JavaScript and it helps us to write cleaner code and it also helps us to avoid some common mistakes in our code.
// data types in JavaScript
// there are 7 primitive data types in JavaScript and they are:
// 1. Number => 2 to power of 53
// 2. String  =>""
// 3. Boolean => true or false
// 4. Undefined => it is used to represent the absence of a value
// 5. Null => it is used to represent the absence of a value and it is also used to represent the intentional absence of any object value.
// 6. Symbol => unique 
// 7. BigInt => it is used to represent integers that are larger than 2 to power of 53 and it is denoted by adding n at the end of the number.
alert("Hello World"); // it is a function that is used to display an alert box with a message and an OK button.
//alert(3+4) we are using nodejs not browser to print to it willl so error here
 console.log(typeofundefined); // it will print undefined because we have not assigned any value to undefined variable.
console.log(typeof null);   // it will print object because null is considered as an object in JavaScript but it is actually a primitive data type and it is used to represent the absence of a value and it is also used to represent the intentional absence of any object value.
console.log(typeof Symbol("id")); // it will print symbol because Symbol is a primitive data type that is used to represent unique values and it is denoted by adding n at the end of the number.
console.log(typeof 1234567890n); // it will print bigint because BigInt is a primitive data type that is used to represent integers that are larger than 2 to power of 53 and it is denoted by adding n at the end of the number.       
