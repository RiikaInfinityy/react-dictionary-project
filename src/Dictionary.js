import React, { useState } from "react";
import axios from "axios";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

import Result from "./Result";

import "./Dictionary.css";

export default function Dictionary() {
    let [keyword, setKeyword] = useState("");
    let [results, setResults] = useState(null);

    function handleResponse(response) {
        setResults(response.data[0]);
    }

    function search(event) {
        event.preventDefault();

        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
        axios.get(apiUrl).then(handleResponse);
    }

    function handleKeywordChange(event) {
        setKeyword(event.target.value);
    }

    return (
        <div className="Dictionary">
            <h1>DICTIONARY</h1>
            <Form onSubmit={search}>
                <InputGroup className="mb-3 mt-3 ps-4 pe-4">
                    <Form.Control
                        type="search"
                        className="form-control"
                        placeholder="Search for a word"
                        aria-label="Word"
                        aria-describedby="word-search"
                        onChange={handleKeywordChange}
                    />
                    <Button
                        variant="outline-secondary"
                        type="submit"
                        className="btn btn-light btn-outline-secondary btn-format"
                    >
                        <FontAwesomeIcon
                            icon={faMagnifyingGlass}
                            className="search-icon"
                        />
                    </Button>
                </InputGroup>
            </Form>
            <Result results={results} />
        </div>
    );
}
