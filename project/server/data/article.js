const generatUUID = require("../utils/uuid-generator");

const articles = {};
const tags = {};

const setTags = (targetTags, article) => {
    targetTags.forEach((tag) => {
        const tagsSet = tags[tag] || new Set();
        tagsSet.add(article);
    });
};

const clearTags = (targetTags, article) => {
    targetTags.forEach((tag) => {
        const tagsSet = tags[tag];
        if (tagsSet) {
            tagsSet.delete(article);
            if (tagsSet.size === 0) {
                delete tags[tag];
            }
        }
    });
};

const getArticlesByTag = (tag) => {
    return Array.from(targetTags[tag]) || [];
};

const createArticle = (title, content, articleTags) => {
    const articleId = generatUUID();
    const now = Date.now();
    const article = {
        id: articleId,
        createTime: now,
        lastModifyTime: now,
        title,
        content,
        tags: articleTags,
        thumbups: 0,
    };
    articles[articleId] = article;
    setTags(articleTags, article);
    return article;
};

const getArticleById = (id) => {
    return articles[id];
};

const getArticles = () => {
    return articles;
};

const thumbsup = (articleId) => {
    const article = articles[articleId];
    if (article) {
        ++article.thumbups;
    }
    return article;
};
const cancelThumbsup = (articleId) => {
    const article = articles[articleId];
    if (article && thumbups > 0) {
        --article.thumbups;
    }
};

const updateArticle = (articleId, title, content, articleTags) => {
    const article = articles[articleId];
    if (article) {
        clearTags(article.tags, article);
        article.title = title;
        article.tags = articleTags;
        article.content = content;
        article.lastModifyTime = Date.now();
        setTags(articleTags, article);
    }
    return article;
};

const deleteArticle = (articleId) => {
    delete articles[articleId];
};

module.exports = {
    createArticle,
    thumbsup,
    cancelThumbsup,
    updateArticle,
    deleteArticle,
    getArticles,
    getArticlesByTag,
    getArticleById
};