const name = "gagan"
const lastname = "pandey"
// string is a sequence of characters enclosed in single quotes, double quotes or backticks
console.log(name); // Output: gagan
console.log(lastname); // Output: pandey
// we can concatenate strings using + operator
const fullname = name + " " + lastname; 
console.log(fullname); // Output: gagan pandey  
 // latest practice is to use template literals (backticks) for string concatenation and interpolation
const fullname2 = `${name} ${lastname}`;
console.log(fullname2); // Output: gagan pandey
// we can also use template literals to create multi-line strings
const gamename = new String("gagan pandey"); // this is a string object created using the String constructor
console.log(gamename.length); // Output: 11
console.log(gamename.toUpperCase()); // Output: GAGAN PANDEY
console.log(gamename.toLowerCase()); // Output: gagan pandey
console.log(gamename.includes("pandey")); // Output: true
console.log(gamename.startsWith("gagan")); // Output: true
console.log(gamename.endsWith("pandey")); // Output: true   
console.log(gamename.indexOf("pandey")); // Output: 6
console.log(gamename.slice(0, 5)); // Output: gagan
console.log(gamename.replace("gagan", "krishhh")); // Output: krishhh pandey    
console.log(gamename); // Output: gagan pandey (original string is not modified because strings are immutable in JavaScript)
console.log(gamename.split(" ")); // Output: [ 'gagan', 'pandey' ] (split the string into an array of substrings based on the specified separator)
console.log(gamename.trim()); // Output: gagan pandey (remove whitespace from both ends of the string)  
console.log(gamename.charAt(0)); // Output: g (returns the character at the specified index)
console.log(gamename.charCodeAt(0)); // Output: 103 (returns the Unicode value of the character at the specified index) 
const newString =  gamename.substring(0, 5); // substring is similar to slice but it does not accept negative indices
console.log(newString); // Output: gagan
 const url = "https://www.example.com";
 console.log(url.replace("https", "http")); // Output: http://www.example.com (replace the first occurrence of "https" with "http")
 console.log(url.replace(/example/g, "mywebsite")); // Output: https://www.mywebsite.com (replace all occurrences of "example" with "mywebsite" using a regular expression with the global flag) 
 