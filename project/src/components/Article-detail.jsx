import React, { memo, useCallback } from "react";
import api from "../utils/proxy";
import {  getThumbsupUrl } from "../utils/url";

import { ERROR_TYPE, STATUS_CODES } from "../utils/error-status";
import { EVENTS, dispatch } from "../utils/event";
import { isoFormat, localFormat} from "../utils/time";

const ArticleDetail = memo(({ article, updateThumbup}) => {
;
    const likeIt = useCallback(()=>{
        api.post(getThumbsupUrl(article.id)).then(({count})=>{
            updateThumbup(count);
        }).catch(response=>{
            if (response.status === STATUS_CODES.UNAUTHORIZED || response.status === STATUS_CODES.FORBIDDEN) {
                dispatch(EVENTS.DISPLAY_ERROR, ERROR_TYPE.SESSION_ERROR);
                dispatch(EVENTS.REFRESH);
            } else if (response.status === STATUS_CODES.NETWORK_ERROR) {
                dispatch(EVENTS.DISPLAY_ERROR, ERROR_TYPE.NETWORK_ERROR);
            }
        });
    }, [article.id, updateThumbup]);
    return (<article className="article-detail">
        <h2 className="title">{article.title}</h2>
        <div className="meta">
            <span>Created: </span>
            <time dateTime={isoFormat(article.createTime)}>{localFormat(article.createTime)}</time>
            <span className="sperator">/</span>
            <span>Modified: </span>
            <time dateTime={isoFormat(article.lastModifyTime)}>{localFormat(article.lastModifyTime)}</time>
        </div>
        <div className="tags">
            <img src="https://img.icons8.com/cotton/64/000000/price-tag--v4.png" alt="tag-icon"/>
            {article.tags.map(tag=>{
                return (
                <div key={tag} className="tag">
                    <span>{tag}</span>
                </div>
            )})}
        </div>
        <pre className="content">{article.content}</pre>
        <div className="thumbup">
            <img onClick={likeIt} src="https://img.icons8.com/cotton/64/000000/thumb-up--v1.png" alt="thumbup"/>
            <span>{article.thumbups}</span>
        </div>
    </article>);
});

export default ArticleDetail;