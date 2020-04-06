import $ from "../utils/mini-jquery";
const RECIPE_URL = "/recipe";
const RECIPES_URL = "/recipes";

interface recipeObject {
    recipeId: string,
    author:string,
    title:string,
    ingredients:string,
    instructions:string
};
interface recipeTitleObject {
    recipeId: string,
    title:string,
};
const getRecipeURLById = (id:string) => {
    return RECIPE_URL + "/" + id;
};

const getRecipesList = ():Promise<Response> => {
    return $.get(RECIPES_URL);
};

const getRecipeDetail = (id:string):Promise<Response> => {
    return $.get(getRecipeURLById(id));
};
const addRecipe = (title:string, ingredients:string, instructions:string):Promise<Response> => {
    const params = {
        title,
        ingredients,
        instructions
    };
    return $.post(RECIPE_URL, params);
};

export {getRecipesList, getRecipeDetail, addRecipe, recipeObject, recipeTitleObject};