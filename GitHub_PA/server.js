const app=require("./app");
require("dotenv").config();
const {syncDB}=require("./model/index");
const port=process.env.PORT || 3000;

app.listen(port,async()=>{
    try{
    await syncDB();
    console.log(`Server started at ${port}`);
    }catch(err){
        console.log(err);
    }
})