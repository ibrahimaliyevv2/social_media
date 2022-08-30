import React from 'react'
import RecentChat from '../../compunds/RecentChat';
import RecentContact from '../../compunds/RecentContact';
import '../../css/SidebarRight.css'


function SidebarRight() {
    return (
        <div className="sidebar-right">
            <RecentChat/>
            <RecentContact/>
    </div>
    )
}

export default SidebarRight;