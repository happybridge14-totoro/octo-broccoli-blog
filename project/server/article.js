const {STATUS_CODES, ERROR_CODES, RESPONSE_SUCCESS} = require("./utils/codes");
const { createArticle, 
    thumbup, 
    cancelThumbup, 
    updateArticle, 
    deleteArticle, 
    getArticles } = require("./data/article"); 
const one = {
    put: (req, res) => {
        const id = req.params.id;
        if (id) {
            const {title, tages} = req.body;
            if (title && tages) {
                const article = updateArticle(id, title, tages);
                if (article) {
                    res.json({...RESPONSE_SUCCESS, article});
                    return;
                }
            } else {
                res.status(STATUS_CODES.BAD_RQUEST);
                res.json(ERROR_CODES.WRONG_ARTICLE_PARAMS);
                return;
            } 
        }
        res.status(STATUS_CODES.BAD_RQUEST);
        res.json(STATUS_CODES.WRONG_ARTICLE);
    },
    delete: (req, res) => {
        if (articleId) {
            deleteArticle(articleId);
            req.json(RESPONSE_SUCCESS);
        } else {
            req.status(STATUS_CODES.BAD_RQUEST);
            req.json(ERROR_CODES.WRONG_ARTICLE);
        };
    }
};
one.get.ignoreAuth = true;
const all = {
    get: (req, res) => {
        const articles = getArticles();
        req.json({...RESPONSE_SUCCESS, articles});
    },
    post: (req, res) => {
        const {title, tages} = req.body;
        if (title && tages) {
            const article = createArticle(title, tages);
            res.json({...RESPONSE_SUCCESS, article});
        } else {
            res.status(STATUS_CODES.BAD_RQUEST);
            res.json(ERROR_CODES.WRONG_ARTICLE_PARAMS);
        }
    },
};
all.get.ignoreAuth = true;
const thumbsup = {
    post: (req, res) => {
        const articleId = req.params.id;
        const article = thumbup(articleId);
        if (article) {
            req.json(RESPONSE_SUCCESS);
        } else {
            req.status(STATUS_CODES.BAD_RQUEST);
            req.json(ERROR_CODES.WRONG_ARTICLE);
        }
    },
    delete: (req, res) => {
        const articleId = req.params.id;
        const article = cancelThumbup(articleId);
        if (article) {
            req.json(RESPONSE_SUCCESS);
        } else {
            req.status(STATUS_CODES.BAD_RQUEST);
            req.json(ERROR_CODES.WRONG_ARTICLE);
        }
    },
};
module.exports = {one, all, thumbsup};