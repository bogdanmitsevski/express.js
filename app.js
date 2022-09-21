require('dotenv').config();

const { query } = require('express');
const express = require ('express');
const morgan = require('morgan');
const path = require('path');

const app = express();
const port = process.env.PORT || 4000;

app.engine('ejs', require('ejs-mate'));
app.set('views', (path.join((__dirname, 'views'))));
app.set('view engine', 'ejs');
app.use(morgan(process.env.LOG_LEVEL));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(express.static(path.join((__dirname, 'public'))));

app.use('/', require('./routes/indexRoute'));
app.use('/catalog', require('./routes/catalogRoute'));
app.use('/user', require('./routes/userRoute'));

app.listen(port, ()=>{
    console.log("Server is working on " + process.env.DOMAIN + " " + port)
});