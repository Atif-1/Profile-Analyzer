const Sequelize=require("sequelize");
require("dotenv").config();

const sequelize=new Sequelize(
    process.env.DB,
    process.env.USER,
    process.env.PASSWORD,
    {
        host:process.env.DB_HOST,
        dialect:"mysql",
        logging:false
    }
);

module.exports=sequelize;