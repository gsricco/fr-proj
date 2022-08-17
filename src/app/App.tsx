import React from 'react';
import './App.css';
import Header from "../components/header/Header";
import RouterPage from "../components/routers/RouterPage";

function App() {
    return (
        <div className="App">
            <Header/>
            <RouterPage/>
        </div>
    );
}

export default App;
