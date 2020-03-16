const enum STATUS_CODES {
    "SUCCESS" = 200,
    "BAD_RQUEST" = 400,
    "UNAUTHORIZED" = 401,
    "NOT_FOUND" = 404,
    "DUPLICATED" = 409,
    "INTERNAL_SERVER_ERROR" = 500
};
const enum ERROR_CODES {
    "WRONG_USER_ID" = 3,
    "WRONG_USER_NAME" = 4,
    "SESSION_NOT_FOUND" = 5,
    "WRONG_SESSION" = 6,
    "ITEM_ID_ERROR" = 10,
    "ITEM_NAME_ERROR" = 11,
    "ITEM_QUANTITY_ERROR" = 12,
    "ITEM_DULPLICATED" = 15,
    "NOT_FOUND" = 1000 
};
interface ERROR_OBJECT {
    errorCode: ERROR_CODES
    errorMessage?: string
};

export {STATUS_CODES, ERROR_CODES, ERROR_OBJECT}