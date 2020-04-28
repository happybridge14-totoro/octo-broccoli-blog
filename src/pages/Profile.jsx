import React, { memo, useContext, useCallback } from 'react';
import userContext from "../context/user-context";
import themeContext, { DARK_THEME, LIGHT_THEME} from "../context/theme-context";


import api from "../utils/proxy";
import { ERROR_TYPE, STATUS_CODES } from "../utils/error-status";
import { getUserUrl, USER_PROPERTY, USER_CONTACT_PROPERTY} from "../utils/url";
import { EVENTS,dispatch } from '../utils/event';

import EditableInput from "../components/Editable-input";

const Profile = memo(() => {
    const user = useContext(userContext);
    const theme = useContext(themeContext);
    
    const updateProperty = useCallback((property)=>{
        return (newValue)=>{
            api.put(getUserUrl(user.id, property), { [property]: newValue }).then(({ user }) => {
                dispatch(EVENTS.UPDATE_USER, user);
            }).catch(response => {
                if (response.status === STATUS_CODES.UNAUTHORIZED || response.status === STATUS_CODES.FORBIDDEN) {
                    dispatch(EVENTS.DISPLAY_ERROR, ERROR_TYPE.SESSION_ERROR);
                    dispatch(EVENTS.REFRESH);
                } else if (response.status === STATUS_CODES.BAD_RQUEST) {
                    dispatch(EVENTS.DISPLAY_ERROR, ERROR_TYPE.ARTICLE_PARAM_ERROR);
                } else if (response.status === STATUS_CODES.NETWORK_ERROR) {
                    dispatch(EVENTS.DISPLAY_ERROR, ERROR_TYPE.NETWORK_ERROR);
                }
            });
        };
    }, [user]);
    const updateContactInfo = useCallback((property)=>{
        return (newValue)=>{
            updateProperty(USER_PROPERTY.CONTACTINFO)({[property]: newValue});
        };
    }, [updateProperty]);
    return (<div className="profile">
        <section className="basic">
            <h3 className="title">Basic Information</h3>
            <img src="https://img.icons8.com/dusk/64/000000/employee-card.png" alt="name" className="label" title="name"/>
            <EditableInput originValue={user.displayName} update={updateProperty(USER_PROPERTY.DISPLAYNAME)}></EditableInput>
            <img src="https://img.icons8.com/dusk/64/000000/change-theme.png" alt="theme" className="label" title="theme"/>
            <div className="theme">
                <label>
                    Dark :
                    <input type="radio" name="theme" checked={theme === DARK_THEME} onChange={() => updateProperty(USER_PROPERTY.THEME)(DARK_THEME)}/>
                </label>
                <label>
                    Light :
                    <input type="radio" name="theme" checked={theme === LIGHT_THEME} onChange={() => updateProperty(USER_PROPERTY.THEME)(LIGHT_THEME)}/>
                </label>
            </div>
        </section>
        <section className="contact">
            <h3 className="title">Contact Information</h3>
            <img src="https://img.icons8.com/bubbles/50/000000/map-marker.png" alt="area" className="label" title="area"/>
            <EditableInput originValue={user.profile.contactInfo.area} update={updateContactInfo(USER_CONTACT_PROPERTY.AREA)}></EditableInput>
            <img src="https://img.icons8.com/bubbles/50/000000/email.png" alt="email" className="label" title="email"/>
            <EditableInput originValue={user.profile.contactInfo.email} update={updateContactInfo(USER_CONTACT_PROPERTY.EMAIL)}></EditableInput>
            <img src="https://img.icons8.com/doodle/48/000000/github--v1.png" alt="github" className="label" title="github"/>
            <EditableInput originValue={user.profile.contactInfo.github} update={updateContactInfo(USER_CONTACT_PROPERTY.GITHUB)}></EditableInput>
            <img src="https://img.icons8.com/doodle/48/000000/linkedin--v2.png" alt="linkedin" className="label" title="linkedin"/>
            <EditableInput originValue={user.profile.contactInfo.linkedin} update={updateContactInfo(USER_CONTACT_PROPERTY.LINKEDIN)}></EditableInput>
            <img src="https://img.icons8.com/dusk/64/000000/note.png" alt="description" className="label" title="description"/>
            <EditableInput originValue={user.profile.contactInfo.description} update={updateContactInfo(USER_CONTACT_PROPERTY.DESCRIPTION)}></EditableInput>
        </section>
    </div>);
});

export default Profile;