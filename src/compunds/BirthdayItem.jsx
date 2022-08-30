import React from 'react'
import { Col, Row } from 'reactstrap';
import '../css/ChatItem.css'

function BirthdayItem({ image, name, day }) {
    return (
        <div className='chat-item'>
            <Row>
                <Col>
                    <a href="/">
                        <img src={image} alt="" />
                    </a>
                </Col>
                <Col>
                    <span className='name'>
                        <h6><a href="/">{name}</a></h6>
                    </span>
                    <span>{day}</span>
                </Col>
            </Row>

        </div>
    )
}

export default BirthdayItem;