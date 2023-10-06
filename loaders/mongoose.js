const mongoose = require('mongoose');
require('dotenv').config()

module.exports = async function () {

    const localURL = process.env.LOCAL_URL;
    //Mongoose provides options like useNewUrlParser to work around  deprecation warnings
    const connection = await mongoose.connect(localURL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    return connection.connection.db;
};
