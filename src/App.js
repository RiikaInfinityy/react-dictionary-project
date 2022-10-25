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
                <div className="main-container">
                    {" "}
                    <header className="App-header">
                        <FontAwesomeIcon
                            icon={faShieldCat}
                            beatFade
                            className="main-page-icon"
                        />
                    </header>
                    <Dictionary defaultKeyword="wine" />
                    <Footer />
                </div>
            </div>
        </div>
    );
}

export default App;
