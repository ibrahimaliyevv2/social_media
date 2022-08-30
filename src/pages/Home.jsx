import React, { Component } from "react";
import ProfileCard from "../components/cards/ProfileCard";
import PostForm from "../components/forms/PostForm";
import { Container, Col, Row } from "reactstrap";
import SidebarLeft from "../components/sidebars/SidebarLeft";
import SidebarRight from "../components/sidebars/SidebarRight";
import Stories from "../components/Stories";
import PersonalProfile from "../components/cards/PersonalProfile";
import FeedPost from "../components/feedPosts/FeedPost";

export default class Home extends Component {
  render() {
    return (
      <Container fluid>
        <Row>
          <Col md={2} lg={2} style={{ padding: "0" }}>
            <SidebarLeft />
          </Col>
          <Col md={2} lg={2}>
            <Col>
              <PersonalProfile />
            </Col>
          </Col>
          <Col md={4} lg={4}>
            <Col>
              <PostForm />
            </Col>
            <Col>
              <Stories />
            </Col>
            <Col>
              <FeedPost />
            </Col>
          </Col>
          <Col md={2}>
            <Col>
              <ProfileCard
                title={"Card2"}
                tag={"h6"}
                style={{
                  width: "14em",
                }}
                subtitle={"Card2 subtitle"}
                description={"TEST"}
                className={"mt-3"}
                img={"https://picsum.photos/300/200"}
              />
            </Col>
            <Col>
              <ProfileCard
                title={"Card2"}
                tag={"h6"}
                style={{
                  width: "14em",
                }}
                subtitle={"Card2 subtitle"}
                description={"TEST"}
                className={"mt-3"}
                img={"https://picsum.photos/300/200"}
              />
            </Col>
            <Col>
              <ProfileCard
                title={"Card2"}
                tag={"h6"}
                style={{
                  width: "14em",
                }}
                subtitle={"Card2 subtitle"}
                description={"TEST"}
                className={"mt-3"}
                img={"https://picsum.photos/300/200"}
              />
            </Col>
            <Col>
              <ProfileCard
                title={"Card2"}
                tag={"h6"}
                style={{
                  width: "14em",
                }}
                subtitle={"Card2 subtitle"}
                description={"TEST"}
                className={"mt-3"}
                img={"https://picsum.photos/300/200"}
              />
            </Col>
            <Col>
              <ProfileCard
                title={"Card2"}
                tag={"h6"}
                style={{
                  width: "14em",
                }}
                subtitle={"Card2 subtitle"}
                description={"TEST"}
                className={"mt-3"}
                img={"https://picsum.photos/300/200"}
              />
            </Col>
            <Col>
              <ProfileCard
                title={"Card2"}
                tag={"h6"}
                style={{
                  width: "14em",
                }}
                subtitle={"Card2 subtitle"}
                description={"TEST"}
                className={"mt-3"}
                img={"https://picsum.photos/300/200"}
              />
            </Col>
          </Col>
          <Col md={2}>
            <SidebarRight />
          </Col>
        </Row>
      </Container>
    );
  }
}
