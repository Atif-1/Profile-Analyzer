const express=require("express");
const cors=require("cors");
const profileRouter=require("./routes/profileRoutes");

const app=express();

app.use(cors("*"));
app.use(express.json());


app.use("/",profileRouter);




module.exports=app;