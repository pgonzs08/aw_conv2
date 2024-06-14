module.exports = {
    NODE_ENV: process.env.NODE_ENV || 'development',
    HOST: process.env.HOST || 'localhost',
    DB: process.env.WEBAPP_DB_URI || 'mongodb://localhost:27017/eventCity',
    PORT: process.env.WEBAPP_PORT || 3000
}