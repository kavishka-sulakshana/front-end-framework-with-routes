const express = require('express');
const router = express.Router();
var fs = require('fs');
const user = require('../Pages/user');

router.get('/:id',(req, res)=>{
    res.send(`${user(req.params.id)}`);
});

module.exports = router;