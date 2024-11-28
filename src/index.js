var mongoose = require('mongoose');
var app = require('./app');
const { auth } = require('express-openid-connect');

require('dotenv').config();

var uri = process.env.URI;

mongoose.set('strictQuery', false);

app.set('port', process.env.BACKEND_PORT || 3800);

mongoose.connect(uri)
    .then(() => {
        console.log('DB is Connected');
        // Crear el servidor
        app.listen(app.get('port'), () => {
            console.log("URI: ", "MongoAtlas"); //uri);
            console.log("Port: ", app.get('port'));
        });
    })
    .catch(err => console.log(err));

process.on('SIGINT', () => {
    server.close(() => {
        console.log('Process terminated');
        process.exit(0);
    });
});

const config = {
    authRequired: false,
    auth0Logout: true,
    secret: process.env.SECRET,
    baseURL: process.env.URI,
    clientID: process.env.CLIENT_ID,
    issuerBaseURL: process.env.AUTH0_ISSUER_BASE_URL
};

// // auth router attaches /login, /logout, and /callback routes to the baseURL
// app.use(auth(config));
// // req.isAuthenticated is provided from the auth router
// app.get('/', (req, res) => {
//     res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
// });