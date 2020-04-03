import * as React from "react";
const {memo, useState, useEffect, useRef, useCallback, useReducer} = React;

import {signOut} from "../model/login";
import {sendMessage, receiveMessage, stopMessage} from "../model/chat";
import { STATUS_CODES } from "../utils/status-error-codes";
import {EVENTS, dispatch} from "../utils/event";
import {ERROR_TYPE} from "./error-message";
import { messageBody, messageObject, userObject} from "../model/dataInterface";
import {receiveUsers, stopUser} from "../model/users"

interface ChatProps {
    data: Array<messageBody>
}
export const Chat = memo(({data}:ChatProps) => {
    const [messages, dispatchMessage] = useReducer((state:Array<messageBody>, newMessages:Array<messageBody>):Array<messageBody>=>{
        return [...state, ...newMessages];
    }, data);
    const [users, setUsers] = useState<Array<string>>([]);
    const [usersTimeStamp, setUsersTimeStamp] = useState(0);
    const initTimeStamp = messages.length > 0 ? messages[messages.length - 1].timestamp : 0;
    const [messageTimeStamp, setMessageTimeStamp] = useState(initTimeStamp);
    const messageRef = useRef<HTMLDivElement>(null);
    const userRef = useRef<HTMLDivElement>(null);
    useEffect(()=>{
        if (messageRef && messageRef.current) {
            messageRef.current.scrollTop = messageRef.current.scrollHeight;
        }
    }, []);
    useEffect(()=>{
        receiveUsers(usersTimeStamp).then(({timestamp, users}:userObject)=>{
            setUsersTimeStamp(timestamp);
            setUsers(users);
            if (userRef && userRef.current) {
                userRef.current.scrollTop = userRef.current.scrollHeight;
            }
        }).catch((e:Error)=>{
            stopMessage();
            stopUser();
            dispatch(EVENTS.REFRESH);

        });
    }, [usersTimeStamp, setUsersTimeStamp, setUsers, userRef]);
    useEffect(()=>{
        receiveMessage(messageTimeStamp).then(({timestamp, message}:messageObject)=>{
            setMessageTimeStamp(timestamp);
            dispatchMessage(message);
            if (messageRef && messageRef.current) {
                messageRef.current.scrollTop = messageRef.current.scrollHeight;
            }
        });
    }, [messageTimeStamp, setMessageTimeStamp, dispatchMessage, messageRef]);
    const renderUser = () => {
        return users.map((user:string, index:number) =>{
            return (<div className="user-name" key={index}>{user}</div>);
        });
    };
    const renderMessage = () => {
        return messages.map(({userName, message, timestamp}:messageBody)=>{
            const time = new Date(timestamp).toLocaleString();
            return (
                <div className="single-chat" key={timestamp}>
                    <time className="chat-time">{time}</time>
                    <div className="chat-name">{userName}</div>
                    <div className="chat-content">{message}</div>
                </div>
            );
        });
    };
    const [message, setMessage] = useState("");
    const [sendButtonDisabled, setSendButtonDisabled] = useState(false);

    const send = useCallback(async (event:React.MouseEvent) => {
        event.preventDefault();
        try {
            const response:Response = await sendMessage(message);
            if (response.ok) {
                dispatch(EVENTS.HIDE_ERROR);
                setMessage("");
                setSendButtonDisabled(true);
            } else {
                if (response.status === STATUS_CODES.UNAUTHORIZED) {
                    stopMessage();
                    stopUser();
                    dispatch(EVENTS.REFRESH);
                } 
            }
        } catch(e) {
            dispatch(EVENTS.DISPLAY_ERROR, ERROR_TYPE.NETWORK_ERROR);
        }
    }, [message, setSendButtonDisabled]);

    const handleInput = useCallback((e:React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        const value = e.target.value;
        setMessage(value);
        setSendButtonDisabled(value === "");
    }, [setMessage, setSendButtonDisabled]);

    const signOutHandler = useCallback((event:React.MouseEvent)=>{
        event.preventDefault();
        signOut().then(() => {
            stopUser();
            stopMessage();
            dispatch(EVENTS.REFRESH);
        });
    }, []);

    return (<div>
        <div className="chat-page">
            <section className="users-list">
                <h5>Users</h5>
                <div className="users-detail" ref={userRef}>
                    {renderUser()}
                </div>
            </section>
            <section className="chat-list">
                <h5 className="chat-title">Messages</h5>
                <div className="chat-detail" ref={messageRef}>
                    {renderMessage()}
                </div>
            </section>
        </div>
        <div className="chat-action">
            <span>Message:</span>
            <input type="text" className="message" minLength={1} value={message} onChange={handleInput}/>
            <button className="send" onClick={send} disabled={sendButtonDisabled}>Send</button>
        </div>
        <div className="user-action">
            <button className="signout" onClick={signOutHandler}>Sign out</button>
        </div>
    </div>);
});