const router=require ('express').Router();
const test=require('./testController');

router.post('/createList',test.createList);
router.post('/updateScore',test.updateScore);


module.exports=router;