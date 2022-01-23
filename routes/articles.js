const express= require('express')
const Article= require('./../models/article')
const router = express.Router()
router.use(express.static('./../public/'));

router.get('/',(req,res)=>{
    res.send('In Articles');
});
router.get('/new',(req,res)=>{
    res.render('new_article.ejs', {article:new Article()    });
})      

router.get('/:id',async (req,res)=>{
    // const article= await Article.findById(req.params.id);
    res.send(req.params.id)
})
router.post('/',async (req,res)=>{
    const article = new Article({
        title:req.body.title,
        about:req.body.about,
        description:req.body.description
    })
    try{
    articles=await article.save();
    res.redirect(`/articles/${articles.id}`)
}catch(e){
        res.render('new', {article:article});
   }

})


module.exports=router