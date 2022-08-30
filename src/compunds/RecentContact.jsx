import React from 'react'
import ChatItem from './ChatItem';
import PP1 from '../img/user-15.jpeg'
import '../css/RecentContact.css'

function RecentContact() {
  return (
    <div className='recent-contact'>
      <div className="title">
        <h3>Recent Contacts</h3>
      </div>

      <form>
        <input type="text" className="input-search" placeholder="Search" />
        <button type="submit"><i className="fa-solid fa-magnifying-glass"></i></button>
      </form>

      <div className="contact-items">
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

export default RecentContact;