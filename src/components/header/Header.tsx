import React from 'react';
import {NavLink} from "react-router-dom";
import {PATH} from "../routers/RouterPage";
import s from "./Header.module.css"

const Header = () => {
    return (
        <div className={s.nav}>
            <NavLink to={PATH.LOGIN} className={({isActive}) => isActive ? s.active : s.item}>
                Login
            </NavLink>
            <NavLink to={PATH.ADD_NEW_PASSWORD} className={({isActive}) => isActive ? s.active : s.item}>
                NewPassword
            </NavLink>
            <NavLink to={PATH.PROFILE} className={({isActive}) => isActive ? s.active : s.item}>
                Profile
            </NavLink>
            <NavLink to={PATH.PASSWORD_RECOVERY} className={({isActive}) => isActive ? s.active : s.item}>
                PasswordRecovery
            </NavLink>
            <NavLink to={PATH.REGISTRATION} className={({isActive}) => isActive ? s.active : s.item}>
                Registration
            </NavLink>
            <NavLink to={PATH.TEST_PAGE} className={({isActive}) => isActive ? s.active : s.item}>
                TestPage
            </NavLink>
                <img src="https://i.pinimg.com/originals/15/bc/a4/15bca4c2ceaf34bd303b7f3a74d9b3c8.gif"
                     alt="error animation"/>
        </div>
    );
};

export default Header;