const accountId = 1234567890; // if we want to change the value of accountId then it will give us an error because we have declared it with const keyword and const keyword is used to declare a variable that cannot be reassigned.
let accountName = "John Doe";// if we want to change the value of accountName then we can do it because we have declared it with let keyword and let keyword is used to declare a variable that can be reassigned.
var accountPassword = "password123";// we dont uses var keyword to declare a variable because it is function scoped and it can lead to bugs in our code but we can use it if we want to declare a variable that is function scoped.
accountCity = "New York"; // we can update the value of accountCity because we have not declared it with any keyword and it will be treated as a global variable but it is not recommended to use global variables because they can lead to bugs in our code and they can be accessed from anywhere in our code.
// to comment 
console.log(accountId);
accountPassword = "newpassword456";
accountCity = "Los Angeles";
console.log(accountId);
// if we need to print all thoese changes that we made will be done by making console.log but 
// we can make it more easier by suing the concept of console.table()
console.table({ accountId, accountName, accountPassword, accountCity });
/* ............. this is multiline comment 
prefer not to use var because of  issue in block scope and functional scope 
*/ 
// if we declare a varible and not assigned a value then its will be considered as undefine 
let quantity;
console.log(quantity); // it will print undefined because we have not assigned any value to quantity variable.