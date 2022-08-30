import React from 'react'
import '../css/StoryItem.css'

function StoryItem({image, name}) {
    return (
            <div className="col-lg-2 col-sm-4 col-4">
                <div className="stories-item">
                    <a href="/">
                        <img src={image} alt="image" />
                    </a>
                    <span><a href="/">{name}</a></span>
                </div>
            </div>
    )
}

export default StoryItem;