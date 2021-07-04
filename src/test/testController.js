const { relative } = require('path');
const { emit } = require('./testModel');
const test=require('./testModel');

module.exports={
    createList:async(req,res)=>{
        try {
            let data= new test(req.body)
            await data.save(req.body)
            console.log("Data list has been created",data);
            return res.send({
                message:"Data list has been created"
            })
        } catch (error) {
            console.log("some error occured",error);
            return res.status(400).json({error})
        }
    },
    updateScore:async(req,res)=>{
        try {
            await test.findOneAndUpdate({_id:req.body._id},{$set:{testScores:req.body.testScores}})
            console.log("update the scores")
            return res.send({
              message:"updating the scores"
            });
        } catch (error) {
            console.log("error in updatation",error)
                return res.status(400).json({error});
        }
    }
    
}