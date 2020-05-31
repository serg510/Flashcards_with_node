const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser());
// colors array to print out on card
// const colors = [
//     'red',
//     'orange',
//     'yellow',
//     'green',
//     'blue',
//     'purple'
//   ];

app.set('view engine','pug');

//using middleware
app.use((req,res,next)=>{
    req.message = 'This message made it!'
    next();
});
app.use((req,res,next)=>{
    console.log(req.message)
    next();
});



app.get('/',(req,res) => {
    const name = req.cookies.username;
    if(name){
        res.render('index', { name });
    }else{
        res.redirect('/hello');
    }
});

// app.get('/cards',(req,res) => {
//     res.render('card', { prompt: "Who is buried in Grant's tomb?", hint: "Think about who's tomb it is."});
// });
// app.get('/cards',(req,res) => {
//     res.render('card', { prompt: "Who is buried in Grant's tomb?", colors});
// });
app.get('/cards',(req,res) => {
    res.render('card', { prompt: "Who is buried in Grant's tomb?"});
});
app.get('/hello',(req,res) => {
    const name = req.cookies.username;
    if(name){
        res.redirect('/');
    }else{
        res.render('hello');
        
    }
    
});
app.post('/hello',(req,res) => {
    // console.dir(req.body)
    //res.json(req.body);
    res.cookie('username', req.body.username);
    res.redirect('/');
});

//Route to delete cookie
app.post('/goodbye',(req,res) => {
    res.clearCookie('username');
    res.redirect('/hello');
});
//sandbox 
//TODO: build table First Name | Last Name

app.listen(3000, () => {
    console.log('The application is running on localhost:3000');
});