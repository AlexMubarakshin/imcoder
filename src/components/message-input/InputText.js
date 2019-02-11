import React from 'react';
import {
    MdCode,
    MdSentimentSatisfied,
    MdSend
} from "react-icons/md";

import { MESSAGE_TYPE } from "../../util/constants";

export class InputText extends React.PureComponent {

    onPaste = (ev) => {
        ev.preventDefault();
        document.execCommand("insertText", false, ev.clipboardData.getData('text'));
    }

    onKeyDown = (ev) => {
        if (ev.keyCode === 13) {
            //enter
            if (ev.ctrlKey) {
                // ctrl+enter
                document.execCommand("insertText", false, "\n");
            } else {
                // enter
                ev.preventDefault();
                this.onSendMessage();
            }
            return false;
        }
    }

    onSendMessage = () => {
        const message = this.textEditRef.innerText;

        this.props.sendMessage({ value: message, type: MESSAGE_TYPE.TEXT })
        this.textEditRef.innerText = "";
    }

    render() {
        return (
            <div className="mes-input-wrap mes-txt-input-wrap">
                <div
                    ref={ref => this.textEditRef = ref}
                    className="mes-input"
                    spellCheck={false}
                    contentEditable={true}
                    onKeyDown={this.onKeyDown}
                    onPaste={this.onPaste}
                    placeholder="Message..." />


                <div className="icon-group">
                    <div className="icon-wrap">
                        <button className="icon-btn"><MdCode onClick={this.props.onToggleClick} /></button>
                        <button className="icon-btn" onClick={this.onSendMessage}><MdSend /></button>
                    </div>
                </div>
            </div>
        )
    }
}