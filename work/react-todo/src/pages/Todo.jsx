import React, {useState, memo, useEffect, useCallback, useReducer, useMemo} from "react";

import {EVENTS, dispatch} from "../utils/event";
import {ERROR_TYPE, STATUS_CODES} from "../utils/error-status";
import api from "../utils/proxy";

import UserActions from "./User-action";
import ItemActions from "./Item-action";

const TASK_URL = "/tasks/";
const TYPE_ADD = "add";
const TYPE_UPDATE = "update";
const TYPE_REFRESH = "refresh";
const TYPE_REMOVE = "remove";

const ORDER_DEFAULT = "none";
const ORDER_ASC = "asc";
const ORDER_DESC = "desc";
const ORDER_DONE = "done";
const ORDER_NOT_DONE = "notdone";

const Todo = memo(({username}) => {
    const tasksURL = useMemo(() => TASK_URL + username, [username])
    const [filterShowDone, setFilterShowDone] = useState(true);
    const [order, setOrder] = useState(ORDER_DEFAULT);
    const itemsReducer = useCallback((state, action) => {
        const items = action.items;
        let newState = {};
        switch (action.type) {
            case TYPE_ADD:
            case TYPE_UPDATE:
                newState = {...state, ...items};
                break;
            case TYPE_REFRESH:
                newState = items;
                break;
            case TYPE_REMOVE:
                const id = action.id;
                newState = {...state};
                delete newState[id];
                break;
            default:
                throw new Error();
        }
        return newState;
    }, []);
    const [items, dispatchItems] = useReducer(itemsReducer, {});
    const addItem = useCallback((newItem) => {
        const task = {
            content: newItem,
            done: false,
            timestamp: Date.now()
        };
        return api.post(tasksURL, {task}).then(({data})=>{
            const {taskId} = data;
            return api.get(tasksURL + "/" + taskId);
        }).then(({data})=>{
            const {taskId} = data;
            const items = {
                [taskId]: data
            };
            dispatch(EVENTS.HIDE_ERROR);
            dispatchItems({type: TYPE_ADD, items});
        }).catch((response)=>{
            if (response.status === STATUS_CODES.UNAUTHORIZED || response.status === STATUS_CODES.FORBIDDEN) {
                dispatch(EVENTS.DISPLAY_ERROR, ERROR_TYPE.SESSION_ERROR);
                dispatch(EVENTS.REFRESH);
            } else if (response.status === STATUS_CODES.NETWORK_ERROR) {
                dispatch(EVENTS.DISPLAY_ERROR, ERROR_TYPE.NETWORK_ERROR);
            } else if (response.status === STATUS_CODES.BAD_RQUEST || response.status === STATUS_CODES.NOT_FOUND) {
                dispatch(EVENTS.DISPLAY_ERROR, ERROR_TYPE.TASK_PARAM_ERROR);
            }
        });
    }, [tasksURL]);

    const refreshItems = useCallback(() => {
        api.get(tasksURL).then(({data}) => {
            dispatch(EVENTS.HIDE_ERROR);
            dispatchItems({type: TYPE_REFRESH, items: data});
        }).catch((response) => {
            if (response.status === STATUS_CODES.UNAUTHORIZED || response.status === STATUS_CODES.FORBIDDEN) {
                dispatch(EVENTS.DISPLAY_ERROR, ERROR_TYPE.SESSION_ERROR);
                dispatch(EVENTS.REFRESH);
            } else if (response.status === STATUS_CODES.NETWORK_ERROR) {
                dispatch(EVENTS.DISPLAY_ERROR, ERROR_TYPE.NETWORK_ERROR);
            } else if (response.status === STATUS_CODES.BAD_RQUEST || response.status === STATUS_CODES.NOT_FOUND) {
                dispatch(EVENTS.DISPLAY_ERROR, ERROR_TYPE.TASK_PARAM_ERROR);
            }
        });
    }, [tasksURL]);

    const deleteAll = useCallback(()=>{
        api.delete(tasksURL).then(()=>{
            refreshItems();
        }).catch((response) => {
            if (response.status === STATUS_CODES.UNAUTHORIZED || response.status === STATUS_CODES.FORBIDDEN) {
                dispatch(EVENTS.DISPLAY_ERROR, ERROR_TYPE.SESSION_ERROR);
                dispatch(EVENTS.REFRESH);
            } else if (response.status === STATUS_CODES.NETWORK_ERROR) {
                dispatch(EVENTS.DISPLAY_ERROR, ERROR_TYPE.NETWORK_ERROR);
            } else if (response.status === STATUS_CODES.BAD_RQUEST || response.status === STATUS_CODES.NOT_FOUND) {
                // Do nothing here
                // dispatch(EVENTS.DISPLAY_ERROR, ERROR_TYPE.TASK_PARAM_ERROR);
            }
        });
    }, [tasksURL, refreshItems]);

    const handleCheck = useCallback((done, item) => {
        const urlWithId = tasksURL + "/" + item.taskId;
        const newItem = {...item, done};
        api.put(urlWithId, {task: newItem}).then(()=>{
            dispatch(EVENTS.HIDE_ERROR);
            dispatchItems({type: TYPE_UPDATE, items:{[item.taskId]: newItem}});
        }).catch((response)=>{
            if (response.status === STATUS_CODES.UNAUTHORIZED || response.status === STATUS_CODES.FORBIDDEN) {
                dispatch(EVENTS.DISPLAY_ERROR, ERROR_TYPE.SESSION_ERROR);
                dispatch(EVENTS.REFRESH);
            } else if (response.status === STATUS_CODES.NETWORK_ERROR) {
                dispatch(EVENTS.DISPLAY_ERROR, ERROR_TYPE.NETWORK_ERROR);
            } else if (response.status === STATUS_CODES.BAD_RQUEST || response.status === STATUS_CODES.NOT_FOUND) {
                dispatch(EVENTS.DISPLAY_ERROR, ERROR_TYPE.TASK_PARAM_ERROR);
            }
        });
    }, [tasksURL]);

    const handleDelete = useCallback((id)=>{
        const urlWithId = tasksURL + "/" + id;
        api.delete(urlWithId).then(()=>{
            dispatchItems({type: TYPE_REMOVE, id});
        }).catch((response) => {
            if (response.status === STATUS_CODES.UNAUTHORIZED || response.status === STATUS_CODES.FORBIDDEN) {
                dispatch(EVENTS.DISPLAY_ERROR, ERROR_TYPE.SESSION_ERROR);
                dispatch(EVENTS.REFRESH);
            } else if (response.status === STATUS_CODES.NETWORK_ERROR) {
                dispatch(EVENTS.DISPLAY_ERROR, ERROR_TYPE.NETWORK_ERROR);
            } else if (response.status === STATUS_CODES.BAD_RQUEST || response.status === STATUS_CODES.NOT_FOUND) {
                dispatch(EVENTS.DISPLAY_ERROR, ERROR_TYPE.TASK_PARAM_ERROR);
            }
        });
    }, [tasksURL]);

    const handleTextChange = useCallback((content, item) => {
        const urlWithId = tasksURL + "/" + item.taskId;
        const newItem = {...item, content};
        api.put(urlWithId, {task: newItem}).then(()=>{
            dispatch(EVENTS.HIDE_ERROR);
            dispatchItems({type: TYPE_UPDATE, items:{[item.taskId]: newItem}});
        }).catch((response)=>{
            if (response.status === STATUS_CODES.UNAUTHORIZED || response.status === STATUS_CODES.FORBIDDEN) {
                dispatch(EVENTS.DISPLAY_ERROR, ERROR_TYPE.SESSION_ERROR);
                dispatch(EVENTS.REFRESH);
            } else if (response.status === STATUS_CODES.NETWORK_ERROR) {
                dispatch(EVENTS.DISPLAY_ERROR, ERROR_TYPE.NETWORK_ERROR);
            } else if (response.status === STATUS_CODES.BAD_RQUEST || response.status === STATUS_CODES.NOT_FOUND) {
                dispatch(EVENTS.DISPLAY_ERROR, ERROR_TYPE.TASK_PARAM_ERROR);
            }
        });

    }, [tasksURL]);

    useEffect(()=>{
        refreshItems();
    }, [refreshItems]);
 
    const renderItems = useCallback(() => {
        let itemsToRender = Object.values(items);
        if (!filterShowDone) {
            itemsToRender = itemsToRender.filter((item)=>{
                return !item.done;
            });
        }
        switch (order) {
            case ORDER_ASC:
                itemsToRender.sort((a, b) => a.content.localeCompare(b.content))
                break;
            case ORDER_DESC:
                itemsToRender.sort((a, b) => b.content.localeCompare(a.content));
                break;
            case ORDER_DONE:
                itemsToRender.sort((a, b) => {
                    if ((a.done && b.done) || (!a.done && !b.done)) {
                        return b.timestamp - a.timestamp;
                    } else {
                        if (a.done) {
                            return 1;
                        } else {
                            return -1;
                        }
                    }
                });
                break;
            case ORDER_NOT_DONE:
                itemsToRender.sort((a, b) => {
                    if ((a.done && b.done) || (!a.done && !b.done)) {
                        return b.timestamp - a.timestamp;
                    } else {
                        if (a.done) {
                            return -1;
                        } else {
                            return 1;
                        }
                    }
                });
                break;
            default:
                itemsToRender.sort((a, b)=>(b.timestamp - a.timestamp));
                break;
        }
        return itemsToRender.map((item) => {
            return (<div key={item.taskId} className="item">
                <input type="checkbox" checked={item.done} onChange={(e)=>{handleCheck(e.target.checked, item)}}/>
                <input type="text" onChange={(e)=>{handleTextChange(e.target.value, item)}} value={item.content} className={item.done ? "done item-detail" : "item-detail"}/>
                <button onClick={()=>{handleDelete(item.taskId)}} className="delete">delete</button>
            </div>);
        });
    }, [items, handleCheck, handleDelete, handleTextChange, filterShowDone, order]);

    return (
        <div>
            <div className="options">
                <div className="filters">
                    <label htmlFor="filter">Hide done tasks:</label>
                    <input id="filter" name="filter" type="checkbox" checked={!filterShowDone} onChange={(e)=>setFilterShowDone(!e.target.checked)}/>
                </div>
                <div className="orders">
                    <span>Order:</span>
                    <input type="radio" id="none" name="order" value="none" checked={order === ORDER_DEFAULT} onChange={()=>setOrder(ORDER_DEFAULT)}/>
                    <label htmlFor="none">Latest</label>
                    <input type="radio" id="asc" name="order" value="asc" checked={order === ORDER_ASC} onChange={()=>setOrder(ORDER_ASC)}/>
                    <label htmlFor="asc">A-Z</label>
                    <input type="radio" id="desc" name="order" value="desc" checked={order === ORDER_DESC} onChange={()=>setOrder(ORDER_DESC)}/>
                    <label htmlFor="desc">Z-A</label>
                    <input type="radio" id="done" name="order" value="dont" checked={order === ORDER_DONE} onChange={()=>setOrder(ORDER_DONE)}/>
                    <label htmlFor="desc">Done</label>
                    <input type="radio" id="notdont" name="order" value="notdone" checked={order === ORDER_NOT_DONE} onChange={()=>setOrder(ORDER_NOT_DONE)}/>
                    <label htmlFor="desc">Not Done</label>
                </div>
            </div>
            <div className="items">
                {renderItems()}
            </div>
            <ItemActions deleteAll={deleteAll} refreshItems={refreshItems} addItem={addItem}></ItemActions>
            <UserActions username={username}></UserActions>
        </div>
    );
});

export default Todo;