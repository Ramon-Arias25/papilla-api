// config/mercadopago.config.js
const mercadopago = require('mercadopago');

// Configura Mercado Pago con tu Access Token
// mercadopago.configure({
//     access_token: process.env.MERCADOPAGO_ACCESS_TOKEN, // Almacena en variables de entorno
// });

module.exports = mercadopago;

const auth0Config = {
    authRequired: false,
    auth0Logout: true,
    secret: process.env.AUTH0_SECRET,
    baseURL: process.env.BASE_URL,
    clientID: process.env.AUTH0_CLIENT_ID,
    issuerBaseURL: process.env.AUTH0_ISSUER_BASE_URL

};

module.exports = auth0Config;