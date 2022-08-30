import React from 'react';
import PP1 from '../img/video-1.jpeg';
import '../css/RecentChat.css';
import { Col, Row } from 'reactstrap';
import PageItem from './PageItem';

function SuggestedPages() {
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
                        <h3>Page You Like</h3>
                    </div>
                </Col>
            </Row>

            <Row>

                <Col md={12}>
                    <PageItem
                        image={PP1}
                        name={"Graphic Design"}
                    />
                </Col>
            </Row>
        </Row>
    )
}

export default SuggestedPages;