const express= require('express');
const hbs= require('hbs');
const fs=require('fs');
var app=express();
hbs.registerPartials(__dirname+'/views/partials');
app.set('view engine','hbs');
//app.use(express.static(__dirname+'/views'));
app.use(express.static(__dirname+'/public'));

app.use((req,res,next)=>
{
    var now=new Date().toString();
    console.log('now',now,req.method,req.url);

    next();         //not having this makes your page to load slower

 

}
);
app.get('/',(req,res)=>
{
    res.render('index.hbs',
        {
            text1: 'Hi there this is KRITIKA',
            currentYear: new Date().getFullYear()
        }
    );
}
);

app.get('/about',(req,res)=>
{
    res.render('about.hbs',
    {
        pageTitle: 'ABOUT PAGE',
        currentYear: new Date().getFullYear()
    });
}
);

app.get('/bad',(req,res)=>
{
    res.send(
        {
            statusCode: 404,
            msg: 'Page not found'
        }
    );
});

hbs.registerHelper('getCurrentYear',()=>
{
    return new Date().getFullYear();
}
);

hbs.registerHelper('Screamit',(text1)=>
{
    return text1.toUpperCase();
}
);


app.listen(3000,()=>
{
    console.log('Server set up on port 3000');
}
);       // listen takes a port number say 3000