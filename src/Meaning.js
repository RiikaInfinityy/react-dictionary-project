import React from "react";
import Synonyms from "./Synonyms";

import "./Results.css";

export default function Meaning(props) {
    return (
        <div className="Meaning">
            <h3>{props.meaning.partOfSpeech}</h3>
            {props.meaning.definitions.map(function (definition, index) {
                return (
                    <div key={index}>
                        <section className="bg-light shadow-sm mt-4">
                            <strong> Definition:</strong>{" "}
                            {definition.definition}
                            <br />
                            <div className="example-text">
                                {definition.example}
                            </div>
                            <Synonyms synonyms={definition.synonyms} />
                        </section>
                    </div>
                );
            })}
        </div>
    );
}
