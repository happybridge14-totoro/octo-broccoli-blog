const recipes = [];

const getRecipesTitle = () => {
    return recipes.map(({recipeId, title})=>{return {recipeId, title}});
};
const addRecipe = (author, title, ingredients, instructions) => {
    const newRecipes = {
        recipeId: recipes.length.toString(),
        author, 
        title,
        ingredients,
        instructions
    };
    recipes.push(newRecipes);
    return newRecipes;
};
const getRecipesById = (id) => {
    const recipe = recipes[Number.parseInt(id)];
    return recipe ? recipe : null;
};

module.exports = {getRecipesTitle, addRecipe, getRecipesById};