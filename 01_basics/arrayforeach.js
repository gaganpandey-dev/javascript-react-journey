/*const  programing =["js" , "rb" , "py" , "java" , "cpp"]
 for (const key in programing ) {
     console.log(key);
 }  

 // for in loop se key aya hai aur arrays ka default key hota hai 0, 1,... ye sab 
 // lakin map me hm apna keyset kr akte hai 
  //. laga ke hmsare function ko access kr skte hai 
  coding.forEach(element => {
    
  });
   // to write  function we have syntax llike  
   //  function name() {  here we define the function             } 
   // to make callback function we remove name and put parmaeter inside () 
   // function  (val){   console.log (val); }



   // to write it as arrow function  we write same but 
   /* coding .foreach( (item) => {
    console.log(item);

      };           after decalring function we pass it refrence when we need to use is  simply passing the function name inside 
           console.log(item)
         coding .foreach( (item , index , arr)=>{
             console.log (item ,index , arrr)})   
           */
          const myCoding = [
            {
            
            
            languagename: "javascript",
            languagefilename : "js"

            },

            {
                languagename : "java" ,
                languagefilename: "java"
            } ,

          ] 
           myCoding.forEach (( item) => {


            console.log(item.languagename) // yaha pe hm array me ho bhi unka separate access le skte hai 

           })
           // phle hmne ek array define kiya hai fir us array ander jo object hai hmko unka access kasie lena hai 
     
           
           //  for array Foreach implementation we will get to know heere that foreach does not return any values

            const coding =[ "js","c","python","java" ]
             const values = coding.forEach( (item) => {
                return item
             })
             console.log(values); // here in output the return will not give as anything if we console.log then it will be goood

               