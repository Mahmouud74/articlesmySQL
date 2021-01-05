const user = require('express').Router();
const path=require('path');
const mySql =require('mysql2');
const query = mySql.createConnection({
    host:'localhost',
    database:'articles',
    user:'root',
    password:'',
})
user.get('/user',(req,res)=>{
    
    query.execute(`SELECT * FROM article`,(err,result)=>
    {
        if(err)
        {
            res.json({err:`it's Error`});
        }
        else
        {
            res.render('user.ejs',{result});

        }
        //console.log(result);
    })

});
module.exports=user;