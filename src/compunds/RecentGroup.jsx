import React from 'react';
import PP1 from '../img/groups-1.jpg';
import '../css/RecentChat.css';
import GroupItem from '../compunds/GroupItem';
import { Col, Row } from 'reactstrap';

function RecentChat() {
    return (
        <Row
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }}
            className="recent-chat">
            <Row>
                <Col md={12}>
                    <div className="title">
                        <h3>Suggested Groups</h3>
                    </div>
                </Col>
            </Row>

            <Row>
                <Col md={12}>
                    <GroupItem
                        image={PP1}
                        name={"UI/UX"}
                    />
                </Col>
            </Row>
        </Row>
    )
}

export default RecentChat;