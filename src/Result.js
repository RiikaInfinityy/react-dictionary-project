import React from "react";

import Meaning from "./Meaning";

import "./Results.css";

export default function Result(props) {
    if (props.results) {
        return (
            <div className="Result">
                <h2>{props.results.word}</h2>
                <h3>{props.results.phonetic}</h3>

                {props.results.meanings.map(function (meaning, index) {
                    return (
                        <div key={index}>
                            <Meaning meaning={meaning} />
                        </div>
                    );
                })}
            </div>
        );
    } else {
        return null;
    }
}