import React from 'react'
import { Col, Row } from 'reactstrap';
import '../css/ChatItem.css'

function PersonItem({ image, name, status }) {
    return (
        <div className='chat-item'>
            <Row>
                <Col xs={4}>
                    <a href="/">
                        <img src={image} alt="" />
                    </a>
                </Col>
                <Col xs={4}>
                    <span className='name'>
                        <a href="/">{name}</a>
                        <span className={status}></span>
                    </span>
                </Col>
                <Col xs={4}>
                    <span><a style={{
                        textDecoration: "none"
                    }} href='/'>Add</a></span>
                </Col>
            </Row>
        </div>
    )
}

export default PersonItem;