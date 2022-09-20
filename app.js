const { query } = require('express');
const express = require ('express');
const morgan = require('morgan');
const path = require('path');

const app = express()
const PORT = 4000;

app.engine('ejs', require('ejs-mate'));
app.set('views', (path.join((__dirname, 'views'))));
app.set('view engine', 'ejs');
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(express.static(path.join((__dirname, 'public'))));

app.use('/', require('./routes/indexRoute'));
app.use('/catalog', require('./routes/catalogRoute'));
app.use('/user', require('./routes/userRoute'));

app.listen(PORT, ()=>{
    console.log("Server is working on PORT " + PORT)
});