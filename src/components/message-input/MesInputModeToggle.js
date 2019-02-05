import React from "react";

import {
    MdCode,
    MdTextFormat
} from "react-icons/md";

export const ModeToggle = (props) => {
    return (
        <div className="icon-float">
            <button className="icon-btn" onClick={props.onToggleClick}>
                {props.isCodeMode ? <MdTextFormat /> : <MdCode />}
            </button>
        </div>
    );
};