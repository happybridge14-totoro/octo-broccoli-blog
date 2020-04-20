const {STATUS_CODES, ERROR_CODES, RESPONSE_SUCCESS} = require("./utils/codes");
const { createArticle, 
    articleThumbsup,
    articleCancelThumbsup,
    updateArticle, 
    deleteArticle, 
    getArticles,
    getArticleById } = require("./data/article");
// const { userThumbsup, userCancelThumbsup } = require("./data/user");
const one = {
    get: (req, res) => {
        const id = req.params.id;
        if (id) {
            const article = getArticleById(id);
            if (article) {
                res.json({
                    ...RESPONSE_SUCCESS,
                    article
                });
                return;
            }
        }
        res.status(STATUS_CODES.BAD_RQUEST);
        res.json(STATUS_CODES.WRONG_ARTICLE);
    },
    put: (req, res) => {
        const id = req.params.id;
        if (id) {
            const {title, content, tags} = req.body;
            if (title && tags) {
                const article = updateArticle(id, title, content, tags);
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
            res.json(RESPONSE_SUCCESS);
        } else {
            res.status(STATUS_CODES.BAD_RQUEST);
            res.json(ERROR_CODES.WRONG_ARTICLE);
        };
    }
};
const all = {
    get: (req, res) => {
        const articles = getArticles();
        res.json({...RESPONSE_SUCCESS, articles});
    },
    post: (req, res) => {
        const {title, content, tags} = req.body;
        if (title && tags) {
            const article = createArticle(title, content, tags);
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
        // const userid = req.userid;
        // if (userThumbsup(userid, articleId)) {
            const articleId = req.params.id;
            const article = articleThumbsup(articleId);
            if (article) {
                res.json({...RESPONSE_SUCCESS, count:article.thumbups});
                return;
            } 
        // }
        res.status(STATUS_CODES.BAD_RQUEST);
        res.json(ERROR_CODES.WRONG_ARTICLE);
    },
    delete: (req, res) => {
        // const userid = req.userid;
        // if (userCancelThumbsup(userid, articleId)) {
            const articleId = req.params.id;
            const article = articleCancelThumbsup(articleId);
            if (article) {
                res.json({...RESPONSE_SUCCESS, count:article.thumbups});
                return;
            }
        // }
        res.status(STATUS_CODES.BAD_RQUEST);
        res.json(ERROR_CODES.WRONG_ARTICLE);
    },
};
module.exports = {one, all, thumbsup};