// config/mercadopago.config.js
const mercadopago = require('mercadopago');

// Configura Mercado Pago con tu Access Token
mercadopago.configure({
    access_token: process.env.MERCADOPAGO_ACCESS_TOKEN, // Almacena en variables de entorno
});

module.exports = mercadopago;
