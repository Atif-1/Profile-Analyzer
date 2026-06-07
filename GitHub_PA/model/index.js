const sequelize=require('../config/database');
const Profiles=require("./Profiles");

const syncDB=async()=>{
    try{
        await sequelize.sync({force:false});
        console.log("DB sync Successfully");
    }catch(err){
        console.log(err);
        console.log("Unable to sync db");
    }
}



module.exports={sequelize,Profiles,syncDB};