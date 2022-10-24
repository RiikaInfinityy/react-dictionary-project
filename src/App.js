import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShieldCat } from "@fortawesome/free-solid-svg-icons";

import "./App.css";

import Footer from "./Footer";

function App() {
    return (
        <div className="App">
            <div className="main-body">
                <header className="App-header">
                    <FontAwesomeIcon
                        icon={faShieldCat}
                        beatFade
                        className="main-page-icon"
                    />

                    <h1>DICTIONARY</h1>
                    <h4>What word do you want to look up?</h4>
                </header>
            </div>
            <Footer />
        </div>
    );
}

export default App;
