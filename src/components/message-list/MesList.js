import React, { useEffect, useRef } from "react";

import { MessageContent } from "../message-content/MesContent";

import "./MesList.css";

export const MesList = (props) => {

    const MesList = useRef(null);

    useEffect(() => {
        const con = MesList.current;
        con.scrollTop = con.scrollHeight - con.clientHeight;
    });

    return (
        <div className="mes-list" ref={MesList} >
            {
                props.data.map(d => (
                    <div key={d.id} className="mes-item" data-self={d.user.userId === props.user}>
                        <div className="mes-avatar">{/*d.user.userName.toString()[0]*/}</div>
                        <div className="mes-content">
                            <MessageContent data={d} onSetMsg={props.onSetMsg} />
                        </div>
                    </div>
                ))
            }
            <div className="mes-space" />
        </div>
    );
};