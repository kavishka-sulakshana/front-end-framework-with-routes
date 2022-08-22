const express = require('express');
const app = express()
const users = require('./routes/users');
const homePage = require('./Pages/index');

const PORT = 8080

app.use('/users',users);

app.get('/',(req,res)=>{
    res.send(`${homePage()}`);
});

app.listen(PORT,()=>{
    console.log("Running on",PORT)
})

