

module.exports = {
    jwtSecret: process.env.JWT_SECRET || 'your_jwt_secret_key',

    port: process.env.PORT || 5000,
};