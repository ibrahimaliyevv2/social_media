import React from 'react'
import StoryItem from '../compunds/StoryItem';
import St1 from '../img/user-28.jpeg'
import Pt1 from '../img/profile-photo.jpeg'
import '../css/Stories.css'

function Stories() {
    return (
        <div className="news-feed-stories">
            <div className="stories-title d-flex justify-content-between align-items-center">
                <h3>Stories</h3>
                <span><a href="/">See All</a></span>
            </div>

            <div className="row">
                <div className="col-lg-2 col-sm-4 col-4">
                    <div className="stories-personal-item">
                        <div className="stories-image">
                            <a href="/">
                                <img src={Pt1} alt="image" />
                            </a>
                            <div className="add-icon">
                                <a href="/"><i className="fa-solid fa-circle-plus"></i></a>
                            </div>
                        </div>
                        <span><a href="/">Add Story</a></span>
                    </div>
                </div>
                <StoryItem
                    image={St1}
                    name={"Jimenez"} />
                <StoryItem
                    image={St1}
                    name={"Jimenez"} />
                <StoryItem
                    image={St1}
                    name={"Jimenez"} />
                <StoryItem
                    image={St1}
                    name={"Jimenez"} />
                <StoryItem
                    image={St1}
                    name={"Jimenez"} />
            </div>
        </div>
    )
}

export default Stories;