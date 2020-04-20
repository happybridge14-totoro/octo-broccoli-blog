import React, { useState, memo, useEffect, useReducer, useCallback } from "react";

import api from "../utils/proxy";
import { getArticleUrl } from "../utils/url";

import { ERROR_TYPE, STATUS_CODES } from "../utils/error-status";
import { EVENTS, dispatch } from "../utils/event";

const ACTION_ADD = "add";
const ACTION_REMOVE = "remove";

const ArticleDetail = memo(({article}) => {
    return (<article className="article-detail">
            <h4>{article.title}</h4>
            <div className="tags">
                <span>Tags: </span>
                {article.tags.map((tag)=><span key="tag">{tag}</span>)};
            </div>
            <p>{article.content}</p>
        </article>);
});

export default ArticleDetail;