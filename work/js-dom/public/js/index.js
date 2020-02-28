import $ from "./mini-jquery.js";
(($) => {
    const addBtn = $(".user-action");
    addBtn.onClick((e) => {
        console.log("hello");
    });
})($);
