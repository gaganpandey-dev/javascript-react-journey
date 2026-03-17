// array
// an array is a collection of items stored at contiguous memory locations. It can hold multiple values of different data types.
// we can create an array using square brackets [] and separate the items with commas
const numbers = [1, 2, 3, 4, 5,"hello", true, null, undefined, {name: "gagan"}, [1, 2, 3]]; // this is an array that contains numbers, a string, a boolean, null, undefined, an object and another array
console.log(numbers);
console.log(typeof numbers); // Output: object (arrays are a type of object in JavaScript)
console.log(Array.isArray(numbers));
// we can access the items in an array using their index (starting from 0)
console.log(numbers[0]); // Output: 1 (access the first item in the array)
console.log(numbers[5]); // Output: hello (access the sixth item in the array)
console.log(numbers.length); // Output: 11 (length property returns the number of items in the array)
// we can also use array methods to manipulate the array
numbers.push(6); // push() method adds an item to the end of the array
console.log(numbers); // Output: [1, 2, 3, 4, 5, "hello", true, null, undefined, {name: "gagan"}, [1, 2, 3], 6]
numbers.pop(); // pop() method removes the last item from the array
console.log(numbers);
numbers.unshift(0); // unshift() method adds an item to the beginning of the array
console.log(numbers); // Output: [0, 1, 2, 3, 4, 5, "hello", true, null, undefined, {name: "gagan"}, [1, 2, 3]]
numbers.shift(); // shift() method removes the first item from the array
console.log(numbers);   // Output: [1, 2, 3, 4, 5, "hello", true, null, undefined, {name: "gagan"}, [1, 2, 3]]
numbers.splice(5, 1);
// slice and splice are two different methods in JavaScript that are used to manipulate arrays.
//  The main difference between them is that slice() method returns a new array containing a portion of the original array, while splice()
//  method modifies the original array by adding or removing items from it.
