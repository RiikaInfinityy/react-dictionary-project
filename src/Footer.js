import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { BrowserChrome } from "react-bootstrap-icons";
import { CodeSquare } from "react-bootstrap-icons";
import { BracesAsterisk } from "react-bootstrap-icons";

import "./Footer.css";

export default function Footer() {
    return (
        <div className="Footer">
            <hr />
            <div className="link">
                <a
                    href="https://github.com/RiikaInfinityy/react-dictionary-project"
                    className="btn btn-light btn-outline-secondary btn-lg btn-edit"
                    target="_blank"
                    alt="Github Open Source Code for Project"
                    rel="noopener noreferrer"
                >
                    <CodeSquare className="footer-icon" />
                </a>{" "}
                <a
                    href="https://rikalim-portfolio-webpage.netlify.app/"
                    className="btn btn-light btn-outline-secondary btn-lg btn-edit"
                    target="_blank"
                    alt="Rika Lim's Front-End Portfolio"
                    rel="noopener noreferrer"
                >
                    <BracesAsterisk className="footer-icon" />
                </a>{" "}
                <a
                    href="https://www.shecodes.io/graduates/49436-rika-lim-ming-xian"
                    className="btn btn-light btn-outline-secondary btn-lg btn-edit"
                    target="_blank"
                    alt="Coded by Rika Lim"
                    rel="noopener noreferrer"
                >
                    <FontAwesomeIcon
                        icon={faUserCircle}
                        className="footer-icon"
                    />
                </a>{" "}
                <a
                    href="https://rikalim.com"
                    className="btn btn-light btn-outline-secondary btn-lg btn-edit"
                    target="_blank"
                    alt="Rika Lim's Game Dev Portfolio"
                    rel="noopener noreferrer"
                >
                    <BrowserChrome className="footer-icon" />
                </a>
                <p />
            </div>
        </div>
    );
}
