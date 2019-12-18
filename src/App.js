import React from 'react';
import ProfileApp from "./components/profile/ProfileApp";
import './App.css';
import './bootstrap.css';


function App() {
    return (
        <div>
            <div className="wrapper">
                <ProfileApp/>
                <div className="push"></div>
            </div>
        </div>
    )
}

export default App;
