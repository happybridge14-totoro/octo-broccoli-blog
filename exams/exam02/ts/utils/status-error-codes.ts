enum STATUS_CODES {
    "SUCCESS" = 200,
    "BAD_RQUEST" = 400,
    "UNAUTHORIZED" = 401,
    "NOT_FOUND" = 404,
    "DUPLICATED" = 409,
    "INTERNAL_SERVER_ERROR" = 500
};
enum ERROR_CODES {
    "WRONG_USER_ID" = 3,
    "WRONG_USER_NAME" = 4,
    "SESSION_NOT_FOUND" = 5,
    "WRONG_SESSION" = 6,
    "WRONG_RECIPE_ID" = 11,
    "WRONG_RECIPE_TITLE" = 12,
    "WRONG_RECIPE_INGREDIENTS" = 13,
    "WRONG_RECIPE_INSTRUCTIONS" = 14
};
interface ERROR_OBJECT {
    errorCode: ERROR_CODES
    errorMessage?: string
};

export {STATUS_CODES, ERROR_CODES, ERROR_OBJECT}