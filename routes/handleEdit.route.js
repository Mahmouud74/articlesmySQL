const handleEdit =require('express').Router();
const path=require('path');
const mySql =require('mysql2');
const query= mySql.createConnection({
    host:'localhost',
    database:'articles',
    user:'root',
    password:''
})
handleEdit.post('/handleEdit/:id',(req,res)=>{
    query.execute(`update article set title='${req.body.title}', content='${req.body.article}' , timee=now() where id=${req.params.id} `);
    res.redirect('/show/admin');
})
module.exports=handleEdit;