const show = require('express').Router();
const path=require('path');
const mySql=require('mysql2');
const query = mySql.createConnection({
    host:'localhost',
    database:'articles',
    user:'root',
    password:''
})
show.get('/show/:char',(req,res)=>{
    query.execute(`SELECT * FROM article`,(err,result)=>
    {
        if(err)
        {
            res.json({err:`it's Error`});
        }
        else if (req.params.char==='admin')
        {
            res.render('show.ejs',{result});

        }
        //console.log(result);
    })
})
module.exports=show;