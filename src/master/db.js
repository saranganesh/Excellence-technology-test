const mongoose=require('mongoose');

mongoose.connect('mongodb://localhost:27017/test',
{useNewUrlParser:true,useUnifiedTopology:true},(err,result)=>{
     
if(err){
        console.log("database not connected",err);
    }
    else{
        console.log("database are connected");
    }
})