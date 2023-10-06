const express = require('express')
const cors = require('cors');
const config = require('../app/config/app');


const startServer = () =>{
    const express = express();
    express.listen(config.port, err=>{
        if(err){
            process.exit(1)
        }
    })
    console.log('server started')
    return express;
}

module.exports = () =>{
    const app = startServer()   
     //global middleware
    app.use(cors());
    app.use(express.json());
    return app;
}