import React from "react";
import io from "socket.io-client";
import "./App.css";
import { Conversation } from "./page/conversation";

const socket = io();

const user = new Date().valueOf();

export class App extends React.PureComponent {

    componentDidMount() {
        socket.emit("LOGIN", user);
    }

    render() {
        return (
            <div className="App">
                <Conversation socket={socket} user={user} />
            </div>
        );
    }
}