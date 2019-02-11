import React from 'react';

import { InputCode } from './InputCode';

import { InputText } from './InputText';
import { MESSAGE_TYPE } from '../../util/constants';

export class MesInput extends React.PureComponent {

    constructor(props) {
        super(props);

        this.state = {
            mode: MESSAGE_TYPE.TEXT,
            message: "",
            hidden: false
        }
    }

    toggleMode = () => {
        const nextMode = this.state.mode === MESSAGE_TYPE.CODE ? MESSAGE_TYPE.TEXT : MESSAGE_TYPE.CODE;
        this.setInputMode(nextMode)
    }

    setInputMode = mode => {
        this.setState({
            mode
        })
    }

    sendMessage = (message) => {
        if (!message.value) {
            return;
        }

        this.props.onConfirm && this.props.onConfirm({
            message: message.value,
            type: message.type,
            language: message.language
        });
    }

    render() {
        const { props, state } = this;

        if (props.msg.id) {
            const { type, message, language } = props.msg;
            // this.toggleLanguage(language);
            this.toggleMode();
            if (type === MESSAGE_TYPE.CODE) {
                this.setInputMode(MESSAGE_TYPE.CODE);
                this.codeInputRef.setLanguage(language)
                this.codeInputRef.editorRef.editor.setValue(message);
            } else {
                this.setInputMode(MESSAGE_TYPE.TEXt);
                this.textEditRef.textEditRef.innerText = message;
            }
        }

        const isCodeMode = state.mode === MESSAGE_TYPE.CODE;

        return (
            <div className="mes-input-con" data-code-mode={isCodeMode}>
                <InputText
                    onToggleClick={this.toggleMode}
                    ref={ref => this.textEditRef = ref}
                    sendMessage={this.sendMessage} />
                <InputCode
                    onToggleClick={this.toggleMode}
                    ref={ref => this.codeInputRef = ref}
                    sendMessage={this.sendMessage} />
                {/* </div> */}
            </div>
        )
    }
}
