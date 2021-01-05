const remove = require('express').Router();
const path=require('path');
const mySql=require('mysql2');
const query = mySql.createConnection({
    host:'localhost',
    database:'articles',
    user:'root',
    password:''
})
remove.get('/delete/:MMM/admin',(req,res)=>{
    query.execute(`delete from article where id=${req.params.MMM}`);
    res.redirect('/show/admin');
})
module.exports=remove;