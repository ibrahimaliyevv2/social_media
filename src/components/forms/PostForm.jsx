import React from 'react'
import '../../css/PostForm.css'

function PostForm() {
    return (
        <div className="news-feed mt-3">
            <h3 className="news-feed-title">Create New Post</h3>

            <form>
                <div className="form-group">
                    <textarea name="message" className="form-control" placeholder="Write something here..." style={{height:"120px"}}></textarea>
                </div>
                <ul className="button-group d-flex justify-content-between align-items-center">
                    <li className="photo-btn">
                        <button type="submit"><i className="fa-solid fa-images"></i> Photo</button>
                    </li>
                    <li className="video-btn">
                        <button type="submit"><i className="fa-solid fa-video"></i> Video</button>
                    </li>
                    <li className="tag-btn">
                        <button type="submit"><i className="fa-solid fa-user-group"></i> Tag Friends</button>
                    </li>
                    <li className="post-btn">
                        <button type="submit">Post</button>
                    </li>
                </ul>
            </form>
        </div>
    );
}

export default PostForm;