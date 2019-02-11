import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import diff from "../../util/diff";
import {
    MdContentCopy,
    MdReply,
    MdRateReview
} from "react-icons/md";

import "highlight.js/styles/atom-one-dark.css";
import "./MesContent.css";

import { MESSAGE_TYPE } from "../../util/constants";

export const MessageContent = (props) => {

    const onCopy = () => {
        props.onSetMsg(props.data, 1);
    };

    const onReview = () => {
        props.onSetMsg(props.data, 3);
    };

    const isCodeMessage = props.data.type === MESSAGE_TYPE.CODE;
    if (isCodeMessage) {
        const differ = props.data.diff;
        const result = differ ? diff(differ, props.data.message) : props.data.message;
        return (
            <div className="mes-inner">
                <SyntaxHighlighter
                    useInlineStyles={false}
                    wrapLines={true}
                    language={differ ? "diff" : props.data.language}
                >
                    {result}
                </SyntaxHighlighter>
                <div className="mes-action" >
                    <i className="mes-action-btn" onClick={onCopy}><MdContentCopy /></i>
                    <i className="mes-action-btn"><MdReply /></i>
                    <i className="mes-action-btn" onClick={onReview}><MdRateReview /></i>
                </div>
            </div>
        );
    }

    return (
        <div className="mes-inner">
            <p className="mes-txt">{props.data.message}</p>
            <div className="mes-action" >
                <i className="mes-action-btn" onClick={onCopy}><MdContentCopy /></i>
                <i className="mes-action-btn"><MdReply /></i>
            </div>
        </div>
    );
};