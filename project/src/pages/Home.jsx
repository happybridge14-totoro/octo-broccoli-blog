import React, { memo, useState, useMemo, useContext, useEffect, useCallback } from 'react';

import userContext from "../context/user-context";

import { ERROR_TYPE, STATUS_CODES } from "../utils/error-status";
import { EVENTS, dispatch } from "../utils/event";
import api from "../utils/proxy";
import { getArticleUrl} from "../utils/url";

import ArticleEdit from "../components/Article-edit";
import ArticleDetail from "../components/Article-detail";

const PAGE_ADD = "addPage";
const PAGE_DISPLAY = "displayPage";
const PAGE_DETAIL = "detailPage";
const PAGE_EDIT = "editPage";

const Home = memo(() => {
    const user = useContext(userContext);
    const [page, setPage] = useState(PAGE_DISPLAY);
    const [currentArticle, setCurrentArticle] = useState(null);

    const addArticle = useCallback((title, content, tags)=>{
        api.post(getArticleUrl(), { title, content, tags}).then(({article})=>{
            setCurrentArticle(article);
            setPage(PAGE_DETAIL);
        }).catch((response)=>{
            if (response.status === STATUS_CODES.UNAUTHORIZED || response.status === STATUS_CODES.FORBIDDEN) {
                dispatch(EVENTS.DISPLAY_ERROR, ERROR_TYPE.SESSION_ERROR);
                dispatch(EVENTS.REFRESH);
            } else if (response.status === STATUS_CODES.BAD_RQUEST) {
                dispatch(EVENTS.DISPLAY_ERROR, ERROR_TYPE.ARTICLE_PARAM_ERROR);
            } else if (response.status === STATUS_CODES.NETWORK_ERROR) {
                dispatch(EVENTS.DISPLAY_ERROR, ERROR_TYPE.NETWORK_ERROR);
            }
        });
    }, []);

    const editArticle = useCallback((title, content, tags, id) => {
        api.put(getArticleUrl(id), { title, content, tags }).then(({ article }) => {
            setCurrentArticle(article);
            setPage(PAGE_DETAIL);
        }).catch((response) => {
            if (response.status === STATUS_CODES.UNAUTHORIZED || response.status === STATUS_CODES.FORBIDDEN) {
                dispatch(EVENTS.DISPLAY_ERROR, ERROR_TYPE.SESSION_ERROR);
                dispatch(EVENTS.REFRESH);
            } else if (response.status === STATUS_CODES.BAD_RQUEST) {
                dispatch(EVENTS.DISPLAY_ERROR, ERROR_TYPE.ARTICLE_PARAM_ERROR);
            } else if (response.status === STATUS_CODES.NETWORK_ERROR) {
                dispatch(EVENTS.DISPLAY_ERROR, ERROR_TYPE.NETWORK_ERROR);
            }
        });
    }, [])

    const pageAdd = useMemo(() => {
        return (<div className="home">
            <button onClick={()=>{setPage(PAGE_DISPLAY)}} className="article-action">Home</button>
            <ArticleEdit action={addArticle}></ArticleEdit>
        </div>);
    }, [addArticle]);
    const pageEdit = useMemo(() => {
        if (currentArticle) {
            return (<div className="home">
                <button onClick={() => { setPage(PAGE_DISPLAY) }} className="article-action">Home</button>
                <button onClick={() => { setPage(PAGE_DETAIL) }} className="article-action">Back</button>
                <ArticleEdit action={editArticle} article={{ articleId: currentArticle.id, articleTitle: currentArticle.title, articleContent: currentArticle.content, articleTags: currentArticle.tags}}></ArticleEdit>
            </div>);
        }
    }, [editArticle, currentArticle]);
    const pageDisplay = useMemo(() => {
        return (<div className="home">
            {user && <button onClick={() => { setPage(PAGE_ADD) }} className="article-action">New Article</button>}
        </div>);
    }, [user]);
    const pageDetail = useMemo(() => {
        return (
            <div>
                <button onClick={() => { setPage(PAGE_DISPLAY) }} className="article-action">Home</button>
                <button onClick={() => { setPage(PAGE_EDIT) }} className="article-action">Edit</button>
                {!currentArticle ? <div>loading</div> : <ArticleDetail article={currentArticle}></ArticleDetail>}
            </div>);
    }, [currentArticle]);
    const pageContent = useMemo(()=>{
        let pageRender;
        switch (page) {
            case PAGE_ADD:
                pageRender = pageAdd;
                break;
            case PAGE_DETAIL:
                pageRender = pageDetail;
                break;
            case PAGE_EDIT:
                pageRender = pageEdit;
                break;
            case PAGE_DISPLAY:
            default:
                pageRender = pageDisplay;
                break;
        }
        return pageRender;
    }, [page, pageAdd, pageDetail, pageDisplay, pageEdit]);

    return pageContent;
});

export default Home;