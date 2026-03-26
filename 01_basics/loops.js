// break and continue
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    break; // this will exit the loop when i is equal to 5
  }
  console.log(i);
}   
// Output: 0 1 2 3 4
  // loops using variable injections
for (let i = 0; i < 5; i++) {
  console.log(`The value of i is: ${i}`); // this will print the value of i in each iteration of the loop
}   

// Output: The value of i is: 0
  // break and continue  are two condition use to end loop , break immdiately exit the loop and
  //  continue will skip the current iteration and move to the next iteration of the loop.
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    continue; // this will skip the current iteration when i is equal to 5 and move to the next iteration
  } 
   console.log(i); // Output: 0 1 2 3 4 6 7 8 9    
}
   



// while loop
let j = 0;
while (j < 5) {
    console.log(`The value of j is: ${j}`);
    j++;
}
// Output: The value of j is: 0
   


// do while loop
let k = 0;  
do {
    console.log(`The value of k is: ${k}`);
    k++;
} while (k < 5);
// Output: The value of k is: 0
 // the key main differnce between do and do while loop is that in do while loop the code inside the loop will be executed at least once even if the condition is false because the condition is checked after the code is executed, whereas in while loop the condition is checked before the code is executed so if the condition is false then the code inside the loop will not be executed at all.
   



  let myArray = ["flash", "ironman", "saktiman", "powerman", "jaatuman"];
  let arr = 0;
  while (arr <myArray.length) {
    console.log(`The value of myArray[${arr}] is: ${myArray[arr]}`);
    arr++; // arr +1
  }
   