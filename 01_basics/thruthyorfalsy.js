const userEmail = "gagan790@gmail.com";

if (userEmail) {
  console.log("You have an email");
}   else {
  console.log("You don't have an email");
}   
// in above code we are checking if userEmail has a value or not
// if userEmail has a value then it is considered as truthy and the code inside if block will be executed
// if userEmail is empty string or null or undefined then it is considered as falsy and the code inside else block will be executed 
// in JavaScript, there are 6 falsy values: false , -0 , BigInt ,0, "", null, undefined, and NaN.
// all other values are considered as truthy.     

// "0" is a truthy value because it is a non-empty string, even though it represents the number zero.
if ("0") {
  console.log("This is a truthy value");    
} else {
  console.log("This is a falsy value");
}   

// if (userEmail.length === 0   ) {
//  console.log("You don't have an email"); 
// } else {
//  console.log("You have an email");
// }
 // here === is used to compare the value and type of userEmail.length with 0
 // == is used to compare only the value of userEmail.length with 0 and it will return true if the value is 0 or "0" or false or null or undefined or NaN because all these values are considered as falsy in JavaScript.   
   const loggedInuser = false;
   const loggedInuser1 = true;
    if  ( userloggedIn && loggedInuser1 && 2==3 ) 

        { console.log("You are logged in");
    } if (loggedInuser || loggedInuser1 || 2==3) {
        console.log("You are not logged in");
    }
      // here is && is used to check if all the conditions are true then only the code inside if block will be executed
      // here is || is used to check if any of the conditions are true then the code inside if block will be executed   

      // NULLish coalescing operator (??) is used to provide a default value when the left-hand side operand is null or undefined.
      // it returns the right-hand side operand when the left-hand side operand is null or undefined, otherwise it returns the left-hand side operand.
    let val1 ;
    val1 = 5 ?? 10; // here val1 is undefined so it will return 10
    console.log(val1); // Output: 10 

    // it is important to note that the nullish coalescing operator (??) only considers null and undefined as nullish values,
    // it does not consider other falsy values like 0, "", false, NaN as nullish values. 
    let val2 = 0 ?? 10; // here val2 is 0 so it will return 0 because 0 is not null or undefined
    console.log(val2); // Output: 0 
    // this is used when in case we want to provide a default value for a variable that might be null or undefined, but we want to allow other falsy values like 0 or "" to be considered as valid values.  
     // complex function in  js is also considered as truthy value because it is an object and all objects are considered as truthy in JavaScript.
       