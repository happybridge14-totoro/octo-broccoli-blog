const user = {
    get: (req, res) => {
        res.write("user.one.get");
        res.end();
    },
    put: (req, res) => {
        res.write("user.one.put");
        res.end();
    }
};
module.exports = user;