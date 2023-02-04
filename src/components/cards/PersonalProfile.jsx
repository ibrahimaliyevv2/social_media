import React, { useEffect, useState } from "react";
import UserContext from "../../context/UserContext";
import "../../css/PersonalProfile.css";
import Pt1 from "../../img/profile-photo.jpeg";
import St1 from "../../img/user-15.jpeg";
import { useGetUser } from "../../hooks/customHooks";

function PersonalProfile() {
  const [user, setUser] = useState(useGetUser());

  return (
    <div className="widget-view-profile mt-3">
      <div className="profile-box d-flex justify-content-between align-items-center">
        <a href="/social_media/my-profile">
          <img src={Pt1} alt="image" />
        </a>
        <div className="text ms-2">
          <h3>
            <a href="/social_media/my-profile">Fazail Jabbarov</a>
          </h3>
          <span>Sumgait, Azerbaijan</span>
        </div>
      </div>
      <ul className="profile-statistics">
        <li>
          <a href="#">
            <span className="item-number">59862</span>
            <span className="item-text">Likes</span>
          </a>
        </li>
        <li>
          <a href="#">
            <span className="item-number">8591</span>
            <span className="item-text">Following</span>
          </a>
        </li>
        <li>
          <a href="#">
            <span className="item-number">784514</span>
            <span className="item-text">Followers</span>
          </a>
        </li>
      </ul>
      <div className="profile-likes">
        <span>
          <i className="flaticon-heart-shape-outline"></i> New Likes This Week
        </span>

        <ul>
          <li>
            <a href="#">
              <img src={St1} alt="image" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={St1} alt="image" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={St1} alt="image" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={St1} alt="image" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={St1} alt="image" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={St1} alt="image" />
            </a>
          </li>
        </ul>
      </div>
      <div className="profile-btn">
        <a href="/social_media/my-profile" className="default-btn">
          View Profile
        </a>
      </div>
    </div>
  );
}

export default PersonalProfile;
