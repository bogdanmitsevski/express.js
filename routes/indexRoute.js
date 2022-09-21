const express = require ('express');
const router = express.Router();
const conf = require('../config/index');

router.get('/', (req,res)=> {
    res.render('pages/index', {
    title:'Home Page',
    siteName: conf.siteName});
});

router.get('/about', (req,res)=> {
    res.render('pages/about', {
        title:'About Page', 
        showNews: true,
        siteName: conf.siteName});
});

router.post('/', (req,res)=> {
    res.send('POST method')
});

router.delete('/', (req,res)=> {
    res.send('DELETE method')
});

router.post('/login', (req,res)=>{
    const users = [
    {login: "bohdan", password: "12345"},
    {login: "Yura", password: "00000"},
]

let user = users.find(el => {
    return el.login === req.body.login && el.password === req.body.password
})
if(user){
return res.json({message: 'logined'});
}
   res.status(400).send({message: 'Incorrect login or password'});
})

module.exports = router;