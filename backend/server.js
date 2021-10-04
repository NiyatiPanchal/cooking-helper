const express=require('express');
const cors=require('cors');
const mongoose=require('mongoose');
const multer=require('multer');
const bodyParser=require('body-parser');
const path=require('path');

const app=express();

app.use(express.static(__dirname+"../public/"));

mongoose.connect('mongodb+srv://smit-admin:555admin@cluster0.12u2y.mongodb.net/RecipeData',{useNewUrlParser:true,useUnifiedTopology:true});
const schema= new mongoose.Schema({
recipetitle:String,
recipeContent:String,
recipeOrigin:String,
serves:Number,  
_id:String,
cooktime:String,
ingrid:[String],
steps:[String],
image:String
});
const models=  mongoose.model('recipes',schema);
const storage=multer.diskStorage({

    destination:(req,file,cb)=>{
cb(null,'../public')
    },
    filename:(req,file,cb)=>{
        cb(null, file.fieldname + '_' + Date.now() 
             + path.extname(file.originalname))
         
     }
});

app.use(cors());
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

const upload=multer({storage:storage,limits:{fieldSize:10*1024*1024}});



app.get('/', function(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
res.send("welcome Home");
});
app.post('/recipeData',upload.single('imager'),function(req, res) {
// console.log(req.file);
// console.log(req.body);

const formdatas=req.body;
// const stepps=req.body.steps;
// const ingrids=req.body.ings;
const doc=new models({
    recipetitle: formdatas.recipetitle,
    recipeContent:formdatas.recipecontent,
    recipeOrigin:formdatas.recipeorigin,
    serves:formdatas.serves,
    cooktime:formdatas.cooktime,
    ingrid:formdatas.ings,
    steps:formdatas.steps,
    _id:Math.random()*5,
    image:req.file.filename,
});
doc.save();
});
app.get('/userRecipe',function(req, res){
     models.find(function(err,result){
        res.send(result);
    });
}
);
// 
app.get('/userRecipeClick/',function(req, res){

   const id = req.query.ids;
   
   console.log(id);

models.find({_id:id}, function (err, result) {
    if(err){
        res.send(err);
    }
    else{ 
        res.setHeader('Access-Control-Allow-Origin', '*');
    console.log(result);
    res.send(result);
    }
});
}
);

app.listen('3001',function(){console.log('Server is running on 3001')});