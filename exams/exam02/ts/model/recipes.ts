import $ from "../utils/mini-jquery";
const RECIPE_URL = "/recipe";
const RECIPES_URL = "/recipes";

const getRecipeURLById = (id:string) => {
    return RECIPE_URL + "/" + id;
};

const getRecipesList = ():Promise<Response> => {
    const hello = "hello";
    return $.get(RECIPES_URL, {hello});
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

export {getRecipesList, getRecipeDetail, addRecipe};