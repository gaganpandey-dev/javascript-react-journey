let someNumber = 33;
let stringNumber = String(someNumber); 
console.log(stringNumber); // it will print "33" because we have converted the number 33 to a string using the String() function.
console.log(typeof stringNumber); // it will print "string" because we have converted the number 33 to a string using the String() function.    

let str1 = "Hello";
let str2 = "World";
let str3 = str1 + " " + str2; // it will concatenate the two strings and it will print "Hello World"
console.log(str3);
console.log("1" + 2); // agar phle hmne string liya hai toh pura as a string hi concat hoga 
console.log("1" + 2 + 2); // it will print "122" because the + operator is left associative and it will first concatenate "1" and 2 to get "12" and then it will concatenate "12" and 2 to get "122"
console.log(1 + 2 + "1"); // it will print "31" because the + operator is left associative and it will first add 1 and 2 to get 3 and then it will concatenate 3 and "1" to get "31"

console.log(true + true); // it will print 2 because true is treated as 1 in numeric context and false is treated as 0 in numeric context
console.log(true + false); // it will print 1 because true is treated as 1 in numeric context and false is treated as 0 in numeric context
console.log(false + false); // it will print 0 because true is treated as 1 in numeric context and false is treated as 0 in numeric context
 


// type conversion
let num1 = 10;
let num2 = "20";
let result = num1 + Number(num2); // it will convert the string "20" to a number 20 and then it will add 10 and 20 to get 30
console.log(result); // it will print 30    
let strNum1 = "10";
let strNum2 = "20";
let strResult = Number(strNum1) + Number(strNum2); // it will convert the strings "10" and "20" to numbers 10 and 20 and then it will add 10 and 20 to get 30
console.log(strResult); // it will print 30     
  console.log(null>0); // it will print false because null is treated as 0 in numeric context and 0 is not greater than 0
  console.log(null==0); // it will print false because null is only equal to undefined and it is not equal to 0
  console.log(null>=0); // it will print true because null is treated as 0 in numeric context and 0 is greater than or equal to 0       
  console.log(undefined>0); // it will print false because undefined is treated as NaN in numeric context and NaN is not greater than 0 
  console.log(a===b); //check both value and type 
  // ===  strict equality operator checks for both value and type. It returns true if both operands are of the same type and have the same value, otherwise it returns false. In this case, since a and b are not defined, it will throw a ReferenceError.
   