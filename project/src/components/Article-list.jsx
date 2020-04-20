import React, { memo, useEffect, useState, useMemo } from "react";
import api from "../utils/proxy";
import { getArticleUrl } from "../utils/url";

import { ERROR_TYPE, STATUS_CODES } from "../utils/error-status";
import { EVENTS, dispatch } from "../utils/event";

import { isoFormat, localFormat } from "../utils/time";

const ArticleList = memo(({ displayDetail}) => {
    const [articles, setArticles] = useState(null);
    useEffect(()=>{
        api.get(getArticleUrl()).then(({ articles})=>{
            console.log(articles)
            setArticles(articles);
        }).catch(response=>{
            if (response.status === STATUS_CODES.NETWORK_ERROR) {
                dispatch(EVENTS.DISPLAY_ERROR, ERROR_TYPE.NETWORK_ERROR);
            }
        });
    }, []);
    const articleLists = useMemo(() => {
        console.log(articles)
        if (articles) {
            const timeBasedArticles = Object.values(articles);
            timeBasedArticles.sort((a, b) => {
                return a.createTime - b.createTime;
            });
            let currentDateString = "";
            const articleNodes = [];
            timeBasedArticles.forEach((article)=>{
                const createDateString = localFormat(article.createTime);
                if (createDateString !== currentDateString) {
                    articleNodes.push(
                        <h2 key={createDateString}> 
                            {currentDateString !== "" && <div className="seperator"></div>}
                            <time dateTime={isoFormat(article.createTime)}>{createDateString}</time>
                        </h2>
                    );
                    currentDateString = createDateString;
                }
                articleNodes.push((
                    <div key={article.id} className="article">
                        <h3 className="title" onClick={() => { displayDetail(article)}}>
                            {article.title}
                        </h3>
                        <p className="content">{article.content}</p>
                        <div className="tags">
                            <img src="https://img.icons8.com/cotton/64/000000/price-tag--v4.png" alt="tag-icon" className="tag-icon"/>
                            {article.tags.map((tag)=><span key={tag} className="tag">{tag}</span>)}
                        </div>
                    </div>
                ));
            });
            return articleNodes;
        } else {
            return <div>loading...</div>
        }
    }, [articles]);
    return (<div className="article-brief">
        {articleLists}
    </div>);
});

export default ArticleList;