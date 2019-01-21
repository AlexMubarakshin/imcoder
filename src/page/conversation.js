/**
 * main
 */

import React,{ useState } from 'react';
import './index.css';

const testList = [
    {
        message:'00就看就看家看看叫进空间即可就看',
        id:0,
        user:{
            userId:0,
            userName:'Allo'
        }
    },
    {
        message:'11就看就看家看看叫进空间即可就看11就看就看家看看叫进空间即可就看11就看就看家看看叫进空间即可就看11就看就看家看看叫进空间即可就看11就看就看家看看叫进空间即可就看',
        id:1,
        user:{
            userId:0,
            userName:'Allo'
        }
    },
    {
        message:'22就看就看家看看叫进空间即可就看',
        id:2,
        user:{
            userId:1,
            userName:'Bill'
        }
    },
    {
        message:'33就看就看家看看叫进空间即可就看',
        id:3,
        user:{
            userId:2,
            userName:'XboxYan'
        }
    },
    {
        message:'44就看就看家看看叫进空间即可就看',
        id:4,
        user:{
            userId:1,
            userName:'Bill'
        }
    },
];

export default () => {

    const [list, setList] = useState(testList);

    return (
        <div className="mes-list">
            {
                list.map(d=>(
                    <div key={d.id} className="mes-item" data-self={d.user.userId===2}>
                        <div className="mes-avator">{d.user.userName[0]}</div>
                        <div className="mes-content">{d.message}</div>
                    </div>
                ))
            }
        </div>
    )
}