import React, { useEffect, useState } from 'react'
import '../../css/PersonalProfile.css'
import Pt1 from '../../img/profile-photo.jpeg'
import { useGetUser } from '../../hooks/customHooks';
import { Col, Row } from 'reactstrap';

function ProfileComponent() {
    const [user, setUser] = useState(useGetUser());

    return (
        <div style={{
            background: "none",
        }} className="widget-view-profile  mt-3">
            <div className='widget-view-profile-2'></div>
            <Row>
                <Col
                    style={{
                        display: "flex",
                        justifyContent: "start",
                        alignItems: "center",
                        alignContent: "center",
                        paddingTop: "40px"
                    }}
                    md={4}>
                    <div className="profile-box d-flex justify-content-between align-items-center">
                        <img src={Pt1} width={250} height={250} alt="image" />
                    </div>
                    <div className="text ms-2">
                        <h4>{user.username || "Username"}</h4>
                        <span>Sumgait, Azerbaijan</span>
                    </div>
                </Col>
                <Col md={4}>
                </Col>
                <Col
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        paddingTop: "10px"
                    }}
                    md={4}>
                    <ul

                        className="profile-statistics">
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
                </Col>
            </Row>
        </div >

    )
}

export default ProfileComponent;