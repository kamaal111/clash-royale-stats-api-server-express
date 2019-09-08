module.exports = {
    PORT: process.env.PORT || 3000,
    API_TOKEN: `Bearer ${process.env.BEARERTOKEN1}`,
    DATABASE_URL:
        process.env.DATABASE_URL || 'mongodb://127.0.0.1:27017/cr_api',
};
