const edit=require('express').Router();
const path=require('path');
const mySql =require('mysql2');
const query= mySql.createConnection({
    host:'localhost',
    database:'articles',
    user:'root',
    password:''
})
edit.get('/edit/:mmm/:admin',(req,res)=>{
    query.execute(`SELECT * FROM article WHERE id=${req.params.mmm} `,(err,result)=>{
        if(err){
            res.json({err:`it's and error`});
        }
        else
        {
            res.render('edit.ejs',{result});
        }
        console.log(result);
    })
});
module.exports=edit;