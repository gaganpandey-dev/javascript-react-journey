// Dates in JavaScript
// Date is a built-in object in JavaScript that represents a single moment in time
const now = new Date(); // create a new Date object representing the current date and time
/*console.log(now); // Output: current date and time
console.log(now.toString()); // Output: current date and time in a human-readable format
console.log(now.toISOString()); // Output: current date and time in ISO 8601 format
console.log(now.getFullYear()); // Output: current year
console.log(now.getMonth());  // Output: current month (0-11, where 0 is January and 11 is December)
console.log(now.getDate()); // Output: current day of the month (1-31)
console.log(now.getHours()); // Output: current hour (0-23)
console.log(now.getMinutes()); // Output: current minute (0-59)
console.log(now.getSeconds()); // Output: current second (0-59)
console.log(now.getTime()); // Output: number of milliseconds since January 1, 1970 (Unix epoch time)
// we can also create a Date object by passing a date string or a timestamp
const dateString = "2022-01-01T00:00:00Z"; // ISO 8601 date string representing January 1, 2022 at 00:00:00 UTC
const dateFromISOString = new Date(dateString);*/
console.log(Date.now()); // Output: current timestamp in milliseconds since January 1, 1970 (Unix epoch time) (Date.now() method returns the current timestamp in milliseconds  
// now to customize local string we can do various customizations
new Date.toLocaleString('default',
    {weekday: 'long'}); // Output: current date and time in New York timezone formatted according to US English locale
