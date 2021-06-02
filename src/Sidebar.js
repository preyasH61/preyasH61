import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import React from 'react';
import "./Sidebar.css";
import { SearchOutlined } from '@material-ui/icons';
import Sidebarchat from './sidebarchat'; //import sidebarchatjs
import { Avatar, IconButton } from '@material-ui/core';

function sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar_header">
                <Avatar/>
                <div className="header_sidright">
                    <IconButton>
                        <DonutLargeIcon/>
                    </IconButton>
                    <IconButton>
                        <ChatIcon/>
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon/>
                    </IconButton>
                </div>
            </div>
            <div className="sidebar_search">
                <div className="sidebar_searchcon">
                    <SearchOutlined/>
                    <input placeholder="search or start new chat" type="text"/>
                </div>  
            </div>
            <div className="sidebar_chat">
                <Sidebarchat/> {/* use sidebarchat.js  */}
                <Sidebarchat/>
            </div>
        </div>
    )
}

export default sidebar
