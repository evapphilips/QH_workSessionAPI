require('dotenv').config()
module.exports = {
    USERNAME: process.env.USERNAME,
    PASSWORD: process.env.PASSWORD,
    PORT: process.env.PORT || 3000,
    MONGODB_URI: process.env.MONGODB_URI || 'mongodb://localhost:27017/QH_workSessionAPI'
}