import $ from "../utils/mini-jquery";
const RECIPE_URL = "/recipe";
const RECIPES_URL = "/recipes";
;
;
const getRecipeURLById = (id) => {
    return RECIPE_URL + "/" + id;
};
const getRecipesList = () => {
    return $.get(RECIPES_URL);
};
const getRecipeDetail = (id) => {
    return $.get(getRecipeURLById(id));
};
const addRecipe = (title, ingredients, instructions) => {
    const params = {
        title,
        ingredients,
        instructions
    };
    return $.post(RECIPE_URL, params);
};
export { getRecipesList, getRecipeDetail, addRecipe };
