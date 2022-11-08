const Sequelize = require('sequelize');

const sequelizeConnection = new Sequelize(
    "myportfolio", 
    "root", 
    "Escalademroc69&", {
    dialect: "mysql",
    host: "localhost", 
    logging: false,
    define: {
        freezeTableName: true
    }
}); 

// const sequelizeConnection = new Sequelize(
//     "dbmaster", 
//     "masteruser", 
//     "Y1-edl=0tfD%5!^^x3,FFeusD=k.lmMX", {
//     dialect: "mysql",
//     host: "ls-646baf4f8af63120ffbf5667c4178e5a4f4166ee.ccv74xywnazg.eu-west-3.rds.amazonaws.com", 
//     logging: false,
//     define: {
//         freezeTableName: true
//     }
// }); 

(async () => {
    try {
        await sequelizeConnection.authenticate();
        console.log('Connection to database has been established successfully.');

    } catch(err){
        console.log('connection failed')
    }
})();

module.exports = sequelizeConnection;