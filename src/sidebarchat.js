import { Avatar } from '@material-ui/core';
import React from 'react'
import './sidebarchat.css';

function sidebarchat() {
    return (
        <div className="sidebarchat">
            <Avatar/>
            <div className="chat_info">
                <h2> Chat....</h2>
                <p> last message</p>
            </div>
        </div>
    )
}

export default sidebarchat
