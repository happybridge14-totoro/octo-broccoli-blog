const one = {
    get: (req, res) => {
        res.write("article.one.get");
        res.end();
    },
    put: (req, res) => {
        res.write("article.one.put");
        res.end();
    },
    delete: (req, res) => {
        res.write("article.one.delete");
        res.end();
    }
};
one.get.ignoreAuth = true;
const all = {
    get: (req, res) => {
        res.write("article.all.get");
        res.end();
    },
    post: (req, res) => {
        res.write("article.all.post");
        res.end();
    },
};
all.get.ignoreAuth = true;
module.exports = {one, all};