import React from 'react'
import PP1 from '../img/user-15.jpeg'
import '../css/RecentChat.css'
import { Col, Row } from 'reactstrap';
import BirthdayItem from './BirthdayItem';

function RecentBirthdays() {
    return (
        <div className="recent-chat-2">
            <Row>
                <Col md={12}>
                    <Row>
                        <Row>
                            <Col>
                                <div className="title">
                                    <h3>Today Birthdays</h3>
                                </div>
                            </Col>
                        </Row>
                        <Row className="chat-items">
                            <Col>
                                <BirthdayItem
                                    name={"RASIM"}
                                    image={PP1}
                                    day={"today"}
                                />
                            </Col>
                        </Row>
                    </Row>
                </Col>
                <Col md={12}>
                    <Row>
                        <Row>
                            <Col>
                                <div className="title">
                                    <h3>Recent Birthdays</h3>
                                </div>
                            </Col>
                        </Row>
                        <Row className="chat-items">
                            <Col>
                                <BirthdayItem
                                    name={"RASIM"}
                                    image={PP1}
                                    day={"today"}
                                />
                            </Col>
                        </Row>
                    </Row>
                </Col>
                <Col md={12}>
                    <Row>
                        <Row>
                            <Col>
                                <div className="title">
                                    <h3>Comming Birthdays</h3>
                                </div>
                            </Col>
                        </Row>

                        <Row className="chat-items">
                            <Col>
                                <BirthdayItem
                                    name={"RASIM"}
                                    image={PP1}
                                    day={"today"}
                                />
                            </Col>
                        </Row>
                    </Row>
                </Col>
            </Row>
        </div>
    )
}

export default RecentBirthdays;