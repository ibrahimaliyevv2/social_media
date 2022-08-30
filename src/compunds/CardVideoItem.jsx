import React from 'react'

function CardVideoItem(image, link) {
    return (
        <div className="owl-item cloned" style={{ width: "61.5px", marginRight: "10px" }}>
            <div className="video-item">
                <img src={image} alt="image" />

                <a href={link} className="video-btn popup-youtube">
                    <i className="ri-play-fill"></i>
                </a>
            </div>
        </div>
    )
}

export default CardVideoItem;