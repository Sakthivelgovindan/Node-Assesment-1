

//SetTimeout
// setTimeout(function() {   
//     console.log("setTimeout: Hey! 3000 millisecond completed!..");  
// }, 3000);  


// //Setinterval
// setInterval(function() {  
//     console.log("setInterval: Hey! 2000 millisecond completed!..");   
// }, 2000);


var i = 0;
//Function
function welcome () {  
    i= i + 1;
    console.log("Welcome to JavaTpoint!");  

    if(i==5){
        clearInterval(id2); 
    }
}  
  
//setTimeout  
// var id1 = setTimeout(welcome,1000);  

//setInterval
var id2 = setInterval(welcome,2000); 

//Clear Timeout
// clearTimeout(id1); 

//Clear Interval
// clearInterval(id2);  