import React, { useState } from "react";
import { CHAT_PROGRAMMING_LANGUAGES } from "../../util/constants";

export const LanguageSelect = (props) => {

    const [languagesList, filterLanguagesList] = useState(CHAT_PROGRAMMING_LANGUAGES);

    const onSelect = (d) => (ev) => {
        props.setShow(false);
        props.onSelect && props.onSelect(d);
    };

    const filter = (ev) => {
        const value = ev.target.value;
        if (value) {
            filterLanguagesList(CHAT_PROGRAMMING_LANGUAGES.filter(d => d.toUpperCase().includes(value.toUpperCase())));
        } else {
            filterLanguagesList(CHAT_PROGRAMMING_LANGUAGES);
        }
    };

    return (
        <>
            <div className="model-con" data-show={props.show}>
                <div className="model-list">
                    {
                        languagesList.map(d => (<button key={d} data-current={props.language === d} onClick={onSelect(d)}>{d}</button>))
                    }
                </div>
                <input className="model-search" onChange={filter} type="text" />
            </div>

            <button
                className="icon-btn"
                onClick={props.setShow}>
                <span className="icon-lan">{props.language}</span>
            </button>
        </>
    );
};