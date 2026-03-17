function saymyname(){
    console.log("h")
    console.log("t")
    console.log("i")


}
function addtwonumbers(num1, num2){
    return num1 + num2;
}
saymyname(); // Output: h t i
const result = addtwonumbers(5, 10);
console.log(result); // Output: 15
function loginuser(username){
    return `Welcome ${username}! You have successfully logged in.`;

 
    }
    console.log(loginuser("gagan")); // Output: Welcome gagan! You have successfully logged in.
// when we do not pass anything in the function then it through undefine not null
 function appu(k){
    if(k === undefined){
        console.log("k is undefined");
    } else{
     console.log("abyy naam bolo ");
     return k;
 } 
}
 console.log(appu("")); // Output: k is undefined