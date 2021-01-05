const more=require('express').Router();
const path=require('path');
const mySql =require('mysql2');
const query=mySql.createConnection({
    host:'localhost',
    database:'articles',
    user:'root',
    password:''
})

more.get('/details/:id/:admin',(req,res)=>{
    query.execute(`select * from article where id=${req.params.id}`,(err,result)=>{
        if(err){
            res.json({err:'fe error'});
        }
        else if (req.params.admin==='admin')(
            res.render('more.ejs',{result})
        )
        else
        {
            res.render('moreUser.ejs',{result});
        }
    });
})
module.exports=more;