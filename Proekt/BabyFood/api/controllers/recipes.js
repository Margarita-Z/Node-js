
const Recipe = require('../models/recipe');


module.exports = {
  allMyRecipes: async (req, res) => {
    try {
      const recipe = await Recipe.find({ user: req.user.id })

      res.send({
        error: false,
        message: 'All my recipes',
        recipe: recipe
      });
    } catch (error) {
      res.send({
        error: true,
        message: error.message
      });
    }
  },
  allRecipesByCategory: async (req, res) => {
    try {
      const breckFast = await Recipe.find({ 'category': 'Brackfast' });
      const brunch = await Recipe.find({ 'category': 'Brunch' });
      const lunch = await Recipe.find({ 'category': 'Lunch' });
      const diner = await Recipe.find({ 'category': 'Diner' });

      const food = { breckFast, brunch, lunch, diner };

      res.send({
        error: false,
        message: 'All recipes for category',
        food: food
      })
    } catch (error) {
      res.send({
        error: true,
        message: error.message
      });
    }
  },
  homePage: async (req, res) => {
    try {
      const freshNew = await Recipe.find({}).sort({ createdAt: -1 }).limit(3);
      const mostPopulare = await Recipe.find({}).sort({ review: -1 }).limit(6);
      res.send({
        error: false,
        message: 'Home page',
        freshNew: freshNew,
        mostPopulare: mostPopulare
      });
    } catch (error) {
      res.send({
        error: true,
        message: error.message
      })
    }
  },
  updateRecipe: async (req, res) => {
    try {
      const recipe = await Recipe.findByIdAndUpdate(req.params.id, req.body);
      res.send({
        error: false,
        message: 'The recipe id updated',
        recipe: recipe
      })
    } catch (error) {
      res.send({
        error: true,
        message: error.message
      })
    }
  },
  createNewRecipe: async (req, res) => {
    try {
      req.body.user = req.user.id;
      const recipe = await Recipe.create(req.body);

      res.status(201).send({
        error: false,
        message: 'Has just created a new recipe !',
        recipe: recipe
      });
    } catch (error) {
      res.send({
        error: true,
        message: error.message
      });
    }
  },
  deleteRecipe: async (req, res) => {
    try {
      await Recipe.findByIdAndDelete({ _id: req.params.id });
      res.send('Recipe is deleted');
    } catch (error) {
      res.send({ message: error });
    }
  },
  view: async (req, res) => {
    try {
      const recipe = await Recipe.findById(req.params.id)
      await Recipe.findOneAndUpdate(req.params.id);
      recipe.review += 1;
      recipe.save()

      res.send({
        error: false,
        message: `This recipe was visited `,
        recipe: recipe
      });

    } catch (error) {
      res.send({
        error: true,
        message: error.message
      });
    }
  }
}
