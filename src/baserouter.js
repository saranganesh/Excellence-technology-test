const test=require('./test/testRouter')

module.exports=function(app){
app.use('/test',test)
}