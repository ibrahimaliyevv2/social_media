import React from "react";
import "../../css/Friends.css";

function FriendCard({
  profilePicture,
  backgroundPicture,
  fullname,
  likeCount,
  followingCount,
  followersCount,
  mutualCount,
}) {
  return (
    <div className="col-lg-3 col-sm-6">
      <div className="single-friends-card">
        <div className="friends-image">
          <a href="/" style={{ color: "black", textDecoration: "none" }}>
            <img src={backgroundPicture} alt="image" />
          </a>
          <div className="icon">
            <a href="/" style={{ color: "black", textDecoration: "none" }}>
              <i className="fa-solid fa-user"></i>
            </a>
          </div>
        </div>
        <div className="friends-content">
          <div className="friends-info d-flex justify-content-between align-items-center">
            <a href="/" style={{ color: "black", textDecoration: "none" }}>
              <img src={profilePicture} alt="image" />
            </a>
            <div className="text ms-3">
              <h3>
                <a
                  href="/"
                  style={{
                    color: "black",
                    textDecoration: "none",
                    fontSize: "18px",
                  }}
                >
                  {fullname}
                </a>
              </h3>
              <span>{mutualCount} Mutual Friends</span>
            </div>
          </div>
          <ul className="statistics">
            <li style={{ listStyle: "none" }}>
              <a href="/" style={{ color: "black", textDecoration: "none" }}>
                <span className="item-number">{likeCount}</span>
                <span className="item-text">Likes</span>
              </a>
            </li>
            <li style={{ listStyle: "none" }}>
              <a href="/" style={{ color: "black", textDecoration: "none" }}>
                <span className="item-number">{followingCount}</span>
                <span className="item-text">Following</span>
              </a>
            </li>
            <li style={{ listStyle: "none" }}>
              <a href="/" style={{ color: "black", textDecoration: "none" }}>
                <span className="item-number">{followersCount}</span>
                <span className="item-text">Followers</span>
              </a>
            </li>
          </ul>
          <div className="button-group d-flex justify-content-between align-items-center">
            <div className="add-friend-btn">
              <button type="button" class="btn btn-outline-primary">
                Add friend
              </button>
            </div>
            <div className="send-message-btn">
              <button type="button" class="btn btn-outline-primary">
                Send message
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FriendCard;
