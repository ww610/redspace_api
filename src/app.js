const express = require('express');
const routes = require('./routes');
const cors = require('cors');
require('./config/connection');

class App {
    constructor(){
        this.express = express();

        this.middlewares();
        this.routes();
    }

    middlewares(){
        this.express.use(cors());
        this.express.use(express.json());
    }

    routes(){
        this.express.use(routes);
    }
}

module.exports = new App().express