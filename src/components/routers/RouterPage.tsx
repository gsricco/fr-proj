import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import Login from "../pages/Login";
import Registration from "../pages/Registration";
import Profile from "../pages/Profile";
import PasswordRecovery from "../pages/PasswordRecovery";
import AddNewPassword from "../pages/AddNewPassword";
import TestPage from "../pages/TestPage";
import Error404 from "../pages/Error404";

export const PATH = {
    LOGIN: '/login',
    REGISTRATION: '/registration',
    PROFILE: '/profile',
    PASSWORD_RECOVERY: '/password-recovery',
    ADD_NEW_PASSWORD: '/new-password',
    TEST_PAGE: '/test-page'
}

const RouterPage = () => {
    return (
        <div>
            <Routes>
                <Route path={'/'} element={<Navigate to={PATH.TEST_PAGE}/>}/>
                <Route path={PATH.LOGIN} element={<Login/>}/>
                <Route path={PATH.REGISTRATION} element={<Registration/>}/>
                <Route path={PATH.PROFILE} element={<Profile/>}/>
                <Route path={PATH.PASSWORD_RECOVERY} element={<PasswordRecovery/>}/>
                <Route path={PATH.ADD_NEW_PASSWORD} element={<AddNewPassword/>}/>
                <Route path={PATH.TEST_PAGE} element={<TestPage/>}/>
                <Route path={'/*'} element={<Error404/>}/>
            </Routes>
        </div>
    );
};

export default RouterPage;