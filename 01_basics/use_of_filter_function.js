const myNames =[ 1,2,3,4,5,6,7,8,9,10]
 const newNums = myNums.filter( (num) => {
    num >4

 })
    console.log (newNums)


    // their is basic knowledge that when we need to write return  , it is like when we put parenthesis we declare the scope so in order to get the output as return we need to write return word 
    // implcit function function no need to return keyword to return 
    // const add =(a,b) => a+b;
    //here when we do console and passs our value inside the () function we will get the output 

// but here const add = ( a+b)=>{ return a+b ;};

    //  now here we have put parenthesis so we need here to  to write return to tell the function we have to return what 
    /*When you used forEach, you didn’t need return because you were just running console.log for each item. You weren’t trying to give back a value from the function — just performing an action.

But if you were using something like map, which creates a new array from the return values, then return becomes essential:

javascript
const myCoding = [
  { languagename: "javascript", languagefilename: "js" },
  { languagename: "java", languagefilename: "java" }
];

const names = myCoding.map((item) => {
  return item.languagename; // must return here
});

console.log(names); // ["javascript", "java"]
🔑 Easy Rule of Thumb
No {} → automatic return (good for short one-liners).

With {} → must use return if you want to send back a value.

Use return when you want the function to produce a result, not just perform an action.*/
const newNum1 =[]

myNums.forEach( (num) => {
    if (num >4)
    {
        newNums.push(num) // if num is greater than 4 then push num
    }
})

myNames.forEach

console.log(newNum1);
// alternative of this code in short 
/* const newNums = myNums.filter ( (num) =>{
              return num >4
              } )  */
             