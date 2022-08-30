import React from 'react'
import { Container, Col, Row } from 'reactstrap'
import SidebarLeft from '../components/sidebars/SidebarLeft';
import SidebarRight from '../components/sidebars/SidebarRight';
import MessageApp from '../components/message/MessageApp'

function Messages() {
  return (
    <Container fluid>
                <Row>
                    <Col md={2} lg={2}
                        style={{ padding: '0' }}>
                        <SidebarLeft />
                    </Col>
                    <Col md={8} lg={8}>
                    <MessageApp/>
                    </Col>
                    <Col md={2} lg={2}>
                        <SidebarRight />
                    </Col>
                </Row>
            </Container>
  )
}

export default Messages;
