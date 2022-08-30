import React from 'react'
import { Col, Row } from 'reactstrap';
import '../css/ChatItem.css'

function GroupItem({ image, name }) {
    return (
        <Row className='chat-item'>
            <Col md={4}>
                <a href="/">
                    <img
                        className='img-2'
                        src={image} alt="" />
                </a>
            </Col>
            <Col>
                <Row>
                    <Col md={12}>
                        <span className='name'>
                            <h4><a href="/">{name}</a></h4>
                        </span>
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <span className='text'>5000+ Members</span>
                    </Col>
                    <Col>
                        <span>Join Comunity</span>
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}

export default GroupItem;