import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeHigh } from "@fortawesome/free-solid-svg-icons";

import "./Results.css";

export default function Phonetics(props) {
    return (
        <div className="Phonetics">
            <a href={props.phonetic.audio} target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faVolumeHigh} className="audio-format" />
            </a>
            <span className="phonetic-text">
                <strong>{props.phonetic.text}</strong>
            </span>
        </div>
    );
}
