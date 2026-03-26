// switch statement is used to perform different actions based on different conditions.
//  It is an alternative to using multiple if-else statements.
const day = 3;

switch (day) {
  case 1: // we can have string or number as case value
    console.log("Monday");  
    break;
    case 2:
    console.log("Tuesday");
    break;
    case 3:
    console.log("Wednesday");
    break;  
default:
    console.log("Invalid day"); 
    break;
// The break statement is used to exit the switch statement once a case has been executed.  
// If the break statement is omitted, the code will continue to execute the next case until it encounters a break or reaches the end of the switch statement.
// the code will execute the case for day 3 and then continue to execute the default case, 
// resulting in both "Wednesday" and "Invalid day" being printed to the console.
// if any of the cases match the value of day, 
// the corresponding code block will be executed and the break statement will prevent the execution of the remaining cases.
// if we sumaries whole switch statement,
//  it is a more efficient way to handle multiple conditions based on the value of a single variable,
// making the code more readable and easier to maintain compared to using multiple if-else statements.
// In this example, the switch statement checks the value of the variable day and executes the corresponding case block based on its value.




}

