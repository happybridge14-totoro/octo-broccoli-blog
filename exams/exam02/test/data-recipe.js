const data = require("../src/data/recipe");
const assert = require("assert");
const recipes = [{
        recipeId: 0,
        author: "test1", 
        title: "test1",
        ingredients: "ingredients",
        instructions: "instruction"
    }, {
        recipeId: 1,
        author: "test2", 
        title: "test2",
        ingredients: "ingredients2",
        instructions: "instruction2"
    }, {
        recipeId: 2,
        author: "test1", 
        title: "test3",
        ingredients: "ingredients",
        instructions: "instruction"
    }
];
describe('data.addRecipes', function () {
    describe('#firstRecips', function () {
        it("responds with matching records", function () {
            const target = recipes[0];
            assert.deepStrictEqual(target, data.addRecipes(target.author, target.title, target.ingredients, target.instructions));
        });
    });
    describe('#secondRecips', function () {
        it("responds with matching records", function () {
            const target = recipes[1];
            assert.deepStrictEqual(target, data.addRecipes(target.author, target.title, target.ingredients, target.instructions));
        });
    });
    describe('#thirdRecips', function () {
        it("responds with matching records", function () {
            const target = recipes[2];
            assert.deepStrictEqual(target, data.addRecipes(target.author, target.title, target.ingredients, target.instructions));
        });
    });
});
describe('data.getRecipes', function () {
    describe('#getRecipes', function () {
        it("responds with matching records", function () {
            assert.deepStrictEqual(data.getRecipes(), recipes);
        });
    });
});
describe('data.getRecipeById', function () {
    describe('#id is 0', function () {
        it("responds with matching records", function () {
            const id = 0;
            const target = recipes[id];
            assert.deepStrictEqual(data.getRecipesById(id), target);
        });
    });
    describe('#id is 1', function () {
        it("responds with matching records", function () {
            const id = 1;
            const target = recipes[id];
            assert.deepStrictEqual(data.getRecipesById(id), target);
        });
    });
    describe('#id is 2', function () {
        it("responds with matching records", function () {
            const id = 2;
            const target = recipes[id];
            assert.deepStrictEqual(data.getRecipesById(id), target);
        });
    });
});