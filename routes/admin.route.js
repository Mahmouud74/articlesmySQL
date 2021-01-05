const admin = require('express').Router();
const path=require('path');
admin.get('/admin',(req,res)=>{
    res.render('admin.ejs');
})
module.exports=admin;