const search=require('express').Router();
const path=require('path');
const mySql=require('mysql2');
const query= mySql.createConnection({
    host:'localhost',
    database:'articles',
    user:'root',
    password:'',
})
search.get('/search/:char',(req,res)=>{
    console.log(req.query.seearch);
    query.execute(`SELECT * FROM article WHERE title like '%${req.query.seearch}%'`,(err,result)=>{
        console.log(result);
        if(err){
            res.json({err:'fe error'});
        }
        else if(req.params.char==='admin'){
            res.render('show.ejs',{result});
        }
        else {
            res.render('user.ejs',{result})
        }
    })
})
module.exports=search;