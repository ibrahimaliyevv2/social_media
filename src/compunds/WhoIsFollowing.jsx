import React from 'react';
import PP1 from '../img/user-15.jpeg';
import '../css/RecentContact.css';
import PersonItem from './PersonItem';

function WhoIsFollowing() {
    return (
        <div className='recent-contact'>
            <div className="title">
                <h3>Who's Following</h3>
            </div>

            <div className="contact-items">

                <PersonItem
                    image={PP1}
                    name={"Stephan Redding"}
                    status={"status-online"}
                />
                <PersonItem
                    image={PP1}
                    name={"Stephan Redding"}
                    status={"status-online"}
                />
                <PersonItem
                    image={PP1}
                    name={"Stephan Redding"}
                    status={"status-online"}
                />
                <PersonItem
                    image={PP1}
                    name={"Stephan Redding"}
                    status={"status-online"}
                />
            </div>
        </div>
    )
}

export default WhoIsFollowing;