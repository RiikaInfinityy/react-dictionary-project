import React from "react";

import Meaning from "./Meaning";
import Phonetics from "./Phonetics";

import "./Results.css";

export default function Result(props) {
    if (props.results) {
        return (
            <div className="Result">
                {" "}
                <section className="bg-light shadow-sm">
                    <h2>{props.results.word}</h2>
                    {props.results.phonetics.map(function (phonetic, index) {
                        return (
                            <div key={index}>
                                <Phonetics phonetic={phonetic} />
                            </div>
                        );
                    })}
                </section>
                {props.results.meanings.map(function (meaning, index) {
                    return (
                        <div key={index}>
                            <section className="bg-white shadow-sm">
                                {" "}
                                <Meaning meaning={meaning} />
                            </section>
                        </div>
                    );
                })}
                <br />
            </div>
        );
    } else {
        return null;
    }
}
