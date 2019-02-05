import React from 'react';

import {
    MdCode,
    MdSend
} from "react-icons/md";

import CodeMirror from '@uiw/react-codemirror';
import 'codemirror/keymap/sublime';
import 'codemirror/theme/neo.css';

import { LanguageSelect } from "./LanguageSelect";

import { MESSAGE_TYPE } from "../../util/constants";

export class InputCode extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            languageListHidden: true,
            language: "JavaScript"
        }
    }

    setLanguage = (language) => {
        this.setState({
            language
        });
    }

    toggleLanguagesVisible = () => {
        this.setState({
            languageListHidden: !this.state.languageListHidden
        })
    }

    onSend = () => {
        const message = this.editorRef.editor.getValue();
        this.props.sendMessage({ value: message, type: MESSAGE_TYPE.CODE, language: this.state.language });

        this.editorRef.editor.setValue("");
    }

    render() {
        const { language } = this.state;
        return (
            <div className="mes-input-wrap mes-code-input-wrap">
                <LanguageSelect
                    onSelect={this.setLanguage}
                    show={!this.state.languageListHidden}
                    setShow={this.toggleLanguagesVisible}
                    language={language} />

                <div className="code-edit">
                    <CodeMirror
                        ref={node => this.editorRef = node}
                        options={{
                            theme: 'neo',
                            placeholder: 'Message...',
                            keyMap: 'sublime',
                            lineNumbers: false,
                            dragDrop: true,
                            mode: language,
                        }}
                    />
                </div>

                <div className="icon-group">
                    <div className="icon-wrap">
                        <button className="icon-btn"><MdCode /></button>
                        <button className="icon-btn" onClick={this.onSend}><MdSend /></button>
                    </div>
                </div>
            </div>
        )
    }
}