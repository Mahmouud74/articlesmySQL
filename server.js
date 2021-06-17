const express =require('express');
const path=require('path');
const mySql=require('mysql2');
const app=express();
const port=3000;
const admin = require('./routes/user.route');
const user = require('./routes/admin.route');
const more = require('./routes/more.route');
const edit = require('./routes/edit.route');
const home=require('./routes/home.route');
const add=require('./routes/add.route');
const handle=require('./routes/handle.route')
const show=require('./routes/show.route')
const remove =require('./routes/delete.route')
const search =require('./routes/search.route');
const handleEdit=require('./routes/handleEdit.route');
app.use(express.urlencoded({extended:true}));
app.use(home);
app.use(admin);
app.use(add);
app.use(user);
app.use(more);
app.use(edit);
app.use(handle);
app.use(show);
app.use(remove);
app.use(handleEdit);
app.use(search);
app.use(express.static(path.join(__dirname,'public')));
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));


const db = mySql.createConnection({
    host:'localhost',
    database:'articles',
    user:'root',
    password:''    
})


app.listen(process.env.PORT || port,()=>{
    console.log("3la allah");
});
