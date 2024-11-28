const express = require('express');
const bodyParser = require('body-parser');
var morgan = require('morgan');
var cors = require('cors');
var app = express();
//const { requiresAuth } = require('express-openid-connect');

// Importar archivos de rutas
// const userRoutes = require('./routes/userRoutes');
// const restaurantRoutes = require('./routes/restaurantRoutes');
// const recipeRoutes = require('./routes/recipeRoutes');
// const ingredientRoutes = require('./routes/ingredientRoutes');
// const inventoryRoutes = require('./routes/inventoryRoutes');
// const favoriteRoutes = require('./routes/favoriteRoutes');
// const planningRoutes = require('./routes/planningRoutes');
// const followRoutes = require('./routes/followRoutes');
// const likeRoutes = require('./routes/likeRoutes');
// const commentRoutes = require('./routes/commentRoutes');
// const feedRoutes = require('./routes/feedRoutes');
// const shoppingListRoutes = require('./routes/shoppingListRoutes');

// app.get('/', function (req, res) {
//     res.status(200).send({ message: 'GET request to the homepage (or Hello word)' });
// });

// app.get('/profile', requiresAuth(), (req, res) => {
//     res.send(JSON.stringify(req.oidc.user));
// });

app.get('/Test', function (req, res) {
    res.status(200).send({ message: "I'm running, annoying!!" });
});

//logger
app.use(morgan('dev'))

//middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//cors
app.use(cors())

// Usar rutas
// app.use('/api/users', userRoutes);
// app.use('/api/restaurants', restaurantRoutes);
// app.use('/api/recipes', recipeRoutes);
// app.use('/api/ingredients', ingredientRoutes);
// app.use('/api/inventory', inventoryRoutes);
// app.use('/api/favorites', favoriteRoutes);
// app.use('/api/planning', planningRoutes);
// app.use('/api/follows', followRoutes);
// app.use('/api/likes', likeRoutes);
// app.use('/api/comments', commentRoutes);
// app.use('/api/feed', feedRoutes);
// app.use('/api/shopping-list', shoppingListRoutes);


// Exportar app para el servidor
module.exports = app;
