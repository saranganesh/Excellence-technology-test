const mongoose=require('mongoose');
const testSchema=new mongoose.Schema({
   candidates:[{
        Name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    }
}],
    testScores:[{
        firstRound:{
            type:Number,
            // required:true
        },
        secondRound:{
            type:Number,
            // required:true
        },
        thirdRound:{
            type:Number,
            // required:true
        },
        total:{
            type:Number
        }
    }],
    
})
module.exports=mongoose.model('test',testSchema)