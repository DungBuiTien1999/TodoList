import React from 'react';
import { useHistory } from 'react-router-dom';

export default function AuthInfo() {
    const history = useHistory()
    const btnSignOut_Clicked = () => {
        delete localStorage.todoApp_accessToken;
        delete localStorage.todoApp_userId;
        history.push('/login');
    }
    return (
        <div className="nav">
            <span>UserId: {localStorage.todoApp_userId}</span>
            <button type="button" onClick={btnSignOut_Clicked}>Sign Out</button>
        </div>
    )
}
