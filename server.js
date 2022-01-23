require('dotenv').config();
const express= require('express') //looks in node_modules
const artifcleRouter= require('./routes/articles') //./routes looks in current location 
const app= express()
const mongoose=require('mongoose');
const Article=require('./models/article')
const methodOverride = require('method-override');
const res = require('express/lib/response');
mongoose.connect('mongodb://localhost/blog' ,{useNewUrlParser:true,useunifiedTopology:true})
app.use(express.urlencoded({extended:false}));
app.use(express.static('public'))
app.set('view engine','ejs');
app.get('/login',(req,res)=>{
    res.render('login',{mssge:"Login Here"});
})


app.post('/login',(req,res)=>{
    const user=req.body.username
    const password= req.body.password
    
    if(user=="ADMIN" && password=="ADMIN"){
        app.use('/articles',artifcleRouter)
        res.redirect('/articles/new');
    }
    else{
        res.render('login',{mssge:"Wrong Credentials"});
    }

})
app.get('/',async (req,res)=>{
    const articles=await Article.find().sort({createdTime:'desc'})
    res.render('index',{articles:articles});
});

app.listen(5001)