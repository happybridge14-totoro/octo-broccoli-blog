import { PAGES } from "./pageInterface";
import $ from "../utils/mini-jquery";
import { getRecipesList, getRecipeDetail, addRecipe } from "../model/recipes";
import { displayError, ERROR_TYPE } from "./error";
import { ERROR_CODES } from "../utils/status-error-codes";
let checkUserStatusCB;
let currentPage;
const stage = $("#recipe-stage");
const listTemplate = $("#list");
const listRecipeTemplate = $("#list-recipe");
const recipeDetailTemplate = $("#recipe-detail");
const addTemplate = $("#recipe-add");
const createRecipeListNode = (recipe) => {
    const { recipeId, title } = recipe;
    const listRecipe = listRecipeTemplate.templateClone || $();
    const recipeItem = listRecipe.find(".recipe-item") || $();
    recipeItem.updateData(recipeId);
    const recipeTitle = listRecipe.find(".recipe-title") || $();
    recipeTitle.updateContent(title);
    return listRecipe;
};
const renderMainPage = (recipes) => {
    const listPage = listTemplate.templateClone || $();
    const listContentPage = listPage.find("#list-content") || $();
    listContentPage.onClick((event) => {
        event.preventDefault();
        const target = $(event.target);
        const targetParent = target.parent || $();
        const itemId = targetParent.getDataByKey();
        if (itemId || itemId === "0") {
            displayDetailPage(itemId);
        }
    });
    recipes.forEach((recipe) => {
        listContentPage.append(createRecipeListNode(recipe));
    });
    stage.removeChildren();
    stage.append(listPage);
    stage.scrollToButtom();
};
const renderDetailPage = ({ title, author, ingredients, instructions }) => {
    const detailPage = recipeDetailTemplate.templateClone || $();
    const recipeTitle = detailPage.find(".recipe-detail-title") || $();
    recipeTitle.updateContent(title);
    const recipeAuthor = detailPage.find(".recipe-author") || $();
    recipeAuthor.updateContent(author);
    const recipeIngredients = detailPage.find(".recipe-ingredients") || $();
    recipeIngredients.updateContent(ingredients);
    const recipeInstructions = detailPage.find(".recipe-instructions") || $();
    recipeInstructions.updateContent(instructions);
    const backBtn = detailPage.find(".back") || $();
    backBtn.onClick((event) => {
        event.preventDefault();
        displayMainPage();
    });
    stage.removeChildren();
    stage.append(detailPage);
    stage.scrollToTop();
};
const handleServiceCall = (promise) => {
    return promise.then((response) => {
        if (response.ok) {
            return response.json();
        }
        else {
            return response.json().then((errorMessage) => {
                return Promise.reject(errorMessage);
            });
        }
    }, (error) => {
        displayError(ERROR_TYPE.NETWORK_ERROR);
        return null;
    });
};
const displayMainPage = () => {
    currentPage = PAGES.LIST;
    handleServiceCall(getRecipesList()).then((recipes) => {
        if (recipes) {
            renderMainPage(recipes);
        }
    }).catch((errorMessage) => {
        displayError(ERROR_TYPE.UNEXPECTED_ERROR);
    });
};
const displayDetailPage = (itemId) => {
    currentPage = PAGES.DETAIL;
    handleServiceCall(getRecipeDetail(itemId)).then((recipe) => {
        if (recipe) {
            renderDetailPage(recipe);
        }
    }).catch((errorMessage) => {
        if (errorMessage.errorCode === ERROR_CODES.WRONG_RECIPE_ID) {
            displayError(ERROR_TYPE.RECIPE_ID_ERROR);
        }
        else {
            displayError(ERROR_TYPE.UNEXPECTED_ERROR);
        }
    });
};
const displayAddPage = () => {
    currentPage = PAGES.ADD;
    const addPage = addTemplate.templateClone || $();
    const submitBtn = addPage.find(".submit") || $();
    const recipeTitle = addPage.find("#recipe-add-title") || $();
    const recipeIngredients = addPage.find("#recipe-ingredients") || $();
    const recipeInstructions = addPage.find("#recipe-instructions") || $();
    const submitForm = addPage.find(".recipe-form") || $();
    const successMessage = addPage.find(".success-message") || $();
    successMessage.hidden = true;
    submitBtn.disable = true;
    const checkSubmit = (event) => {
        submitBtn.disable = recipeTitle.value === "" ||
            recipeIngredients.value === "" ||
            recipeInstructions.value === "";
    };
    recipeTitle.onInput(checkSubmit);
    recipeIngredients.onInput(checkSubmit);
    recipeInstructions.onInput(checkSubmit);
    let submitting = false;
    submitForm.onSubmit((event) => {
        event.preventDefault();
        if (submitting)
            return;
        submitting = true;
        const title = recipeTitle.value;
        const ingredients = recipeIngredients.value;
        const instructions = recipeInstructions.value;
        handleServiceCall(addRecipe(title, ingredients, instructions)).then((recipe) => {
            if (recipe) {
                successMessage.hidden = false;
                setTimeout(() => {
                    displayMainPage();
                }, 2000);
            }
            else {
                submitting = false;
            }
        }).catch((errorMessage) => {
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
    const backBtn = addPage.find(".back") || $();
    backBtn.onClick((event) => {
        event.preventDefault();
        displayMainPage();
    });
    stage.removeChildren();
    stage.append(addPage);
};
const displayRecipe = (target, checkUserStatus) => {
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
