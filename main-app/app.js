const express = require ('express');
const app = express (); 


//function
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34,


function isFibonacci  (num){
    let result = false ;
    let previousOne = 0 ;
    let previousTwo = 1;
    let current = previousOne+previousTwo;

    if(num === 0 ){
      result = true;
    }

    while (current <= num) {
  
        if (current === num) {
            result = true ;
        }
        console.log(current);
       
        previousOne = previousTwo;
        previousTwo =current ;
        current = previousOne+previousTwo;
  
    }
    console.log (result)
      return(result);
  }
console.log (isFibonacci(34));




app.get ("/" , (req,res)=>{
    res.send ("<h1> Welcome to Fibonacci sequence </h1> <br />  <h2> <a href='/1'>Start</a></h2>")
})

app.get ("/:id" , (req,res)=>{
    if(isFibonacci(parseInt(req.params.id) )) {
        res.send (`<h1> Number ${req.params.id} is a fibonacci number </h1> `)
    } else {
        res.send (`<h1> Number ${req.params.id} is not fibonacci number</h1>  `)
    }
    
})






app.listen (3000 , ()=>{
    console.log ("listening to port 3000")
})