//Simple cookie parser instead of express cookie parser (we are not using signed cookie)
const router = (req, res, next) => {
    return (req, res, next) => {

    };
};
module.exports = router;