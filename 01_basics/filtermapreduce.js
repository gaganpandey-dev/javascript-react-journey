const books = [
    {
        title: 'Book One',genre: 'Fiction' , publish : 1981,
        edition : 2004 
    },
    {
        title: 'Book two',genre: ' non-Fiction' , publish : 1981,
        edition : 2004 
    },{
        title: 'Book three',genre: 'History' , publish : 1981,
        edition : 2004 
    },{
        title: 'Book four',genre: 'Science' , publish : 1981,
        edition : 2004 
    },{
        title: 'Book six',genre: 'Fiction' , publish : 1981,
        edition : 2004 
    }
];

const userBooks =  books.filter( (bk) => bk.genre === 'History' )
//console.log(userBooks);
const userbooks = books.filter ( (bk) => { return  bk.publish >= 2000 && bk.genre ==="history"

})
console.log(userBooks);

  // here we have to understand array
   const myNumbers = [ 1,2,3,4,5,6,7,8,9,10]

   const newNums = myNumbers.map( (num) =>{  return num+10})

   console.log(newNums);
   //map collects them into a new array.
   /*map → Paint each apple red and give me a new basket of painted apples.

forEach → Just look at each apple and say its color, but don’t give me a new basket.

filter → Pick only the apples that are big.

reduce → Mash all apples together into one juice.*/
 const newNums2 = myNumbers.map( ( num) => num * 10)
                      .map((num) => num+ 1)
                      .filter((num) => num >= 40)
  console.log(newNums2);
/*The first map((num) => num * 10) works fine: it multiplies each number by 10 and returns a new array.

But then you wrote another .map() without giving it a callback function.
map always needs a function that tells it what to do with each element. If you leave it empty, JavaScript throws an error 
because it doesn’t know how to transform the array.
Readability: Each step is clear and separate.

Flexibility: You can apply multiple transformations in sequence.

Functional style: Keeps your code clean and avoids manual loops.



*/
 const array1 = [ 1, 2,3, 4 ];
 const initialValue = 0 ;
 const sumWithInitial  = array1.reduce (
    ( accumulator , currentValue) => accumulator + currentValue,
    initialValue 
 );
 console.log(sumwithinitial);
 
