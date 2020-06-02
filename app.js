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
//bring in so app.js can use the routes that were created
//./routes is fine because theirs an index.js 
//else you would require the whole path
const mainRoutes = require('./routes');
const cardRoutes = require('./routes/cards');
//use the routes variable to create middleware
app.use(mainRoutes);
//new routes for flashcards
app.use('/cards',cardRoutes);
//using middleware
// app.use((req,res,next)=>{
//     console.log("Hello");
//     const err = new Error('Oh noes!');
//     err.status = 500;
//     next(err);
// });
// app.use((req,res,next)=>{
//     console.log("World")
//     next();
// });

// middleware error function

app.use((req,res,next) => {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
});

app.use((err,req,res,next) => {
    res.locals.error = err;
    res.status(err.status);
    res.render('error');
});
//sandbox 
//TODO: build table First Name | Last Name

app.listen(3000, () => {
    console.log('The application is running on localhost:3000');
});