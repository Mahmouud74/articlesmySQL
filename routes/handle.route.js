const handle =require('express').Router();
const path= require('path');
const mySql=require('mysql2');
const db=mySql.createConnection({
    host:'localhost',
    database:'articles',
    user:'root',
    password:''
})
handle.post('/handle',(req,res)=>{
    db.execute(`INSERT INTO article (title,content,timee) VALUES ('${req.body.title}','${req.body.article}', now() )`)
    res.redirect('/show/admin');
});
module.exports=handle;