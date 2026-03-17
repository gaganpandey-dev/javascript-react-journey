const balance = new Number(1000);// Number is a wrapper object for primitive number type in JavaScript
console.log(balance);
console.log(typeof balance); // Output: object (balance is an object because it is created using the Number constructor)
console.log(balance.toString().length);// Output: 4 (toString() method converts the number to a string and then we can check the length of the string)
console.log(balance.toFixed(2)); // Output: 1000.00 (toFixed() method formats the number to a specified number of decimal places)
console.log(balance.toExponential(2)); // Output: 1.00e+3 (toExponential() method formats the number in exponential notation with a specified number of decimal places)
console.log(balance.toPrecision(3)); // Output: 1.00e+3 (toPrecision() method formats the number to a specified length)


const hundred = 1000000;
console.log(hundred.toLocaleString()); // Output: 1,000,000 (toLocaleString() method formats the number according to the locale settings of the environment)
console.log(hundred.toLocaleString("en-US")); // Output: 1,000,000 (toLocaleString() method formats the number according to the specified locale)
//======================================================================================================
 // maths library
 console.log(Math.PI); // Output: 3.141592653589793 (Math.PI is a constant that represents the value of pi)
 console.log(Math.abs(-5)); // Output: 5 (Math.abs() method returns the absolute value of a number)
    console.log(Math.round(4.7)); // Output: 5 (Math.round() method rounds a number to the nearest integer) 
    console.log(Math.floor(4.7)); // Output: 4 (Math.floor() method rounds a number down to the nearest integer)
    console.log(Math.ceil(4.7)); // Output: 5 (Math.ceil() method rounds a number up to the nearest integer)
    console.log(Math.max(1, 5, 3)); // Output: 5 (Math.max() method returns the largest of zero or more numbers)
    console.log(Math.min(1, 5, 3)); // Output: 1 (Math.min() method returns the smallest of zero or more numbers)
    console.log(Math.random()); // Output: a random number between 0 (inclusive) and 1 (exclusive) (Math.random() method returns a random number between 0 and 1)
    console.log(Math.random() * 10); // Output: a random number between 0 (inclusive) and 10 (exclusive) (Math.random() method returns a random number between 0 and 1, so we can multiply it by 10 to get a random number between 0 and 10)
    console.log(Math.floor(Math.random() * 10)); // Output: a random integer between 0 (inclusive) and 10 (exclusive) (Math.random() method returns a random number between 0 and 1, so we can multiply it by 10 to get a random number between 0 and 10, and then we can use Math.floor() method to round it down to the nearest integer)
     const min  = 10 
     const max = 20
     Math.random()*(max - min) + min; // Output: a random number between 10 (inclusive) and 20 (exclusive) (Math.random() method returns a random number between 0 and 1, so we can multiply it by the difference between max and min to get a random number between 0 and the difference, and then we can add min to shift the range to the desired range)
// important note : Math.random() method is not suitable for cryptographic purposes because it is not a secure random number generator. For cryptographic purposes, we should use the crypto module in Node.js or the Web Crypto API in browsers.
//  