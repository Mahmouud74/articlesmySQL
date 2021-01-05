const home=require('express').Router();
const path=require('path');
home.get('/',(req,res)=>{
 res.render('home.ejs')
})
module.exports=home;