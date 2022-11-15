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

(async () => {
    try {
        await sequelizeConnection.authenticate();
        console.log('Connection to database has been established successfully.');

    } catch(err){
        console.log('connection failed')
    }
})();

module.exports = sequelizeConnection;