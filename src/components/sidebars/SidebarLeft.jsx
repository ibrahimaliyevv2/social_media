import React from 'react'
import '../../css/Sidebar.css'
import { SidebarData } from '../SidebarData'

function SidebarLeft() {
  return (
    <div className='Sidebar-main'>
      <ul className='SidebarList'>
        {
          SidebarData.map((val, key) =>
            <li key={key}
              className='SidebarListItem'
              id={window.location.pathname == val.link ? "active" : ""}
              onClick={() => { window.location.pathname = val.link }}>
              <i id='icon'>{val.icon}</i> <span id='title'>{val.title}</span>
            </li>
          )
        }
      </ul>
    </div>
  )
}

export default SidebarLeft
