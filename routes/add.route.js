const add=require('express').Router();
const path=require('path')
add.get('/add',(req,res)=>{
    res.render('add.ejs');
})
module.exports=add;