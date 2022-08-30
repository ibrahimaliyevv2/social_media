import React from 'react'
import '../../src/css/NotificationItem.css'

function NotificationItem({image, name, notification, time}) {
    return (
        <div className="notification-item d-flex justify-content-between align-items-center">
            <div className="figure">
                <a href="my-profile.html"><img src={image} className="rounded-circle" alt="image" /></a>
            </div>
            <div className="text">
                <h4><a href="my-profile.html">{name}</a></h4>
                <span>{notification}</span>
                <span className="main-color">{time}</span>
            </div>
            <div className="icon">
                <a href="/"><i className="fa-solid fa-circle-xmark"></i></a>
            </div>
        </div>
    )
}

export default NotificationItem;