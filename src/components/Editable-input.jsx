import React, { memo, useState, useCallback, useRef } from "react";
import { useEffect } from "react";

const EditableInput = memo(({ update, originValue="", readonly=false}) => {
    const [value, setValue] = useState(originValue);
    const [isEditMode, setIsEditMode] = useState(false);
    const inputEl = useRef(null);
    const updateData = useCallback((newValue) => {
        if (update) {
            update(newValue);
        }
        setIsEditMode(false);
    }, [update]);
    const edit = useCallback(()=>{
        if (!readonly) { 
            setIsEditMode(true);
        }
    }, [readonly]);
    const cancel = useCallback(() => {
        setValue(originValue);
        setIsEditMode(false);
    }, [originValue]);
    useEffect(()=>{
        if (isEditMode && inputEl && inputEl.current) {
            inputEl.current.focus();
        }
    }, [inputEl, isEditMode]);
    return (<div className="editable-input">
        {isEditMode ? 
        (<div className="edit">
            <input value={value} onChange={(e) => { setValue(e.target.value) }} ref={inputEl}></input>
            <button onClick={() => updateData(value)}>Confirm</button>
            <button onClick={cancel}>Cancel</button>
        </div>) : 
        (<div className="read" onClick={edit}>
            <span>{value||"empty"}</span>
            <img src="https://img.icons8.com/cotton/50/000000/edit.png" alt="edit" className="edit-icon"/>
        </div>)
        }
    </div>);
       
});

export default EditableInput;