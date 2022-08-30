import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import SidebarLeft from '../components/sidebars/SidebarLeft';
import SidebarRight from '../components/sidebars/SidebarRight';
import PostForm from '../components/forms/PostForm';
import ProfileComponent from '../components/cards/ProfileComponent';
import Stories from '../components/Stories';
import SuggestedGroup from '../components/group/SuggestedGroups';
import SuggestedPages from '../compunds/SuggestedPages';
import RecentBirthdays from '../compunds/RecentBirthdays';
import FeedPost from '../components/feedPosts/FeedPost';
import WatchVideo from '../components/cards/WatchVideo';
import WhoIsFollowing from '../compunds/WhoIsFollowing';

export default function Profile() {
    return (
        <Container fluid>
            <Row>
                <Col xs={2} >
                    <SidebarLeft />
                </Col>

                <Col xs={8}>
                    <Row>
                        <Col xs={12}>
                            <ProfileComponent />
                        </Col>
                    </Row>

                    <Row>
                        <Col xs={3}>
                            <Row>
                                <Col md={12}>
                                    <SuggestedGroup />
                                </Col>
                            </Row>
                            <Row>
                                <Col md={12}>
                                    <SuggestedPages />
                                </Col>
                            </Row>
                            <Row>
                                <Col md={12}>
                                    {/* <WatchVideo /> */}
                                </Col>
                            </Row>
                        </Col>
                        <Col xs={6}>
                            <PostForm />
                            <Stories />
                            <FeedPost />
                        </Col>
                        <Col xs={3}>
                            <Row>
                                <Col md={12}>
                                    <RecentBirthdays />
                                </Col>
                            </Row>
                            <Row>
                                <Col md={12}>
                                    <WhoIsFollowing />
                                </Col>
                            </Row>
                        </Col>
                    </Row>

                </Col>
                <Col xs={2}>
                    <SidebarRight />
                </Col>
            </Row>
        </Container>
    )
}
