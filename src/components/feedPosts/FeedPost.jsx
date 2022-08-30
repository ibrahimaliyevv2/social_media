import React from 'react'
import '../../css/FeedPost.css'
import ThumbUp from '@mui/icons-material/ThumbUp';
import Post1 from '../../img/post-1.jpeg'

function FeedPost() {
    return (
        <div className="news-feed-post">
            <div className="post-header d-flex justify-content-between align-items-center">
                <div className="image">
                    <a href="my-profile.html"><img src="https://templates.envytheme.com/zust/default/assets/images/user/user-32.jpg" className="rounded-circle" alt="image"/></a>
                </div>
                <div className="info ms-3">
                    <span className="name"><a href="my-profile.html">Julie R. Morleyv</a></span>
                    <span className="small-text"><a href="/">10 Mins Ago</a></span>
                </div>
                <div className="dropdown">
                    <button className="dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="fa-solid fa-bars"></i></button>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item d-flex align-items-center" href="/"><i className="fa-solid fa-pen-to-square"></i> Edit Post</a></li>
                        <li><a className="dropdown-item d-flex align-items-center" href="/"><i className="fa-solid fa-eye-slash"></i> Hide Post</a></li>
                        <li><a className="dropdown-item d-flex align-items-center" href="/"><i className="fa-solid fa-trash"></i> Delete Post</a></li>
                    </ul>
                </div>
            </div>

            <div className="post-body">
                <p>Donec rutrum congue leo eget malesuada. Nulla quis lorem ut libero malesuada feugiat. Donec rutrum congue leo eget malesuada. Donec rutrum congue leo eget malesuada. Praesent sapien massa convallis a pellentesque nec egestas non nisi. Curabitur non nulla sit amet nisl tempus convallis quis.</p>
                <div className="post-image">
                    <img src={Post1} alt="image"/>
                </div>
                <ul className="post-meta-wrap d-flex justify-content-between align-items-center">
                    <li className="post-react">
                        <a href="/"><i className='thumb-icon'><ThumbUp/></i><span>Like</span> <span className="number">1499 </span></a>

                        <ul className="react-list">
                            <li>
                                <a href="/"><img src="https://templates.envytheme.com/zust/default/assets/images/react/react-1.png" alt="Like"/></a>
                            </li>
                            <li>
                                <a href="/"><img src="https://templates.envytheme.com/zust/default/assets/images/react/react-2.png" alt="Like"/></a>
                            </li>
                            <li>
                            <a href="/"><img src="https://templates.envytheme.com/zust/default/assets/images/react/react-3.png" alt="Like"/></a>
                            </li>
                            <li>
                            <a href="/"><img src="https://templates.envytheme.com/zust/default/assets/images/react/react-4.png" alt="Like"/></a>
                            </li>
                            <li>
                            <a href="/"><img src="https://templates.envytheme.com/zust/default/assets/images/react/react-5.png" alt="Like"/></a>
                            </li>
                            <li>
                            <a href="/"><img src="https://templates.envytheme.com/zust/default/assets/images/react/react-6.png" alt="Like"/></a>
                            </li>
                            <li>
                            <a href="/"><img src="https://templates.envytheme.com/zust/default/assets/images/react/react-7.png" alt="Like"/></a>
                            </li>
                        </ul>
                    </li>
                    <li className="post-comment">
                        <a href="/"><i className="fa-solid fa-comment"></i><span>Comment</span> <span className="number">599 </span></a>
                    </li>
                    <li className="post-share">
                        <a href="/"><i className="fa-solid fa-share-nodes"></i><span>Share</span> <span className="number">24 </span></a>
                    </li>
                </ul>
                <div className="post-comment-list">
                    <div className="comment-list">
                        <div className="comment-image">
                            <a href="my-profile.html"><img src="https://templates.envytheme.com/zust/default/assets/images/user/user-33.jpg" className="rounded-circle" alt="image"/></a>
                        </div>
                        <div className="comment-info">
                            <h3>
                                <a href="my-profile.html">David Moore</a>
                            </h3>
                            <span>5 Mins Ago</span>
                            <p>Donec rutrum congue leo eget malesuada nulla quis lorem ut libero malesuada feugiat donec rutrum congue leo eget malesuada donec rutrum congue leo eget malesuada. Praesent sapien massa convallis a pellentesque non nisi curabitur non nulla sit amet nisl tempus convallis lectus.</p>
                            <ul className="comment-react">
                                <li><a href="/" className="like">Like(2)</a></li>
                                <li><a href="/">Reply</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="comment-list">
                        <div className="comment-image">
                            <a href="my-profile.html"><img src="https://templates.envytheme.com/zust/default/assets/images/user/user-33.jpg" className="rounded-circle" alt="image"/></a>
                        </div>
                        <div className="comment-info">
                            <h3>
                                <a href="my-profile.html">Claire P. Toy</a>
                            </h3>
                            <span>45 Mins Ago</span>
                            <p>Donec rutrum congue leo eget malesuada praesent sapien massa convallis a pellentesque nec egestas non nisi curabitur non nulla sit amet nisl tempus convallis quis ac lectus.</p>
                            <ul className="comment-react">
                                <li><a href="/" className="like">Like(12)</a></li>
                                <li><a href="/">Reply</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="comment-list">
                        <div className="comment-image">
                            <a href="my-profile.html"><img src="https://templates.envytheme.com/zust/default/assets/images/user/user-33.jpg" className="rounded-circle" alt="image"/></a>
                        </div>
                        <div className="comment-info">
                            <h3>
                                <a href="my-profile.html">Karen Williams</a>
                            </h3>
                            <span>5 Mins Ago</span>
                            <p>Donec rutrum congue leo eget malesuada nulla quis lorem ut libero malesuada feugiat donec rutrum congue leo eget.</p>
                            <ul className="comment-react">
                                <li><a href="/" className="like">Like(2)</a></li>
                                <li><a href="/">Reply</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="more-comments">
                        <a href="/">More Comments+</a>
                    </div>
                </div>
                <form className="post-footer">
                    <div className="footer-image">
                        <a href="/"><img src="https://templates.envytheme.com/zust/default/assets/images/user/user-33.jpg" className="rounded-circle" alt="image"/></a>
                    </div>
                    <div className="form-group">
                        <textarea name="message" className="form-control" placeholder="Write a comment..."></textarea>
                        <label><a href="/"><i className="fa-solid fa-camera"></i></a></label>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default FeedPost;