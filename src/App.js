import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShieldCat } from "@fortawesome/free-solid-svg-icons";

import Footer from "./Footer";
import Dictionary from "./Dictionary";

import "./App.css";

function App() {
    return (
        <div className="App">
            <div className="main-body">
                {" "}
                <header className="App-header">
                    <FontAwesomeIcon
                        icon={faShieldCat}
                        beatFade
                        className="main-page-icon"
                    />
                </header>
            </div>
            <Dictionary defaultKeyword="wine" />
            <Footer />
        </div>
    );
}

export default App;
