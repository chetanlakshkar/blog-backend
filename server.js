const  express =require("express");
const router = require("./route/router.js");
const app=express();
PORT=8000;
require("./database/db.js")
app.use(require("./route/router.js"))
app.use('/api/users/signup',router)
app.get("/",(req,res)=>{
    res.send("this is home page")
    console.log("this is server");
});
app.listen(PORT, () => {
    console.log(`server is running on ${PORT}`);
  });