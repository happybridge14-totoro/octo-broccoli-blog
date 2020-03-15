import $ from "./utils/mini-jquery.js";
(async ($) => {
    const a = 1;
    console.log(a);
    try {
        const ret = await $.get("/items");
        const data = await ret.json();
        console.log(data);
    } catch(e) {
        console.log(e)
    }
})($);