var mongoose = require('mongoose');
var app = require('./app');

require('dotenv').config();
var uri = process.env.MONGO_URI;

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