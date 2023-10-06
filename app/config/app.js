
require('dotenv').config()

// Set the NODE_ENV to 'development' by default
process.env.NODE_ENV = process.env.NODE_ENV || 'development'

module.exports = {
    port: process.env.PORT || 3000,
    api: {
        prefix: process.env.API_PREFIX || '/api/v1'
    }
}

