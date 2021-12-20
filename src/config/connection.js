const mongoose = require('mongoose');
require('dotenv').config({
    path: process.env.APP_ENV == 'test' ? '.env.test' : '.env'
});
const {DB_USER, DB_PASS, DB_HOST, DB_PORT, DB_NAME} = process.env;

class Connection {

    constructor(){
        this.databaseMongoDB();
    }

    async databaseMongoDB(){
        const mongoURL = DB_USER && DB_PASS ? 
        `mongodb://${DB_USER}:${DB_PASS}@${DB_HOST}:${DB_PORT}/${DB_NAME}?authSource=admin` : 
        `mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`;

        this.dbConnection = await mongoose.connect(mongoURL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        })
        .then(() => {
            console.log("Connection established successfully!");
        })
        .catch((error) => {
            console.log(`Connection has failed: ${error}`);
        });
    }
}

module.exports = new Connection();