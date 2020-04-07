import React, {useState, memo, useEffect, useCallback} from "react";
import {EVENTS, addEventListener, removeEventListener, dispatch} from "../utils/event";
import UserActions from "./User-action";

const Todo = memo(({username}) => {
    return (
        <div>
            <UserActions username={username}></UserActions>
        </div>
    );
}, );

export default Todo;