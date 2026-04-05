const clock = document.getElementById('clock')
//  const clock= document.querySelector('#clock')


//setInterval(function(){},1000)    // very important to know this how to use it 
 setInterval (function(){
    let date = new Date();
//console.log(date.toLocaleTimeString());
     
   clock.innerHTML = date.toLocaleDateString();

 } , 1000);