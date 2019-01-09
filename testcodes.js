const express= require('express');

var app=express();

app.get('/',(req,res)=>
{
    res.send('hello');
}
);

app.get('/about',(req,res)=>{
 res.send({
     name: 'xyz',
     pincode: 403601
 })
});

app.listen(3000,()=>
{
    console.log('Server set up on port 3000');
}
);       // listen takes a port number say 3000