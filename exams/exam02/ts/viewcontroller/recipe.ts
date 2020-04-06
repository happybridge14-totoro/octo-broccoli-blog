import {PAGES} from "./pageInterface";
import $, { MiniJquery } from "../utils/mini-jquery";
import { getRecipesList, getRecipeDetail, addRecipe, recipeObject, recipeTitleObject} from "../model/recipes";
import { displayError, ERROR_TYPE } from "./error";
import { STATUS_CODES, ERROR_OBJECT, ERROR_CODES } from "../utils/status-error-codes";
let checkUserStatusCB:()=>void;
let currentPage:PAGES;

const stage:MiniJquery = $("#recipe-stage");

const listTemplate:MiniJquery = $("#list");
const listRecipeTemplate:MiniJquery = $("#list-recipe");
const recipeDetailTemplate:MiniJquery = $("#recipe-detail");
const addTemplate:MiniJquery = $("#recipe-add");

const createRecipeListNode = (recipe:recipeTitleObject):MiniJquery => {
    const {recipeId, title} = recipe;
    const listRecipe:MiniJquery = listRecipeTemplate.templateClone || $();
    const recipeItem:MiniJquery = listRecipe.find(".recipe-item") || $();
    recipeItem.updateData(recipeId);
    const recipeTitle:MiniJquery = listRecipe.find(".recipe-title") || $();
    recipeTitle.updateContent(title);
    return listRecipe;
};
const renderMainPage = (recipes:Array<recipeTitleObject>) => {
    const listPage:MiniJquery = listTemplate.templateClone || $();
    const listContentPage:MiniJquery = listPage.find("#list-content") || $();
    listContentPage.onClick((event:Event) => {
        event.preventDefault();
        const target:MiniJquery = $(event.target);
        const targetParent:MiniJquery = target.parent || $();
        const itemId = targetParent.getDataByKey();
        if (itemId || itemId === "0") {
            displayDetailPage(itemId);
        }
    });
    recipes.forEach((recipe:recipeTitleObject)=>{
        listContentPage.append(createRecipeListNode(recipe));
    });
    stage.removeChildren();
    stage.append(listPage);
    stage.scrollToButtom();
};
const renderDetailPage = ({title, author, ingredients, instructions}:recipeObject) => {
    const detailPage:MiniJquery = recipeDetailTemplate.templateClone || $();
    const recipeTitle:MiniJquery = detailPage.find(".recipe-detail-title") || $();
    recipeTitle.updateContent(title);
    const recipeAuthor:MiniJquery = detailPage.find(".recipe-author") || $();
    recipeAuthor.updateContent(author);
    const recipeIngredients:MiniJquery = detailPage.find(".recipe-ingredients") || $();
    recipeIngredients.updateContent(ingredients);
    const recipeInstructions:MiniJquery = detailPage.find(".recipe-instructions") || $();
    recipeInstructions.updateContent(instructions);
    const backBtn:MiniJquery = detailPage.find(".back") || $();
    backBtn.onClick((event:Event) => {
        event.preventDefault();
        displayMainPage();
    });
    stage.removeChildren();
    stage.append(detailPage);
    stage.scrollToTop();
};
const handleServiceCall = (promise:Promise<any>):Promise<any> => {
    return promise.then((response:Response)=>{
        if (response.ok) {
            return response.json();
        } else {
            return response.json().then((errorMessage:ERROR_OBJECT) => {
                return Promise.reject(errorMessage);
            });
        }
    }, (error)=>{
        displayError(ERROR_TYPE.NETWORK_ERROR);
        return null;
    });
};
const displayMainPage = () => {
    currentPage = PAGES.LIST;
    handleServiceCall(getRecipesList()).then((recipes:Array<recipeObject> | null) => {
        if (recipes) {
            renderMainPage(recipes);
        }
    }).catch((errorMessage:ERROR_OBJECT) => {
        displayError(ERROR_TYPE.UNEXPECTED_ERROR);
    });
};
const displayDetailPage = (itemId:string) => {
    currentPage = PAGES.DETAIL;
    handleServiceCall(getRecipeDetail(itemId)).then((recipe:recipeObject | null) => {
        if (recipe) {
            renderDetailPage(recipe);
        }
    }).catch((errorMessage:ERROR_OBJECT) => {
        if (errorMessage.errorCode === ERROR_CODES.WRONG_RECIPE_ID) {
            displayError(ERROR_TYPE.RECIPE_ID_ERROR);
        } else {
            displayError(ERROR_TYPE.UNEXPECTED_ERROR);
        }
    });
};
const displayAddPage = () => {
    currentPage = PAGES.ADD;
    const addPage:MiniJquery = addTemplate.templateClone || $();
    const submitBtn:MiniJquery = addPage.find(".submit") || $();
    const recipeTitle:MiniJquery = addPage.find("#recipe-add-title") || $();
    const recipeIngredients:MiniJquery = addPage.find("#recipe-ingredients") || $();
    const recipeInstructions:MiniJquery = addPage.find("#recipe-instructions") || $();
    const submitForm:MiniJquery = addPage.find(".recipe-form") || $();
    const successMessage:MiniJquery = addPage.find(".success-message") || $();
    successMessage.hidden = true;
    submitBtn.disable = true;
    const checkSubmit = (event:Event) => {
        submitBtn.disable = recipeTitle.value === "" || 
                            recipeIngredients.value === "" ||
                            recipeInstructions.value === "";
    };
    recipeTitle.onInput(checkSubmit);
    recipeIngredients.onInput(checkSubmit);
    recipeInstructions.onInput(checkSubmit);
    let submitting:boolean = false;
    submitForm.onSubmit((event:Event) => {
        event.preventDefault();
        if (submitting) return;
        submitting = true;
        const title = recipeTitle.value;
        const ingredients = recipeIngredients.value;
        const instructions = recipeInstructions.value;
        handleServiceCall(addRecipe(title, ingredients, instructions)) .then((recipe:any)=>{
            if (recipe) {
                successMessage.hidden = false;
                setTimeout(() => {
                    displayMainPage();
                }, 2000);
            } else {
                submitting = false;
            }
        }).catch((errorMessage:ERROR_OBJECT) => {
            switch (errorMessage.errorCode) {
                case ERROR_CODES.SESSION_NOT_FOUND:
                case ERROR_CODES.WRONG_USER_ID:
                    displayError(ERROR_TYPE.SESSION_ERROR);
                    checkUserStatusCB();
                    displayMainPage();
                    break;
                case ERROR_CODES.WRONG_RECIPE_INSTRUCTIONS:
                case ERROR_CODES.WRONG_RECIPE_INGREDIENTS:
                case ERROR_CODES.WRONG_RECIPE_TITLE:
                    displayError(ERROR_TYPE.RECIPE_PARAM_ERROR);
                    submitting = false;
                    break;
                default:
                    submitting = false;
                    displayError(ERROR_TYPE.UNEXPECTED_ERROR);
                    break;
            }
        });
    });
    const backBtn:MiniJquery = addPage.find(".back") || $();
    backBtn.onClick((event:Event) => {
        event.preventDefault();
        displayMainPage();
    });
    stage.removeChildren();
    stage.append(addPage);
};

const displayRecipe = (target:PAGES, checkUserStatus:()=>void) => {
    if (currentPage !== target) {
        checkUserStatusCB = checkUserStatus;
        switch (target) {
            case PAGES.ADD:
                displayAddPage();
                break;
            default:
                displayMainPage();
                break;
        }
    }
};

export default displayRecipe;