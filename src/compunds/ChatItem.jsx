import React from 'react'
import '../css/ChatItem.css'

function ChatItem({ image, name, status }) {
    return (
        <div className='chat-item'>
            <a href="/">
                <img src={image} alt="" />
            </a>
            <span className='name'>
                <a href="/">{name}</a>
            </span>
            <span className={status}></span>
        </div>
    )
}

export default ChatItem;