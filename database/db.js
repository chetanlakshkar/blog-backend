const mongoose=require('mongoose')
const DB="mongodb+srv://ankur:ankur@cluster0.xiajq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
mongoose.connect(DB,{
    useNewUrlParser:true,
    UseUnifiedTopology:true,

}).then(()=>{
    console.log("Mongo connection successful");

}).catch((err)=>{
    console.log(" Mongo connection failed")
})