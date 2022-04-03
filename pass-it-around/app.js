const express = require ('express');
const app = express();





app.get ('/',(req,res)=>{
    res.send(
    " <fragment> <h1>welcome </h1> <br /> <h1> <a href = '/99'> start </a></fragment> </h1> ")
})

app.get('/:id' , (req,res)=>{


    if(req.params.id != 0 ){
        
    res.send (`<a href = ${req.params.id -1}> <h1>there are ${req.params.id} in the wall take one pass it around </h1></a>`)
    } else {
        res.send ("<h1><a href ='/'> start over</a><h1>")
    }
})


app.listen(8000, ()=>{
    console.log ("listening to port 8000");
})