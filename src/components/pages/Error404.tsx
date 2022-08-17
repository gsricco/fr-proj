import React from 'react';
import s from './Pages.module.css'
import {PATH} from "../routers/RouterPage";
import {NavLink} from "react-router-dom";

const Error404 = () => {
    return (
        <div className={s.pageError}>
            <div>
                <img src="https://data.whicdn.com/images/244793515/original.gif" alt="error animation"/>
            </div>
            <div>
                <span>404</span>
            </div>
            <div>Page not found!</div>
            <div>
                <NavLink to={PATH.LOGIN}>Back to LoginPage</NavLink>
            </div>
        </div>
    );
};

export default Error404;