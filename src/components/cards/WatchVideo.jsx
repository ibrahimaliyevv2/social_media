import React from 'react'
import CardVideoItem from '../../compunds/CardVideoItem';
import '../../css/WatchVideo.css'
import V1 from '../../img/user-1.jpeg'

function WatchVideo() {
    return (
        <div className="widget-watch-video">
            <h3 className="widget-title">Watch Video</h3>

            <div className="watch-video-slides owl-carousel owl-theme owl-loaded owl-drag">
                <div className="owl-stage-outer">
                    <div className="owl-stage" style={{transform: "translate3d(-214px, 0px, 0px)", transition: "all 0.25s ease 0s; width: 644px"}}>
                        <CardVideoItem
                        image={V1}
                        link={"https://www.youtube.com/watch?v=ODfy2YIKS1M"}
                        />
                         <CardVideoItem
                        image={V1}
                        link={"https://www.youtube.com/watch?v=1GLNfpb3mwY"}
                        />
                         <CardVideoItem
                        image={V1}
                        link={"https://www.youtube.com/watch?v=1GLNfpb3mwY"}
                        />
                         <CardVideoItem
                        image={V1}
                        link={"https://www.youtube.com/watch?v=1GLNfpb3mwY"}
                        />
                         <CardVideoItem
                        image={V1}
                        link={"https://www.youtube.com/watch?v=1GLNfpb3mwY"}
                        />
                         <CardVideoItem
                        image={V1}
                        link={"https://www.youtube.com/watch?v=1GLNfpb3mwY"}
                        />
                         <CardVideoItem
                        image={V1}
                        link={"https://www.youtube.com/watch?v=1GLNfpb3mwY"}
                        />
                         <CardVideoItem
                        image={V1}
                        link={"https://www.youtube.com/watch?v=1GLNfpb3mwY"}
                        />
                         <CardVideoItem
                        image={V1}
                        link={"https://www.youtube.com/watch?v=1GLNfpb3mwY"}
                        />
                         <CardVideoItem
                        image={V1}
                        link={"https://www.youtube.com/watch?v=1GLNfpb3mwY"}
                        />
                    </div>
                </div>
                
                <div className="owl-nav disabled">
                    <button type="button" role="presentation" className="owl-prev">
                        <span aria-label="Previous">‹</span>
                    </button>
                    <button type="button" role="presentation" className="owl-next">
                        <span aria-label="Next">›</span>
                    </button>
                </div>
                <div className="owl-dots disabled"></div>
            </div>
        </div>
    )
}

export default WatchVideo;