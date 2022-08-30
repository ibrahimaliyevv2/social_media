import React from 'react'
import ChatItem from './ChatItem';
import PP1 from '../img/user-15.jpeg'
import '../css/RecentChat.css'


function RecentChat() {
    return (
        <div className="recent-chat">
            <div className="title">
                <h3>Recent Chat</h3>
            </div>

            <div className="chat-items">
               <ChatItem
               image={PP1}
               name={"Stephan Redding"}
               status={"status-online"}
               />
               <ChatItem
               image={PP1}
               name={"Stephan Redding"}
               status={"status-online"}
               />
               <ChatItem
               image={PP1}
               name={"Stephan Redding"}
               status={"status-offline"}
               />
               <ChatItem
               image={PP1}
               name={"Stephan Redding"}
               status={"status-offline"}
               />
                <ChatItem
               image={PP1}
               name={"Stephan Redding"}
               status={"status-offline"}
               />
                <ChatItem
               image={PP1}
               name={"Stephan Redding"}
               status={"status-offline"}
               />
                <ChatItem
               image={PP1}
               name={"Stephan Redding"}
               status={"status-offline"}
               />
                <ChatItem
               image={PP1}
               name={"Stephan Redding"}
               status={"status-offline"}
               />
                <ChatItem
               image={PP1}
               name={"Stephan Redding"}
               status={"status-offline"}
               />
                <ChatItem
               image={PP1}
               name={"Stephan Redding"}
               status={"status-offline"}
               />
                <ChatItem
               image={PP1}
               name={"Stephan Redding"}
               status={"status-offline"}
               />
            </div>
        </div>
    )
}

export default RecentChat;