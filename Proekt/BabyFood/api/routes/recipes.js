var express = require('express');
var router = express.Router();
const controller = require('../controllers/recipes');
const jwt = require('express-jwt');
require('dotenv').config();


router.get('/',jwt({ secret: process.env.AUTH_SECRET, algorithms: ['HS256'] }), controller.allMyRecipes) 
      .get('/category',controller.allRecipesByCategory)
      .put('/:id',  jwt({ secret: process.env.AUTH_SECRET, algorithms: ['HS256'] }), controller.updateRecipe)
      .post('/newRecipe', jwt({ secret: process.env.AUTH_SECRET, algorithms: ['HS256'] }), controller.createNewRecipe)
      .delete('/:id',  jwt({ secret: process.env.AUTH_SECRET, algorithms: ['HS256'] }), controller.deleteRecipe)
      .get('/:id', controller.view)
      

module.exports = router;