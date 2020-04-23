const STATUS_CODES = {
    "SUCCESS": 200,
    "BAD_RQUEST": 400,
    "UNAUTHORIZED":  401,
    "FORBIDDEN": 403,
    "NOT_FOUND": 404,
    "DUPLICATED": 409,
    "INTERNAL_SERVER_ERROR": 500
};

const RESPONSE_SUCCESS = {
    errorCode: 0
};
const ERROR_CODES = {
    "WRONG_USER_ID": {
        errorCode: 3,
        errorSummary: "Wrong user id."
    },
    "WRONG_USER_NAME": {
        errorCode: 4,
        errorSummary: "Wrong user name."
    },
    "TOKEN_NOT_FOUND": {
        errorCode: 5,
        errorSummary: "Token not found."
    },
    "WRONG_TOKEN": {
        errorCode: 6,
        errorSummary: "Wrong token id."
    },
    "WRONG_MESSAGE": {
        errorCode: 11,
        errorSummary: "Wrong message."
    },
    "WRONG_ARTICLE": {
        errorCode: 21,
        errorSummary: "Article not found."
    },
    "WRONG_ARTICLE_PARAMS": {
        errorCode: 22,
        errorSummary: "Wrong article params."
    },
    "NOT_FOUND":  {
        errorCode: 1000,
        errorSummary: "Path not found."
    }
};

module.exports = {STATUS_CODES, RESPONSE_SUCCESS, ERROR_CODES};