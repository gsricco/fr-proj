import React from 'react';
import SuperButton from "../common/superButton/SuperButton";
import SuperInputText from "../common/superInput/SuperInputText";
import SuperCheckbox from "../common/superCheckbox/SuperCheckbox";
import s from './Pages.module.css'

const TestPage = () => {
    return (
        <div className={s.testPage}>
            <h1>TestPage</h1>
            <div>
                Component SuperButton:
                <SuperButton>SuperButton</SuperButton>
            </div>
            <div>
                Component SuperInput :
                <SuperInputText/>
            </div>
            <div>
                Component SuperCheckbox:
                <SuperCheckbox/>
            </div>
        </div>
    );
};

export default TestPage;