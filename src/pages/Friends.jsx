import React from "react";
import FriendCard from "../components/cards/FriendCard";
import "../css/Friends.css";
import photopp from "../img/friends-1.jpeg";
import photobg from "../img/friends-bg-1.jpeg";
import { Container, Col, Row } from "reactstrap";
import SidebarLeft from "../components/sidebars/SidebarLeft";
import SidebarRight from "../components/sidebars/SidebarRight";

function Friends() {
  return (
    <Container fluid>
      <Row>
        <Col md={2} lg={2} style={{ padding: "0" }}>
          <SidebarLeft />
        </Col>
        <Col md={8} lg={8}>
          <div className="page-banner-box bg-4">
            <h3>Friends</h3>
          </div>
          <div className="friends-inner-box-style d-flex justify-content-between align-items-center margin-top-25">
            <ul className="nav nav-tabs" id="myTab" role="tablist">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  id="friend-requests-tab"
                  data-bs-toggle="tab"
                  href="/friend-requests"
                  role="tab"
                  aria-controls="friend-requests"
                  aria-selected="true"
                >
                  Friend Requests
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  id="people-you-know-tab"
                  data-bs-toggle="tab"
                  href="/people-you-know"
                  role="tab"
                  aria-controls="people-you-know"
                  aria-selected="false"
                >
                  People You Know
                </a>
              </li>
            </ul>

            <div className="friends-search-box">
              <form>
                <input
                  type="text"
                  className="input-search"
                  placeholder="Search friends..."
                />
                <button type="submit">
                  <i className="ri-search-line"></i>
                </button>
              </form>
            </div>
          </div>
          <Row>
            <FriendCard
              profilePicture={photopp}
              backgroundPicture={photobg}
              fullname={"Murad Dadashov"}
              likeCount={862}
              followingCount={91}
              followersCoun={512}
              mutualCount={10}
            />
            <FriendCard
              profilePicture={photopp}
              backgroundPicture={photobg}
              fullname={"Murad Dadashov"}
              likeCount={862}
              followingCount={91}
              followersCoun={512}
              mutualCount={10}
            />
            <FriendCard
              profilePicture={photopp}
              backgroundPicture={photobg}
              fullname={"Murad Dadashov"}
              likeCount={862}
              followingCount={91}
              followersCoun={512}
              mutualCount={10}
            />
            <FriendCard
              profilePicture={photopp}
              backgroundPicture={photobg}
              fullname={"Murad Dadashov"}
              likeCount={862}
              followingCount={91}
              followersCoun={512}
              mutualCount={10}
            />
            <FriendCard
              profilePicture={photopp}
              backgroundPicture={photobg}
              fullname={"Murad Dadashov"}
              likeCount={862}
              followingCount={91}
              followersCoun={512}
              mutualCount={10}
            />
            <FriendCard
              profilePicture={photopp}
              backgroundPicture={photobg}
              fullname={"Murad Dadashov"}
              likeCount={862}
              followingCount={91}
              followersCoun={512}
              mutualCount={10}
            />
            <FriendCard
              profilePicture={photopp}
              backgroundPicture={photobg}
              fullname={"Murad Dadashov"}
              likeCount={862}
              followingCount={91}
              followersCoun={512}
              mutualCount={10}
            />
            <FriendCard
              profilePicture={photopp}
              backgroundPicture={photobg}
              fullname={"Murad Dadashov"}
              likeCount={862}
              followingCount={91}
              followersCoun={512}
              mutualCount={10}
            />
            <FriendCard
              profilePicture={photopp}
              backgroundPicture={photobg}
              fullname={"Murad Dadashov"}
              likeCount={862}
              followingCount={91}
              followersCoun={512}
              mutualCount={10}
            />
            <FriendCard
              profilePicture={photopp}
              backgroundPicture={photobg}
              fullname={"Murad Dadashov"}
              likeCount={862}
              followingCount={91}
              followersCoun={512}
              mutualCount={10}
            />
            <FriendCard
              profilePicture={photopp}
              backgroundPicture={photobg}
              fullname={"Murad Dadashov"}
              likeCount={862}
              followingCount={91}
              followersCoun={512}
              mutualCount={10}
            />
            <FriendCard
              profilePicture={photopp}
              backgroundPicture={photobg}
              fullname={"Murad Dadashov"}
              likeCount={862}
              followingCount={91}
              followersCoun={512}
              mutualCount={10}
            />
            <FriendCard
              profilePicture={photopp}
              backgroundPicture={photobg}
              fullname={"Murad Dadashov"}
              likeCount={862}
              followingCount={91}
              followersCoun={512}
              mutualCount={10}
            />
            <FriendCard
              profilePicture={photopp}
              backgroundPicture={photobg}
              fullname={"Murad Dadashov"}
              likeCount={862}
              followingCount={91}
              followersCoun={512}
              mutualCount={10}
            />
            <FriendCard
              profilePicture={photopp}
              backgroundPicture={photobg}
              fullname={"Murad Dadashov"}
              likeCount={862}
              followingCount={91}
              followersCoun={512}
              mutualCount={10}
            />
            <FriendCard
              profilePicture={photopp}
              backgroundPicture={photobg}
              fullname={"Murad Dadashov"}
              likeCount={862}
              followingCount={91}
              followersCoun={512}
              mutualCount={10}
            />
            <FriendCard
              profilePicture={photopp}
              backgroundPicture={photobg}
              fullname={"Murad Dadashov"}
              likeCount={862}
              followingCount={91}
              followersCoun={512}
              mutualCount={10}
            />
            <FriendCard
              profilePicture={photopp}
              backgroundPicture={photobg}
              fullname={"Murad Dadashov"}
              likeCount={862}
              followingCount={91}
              followersCoun={512}
              mutualCount={10}
            />
            <FriendCard
              profilePicture={photopp}
              backgroundPicture={photobg}
              fullname={"Murad Dadashov"}
              likeCount={862}
              followingCount={91}
              followersCoun={512}
              mutualCount={10}
            />
          </Row>
        </Col>
        <Col md={2} lg={2}>
          <SidebarRight />
        </Col>
      </Row>
    </Container>
  );
}

export default Friends;
