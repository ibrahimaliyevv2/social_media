import React, { Component } from 'react'
import { Container, Col, Row } from 'reactstrap'
import NotificationBar from '../components/NotificationBar';
import SidebarLeft from '../components/sidebars/SidebarLeft';
import SidebarRight from '../components/sidebars/SidebarRight';

class Notifications extends Component {
    render() {
        return (
            <Container fluid>
                <Row>
                    <Col md={2} lg={2}
                        style={{ padding: '0' }}>
                        <SidebarLeft />
                    </Col>
                    <Col md={8} lg={8}>
                    <NotificationBar/>
                    </Col>
                    <Col md={2} lg={2}>
                        <SidebarRight />
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Notifications;