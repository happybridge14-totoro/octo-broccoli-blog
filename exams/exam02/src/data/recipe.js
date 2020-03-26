const recipes = [];

const getRecipes = () => {
    return recipes;
};
const addRecipe = (author, title, ingredients, instructions) => {
    const newRecipes = {
        recipeId: recipes.length,
        author, 
        title,
        ingredients,
        instructions
    };
    recipes.push(newRecipes);
    return newRecipes;
};
const getRecipesById = (id) => {
    const recipe = recipes[id];
    return recipe ? recipe : null;
};

module.exports = {getRecipes, addRecipe, getRecipesById};