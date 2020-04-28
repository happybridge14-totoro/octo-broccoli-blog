import React, { useState, memo, useReducer, useCallback } from "react";

const ACTION_ADD = "add";
const ACTION_REMOVE = "remove";

const ArticleEdit = memo(({ article = {}, action }) => {
    const {articleId = "", articleTitle = "", articleContent = "", articleTags = []} = article;
    const [title, setTitle] = useState(articleTitle);
    const [content, setContent] = useState(articleContent);
    const [newTag, setNewTag] = useState("");
    const reducer = (state, action) => {
        const tag = action.tag;
        switch (action.type) {
            case ACTION_ADD:
                if (state.indexOf(tag) === -1) {
                    return [...state, tag];
                }
                return state;
            case ACTION_REMOVE:
                const index = state.indexOf(tag);
                if (index > -1) {
                    return [...state.slice(0, index), ...state.slice(index+1)];
                }
                return state;
            default:
                throw new Error("Wrong action type! Type: " + action.type);
        }
    };
    const [tags, dispatch] = useReducer(reducer, articleTags);
    const addNewTag = useCallback(() => {
        dispatch({ type: ACTION_ADD, tag: newTag});
        setNewTag("");
    }, [newTag]);

    return (
        <div className="article-edit">
            <label > Title: </label>
            <input type="text" name="title" onChange={(e)=>{setTitle(e.target.value)}} value={title}/>
            <label > Content: </label>
            <textarea name="" cols="30" rows="10" className="content" onChange={(e) => { setContent(e.target.value) }}  value={content}></textarea>
            <span>Tags:</span>
            <div className="tags">
                {tags.map((tag) => {
                    return (<div key={tag} className="tag-edit">
                        <span>{tag}</span>
                        <button className="tag-delete" onClick={() => { dispatch({ type: ACTION_REMOVE, tag})}}>X</button>
                    </div>
                )})}
            </div>
            <label>Add tag:</label>
            <div>
                <input className="new-tag" type="text" value={newTag} onChange={(e)=>{setNewTag(e.target.value)}}/>
                <button className="tag-add" onClick={addNewTag} disabled={!newTag}>Add tag</button>
            </div>
            <button disabled={!title} onClick={() => { action(title, content, tags, articleId)}}>{articleTitle ? "Update" : "Submit"}</button>
        </div>
    );
});

export default ArticleEdit;