import React, { memo, useState, useMemo, useContext,  useCallback } from 'react';

import userContext from "../context/user-context";

import { ERROR_TYPE, STATUS_CODES } from "../utils/error-status";
import { EVENTS, dispatch } from "../utils/event";
import api from "../utils/proxy";
import { getArticleUrl} from "../utils/url";

import ArticleEdit from "../components/Article-edit";
import ArticleDetail from "../components/Article-detail";
import ArticleList from "../components/Article-list";

const PAGE_ADD = "addPage";
const PAGE_DISPLAY = "displayPage";
const PAGE_DETAIL = "detailPage";
const PAGE_EDIT = "editPage";

const Home = memo(() => {
    const user = useContext(userContext);
    const [page, setPage] = useState(PAGE_DISPLAY);
    const [currentArticle, setCurrentArticle] = useState(null);

    const modifyArticle = useCallback((title, content, tags, id)=>{
        const param = { title, content, tags };
        const promise = id ? api.put(getArticleUrl(id), param) : api.post(getArticleUrl(), param);
        promise.then(({article})=>{
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

    const displayDetail = useCallback((article)=>{
        setCurrentArticle(article);
        setPage(PAGE_DETAIL);
    }, []);

    const updateThumbup = useCallback((count)=>{
        setCurrentArticle({ ...currentArticle, thumbups:count});
    }, [currentArticle]);

    const pageAdd = useMemo(() => {
        return (<div className="home">
            <button onClick={()=>{setPage(PAGE_DISPLAY)}} className="article-action">Home</button>
            <ArticleEdit action={modifyArticle}></ArticleEdit>
        </div>);
    }, [modifyArticle]);
    const pageEdit = useMemo(() => {
        if (currentArticle) {
            return (<div className="home">
                <button onClick={() => { setPage(PAGE_DISPLAY) }} className="article-action">Home</button>
                <button onClick={() => { setPage(PAGE_DETAIL) }} className="article-action">Cancel</button>
                <ArticleEdit action={modifyArticle} article={{ articleId: currentArticle.id, articleTitle: currentArticle.title, articleContent: currentArticle.content, articleTags: currentArticle.tags}}></ArticleEdit>
            </div>);
        }
    }, [modifyArticle, currentArticle]);
    const pageDisplay = useMemo(() => {
        return (<div className="home">
            {user && <button onClick={() => { setPage(PAGE_ADD) }} className="article-action">New Article</button>}
            <ArticleList displayDetail={displayDetail}></ArticleList>
        </div>);
    }, [user]);
    const pageDetail = useMemo(() => {
        return (
            <div>
                <button onClick={() => { setPage(PAGE_DISPLAY) }} className="article-action">Home</button>
                <button onClick={() => { setPage(PAGE_EDIT) }} className="article-action">Edit</button>
                {!currentArticle ? <div>loading</div> : <ArticleDetail article={currentArticle} updateThumbup={updateThumbup}></ArticleDetail>}
            </div>);
    }, [currentArticle, updateThumbup]);
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