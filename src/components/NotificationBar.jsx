import React from 'react'
import Pt1 from '../img/user-28.jpeg'
import NotificationItem from '../compunds/NotificationItem'
import '../css/NotificationBar.css'

function NotificationBar() {
    return (
        <div className="all-notifications-body">
            <div className="all-notifications-header d-flex justify-content-between align-items-center">
                <h3>Notifications</h3>

                <div className="dropdown">
                    <button className="dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="fa-solid fa-bars"></i></button>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item d-flex align-items-center" href="/"><i className="fa-solid fa-pen-to-square"></i> Edit Notifications</a></li>
                        <li><a className="dropdown-item d-flex align-items-center" href="/"><i className="fa-solid fa-eye-slash"></i> Hide Notifications</a></li>
                        <li><a className="dropdown-item d-flex align-items-center" href="/"><i className="fa-solid fa-trash"></i> Delete Notifications</a></li>
                    </ul>
                </div>
            </div>
            <NotificationItem
                image={Pt1}
                name={"James Vanwin"}
                notification={"Posted A Comment On Your Status"}
                time={"20 minutes ago"}
            />
            <NotificationItem
                image={Pt1}
                name={"James Vanwin"}
                notification={"Posted A Comment On Your Status"}
                time={"20 minutes ago"}
            />
            <NotificationItem
                image={Pt1}
                name={"James Vanwin"}
                notification={"Posted A Comment On Your Status"}
                time={"20 minutes ago"}
            />
            <NotificationItem
                image={Pt1}
                name={"James Vanwin"}
                notification={"Posted A Comment On Your Status"}
                time={"20 minutes ago"}
            />
            <NotificationItem
                image={Pt1}
                name={"James Vanwin"}
                notification={"Posted A Comment On Your Status"}
                time={"20 minutes ago"}
            />
            <NotificationItem
                image={Pt1}
                name={"James Vanwin"}
                notification={"Posted A Comment On Your Status"}
                time={"20 minutes ago"}
            />
            <NotificationItem
                image={Pt1}
                name={"James Vanwin"}
                notification={"Posted A Comment On Your Status"}
                time={"20 minutes ago"}
            />
            <NotificationItem
                image={Pt1}
                name={"James Vanwin"}
                notification={"Posted A Comment On Your Status"}
                time={"20 minutes ago"}
            />
            <NotificationItem
                image={Pt1}
                name={"James Vanwin"}
                notification={"Posted A Comment On Your Status"}
                time={"20 minutes ago"}
            />
            <NotificationItem
                image={Pt1}
                name={"James Vanwin"}
                notification={"Posted A Comment On Your Status"}
                time={"20 minutes ago"}
            />

        </div>
    )
}

export default NotificationBar;