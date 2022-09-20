const express = require('express');
const router = express.Router();


router.get('/:id/section/:part', (req,res)=> {
    let info = 'catalog ' + req.params.id + 'section ' + req.params.part;
    res.send(info);
});

module.exports = router;