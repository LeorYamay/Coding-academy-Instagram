import { useParams } from 'react-router-dom'
import { useState } from 'react'

import { CommentCmp } from './Comment'
import { demoStoryService } from '../services/demoData/demoStory.service'
import { demoUserService } from '../services/demoData/demoUser.service'


export function StoryView() {

    const params = useParams()
    const [showModal, setShowModal] = useState(false)
    const storyId = params.storyId

    const handleCloseModal = () => setShowModal(false)
    const handleShowModal = () => setShowModal(true)

    const user = demoUserService.generateRandomUser()
    const story = demoStoryService.generateRandomStory(user)

    const { imgUrl, by, loc, txt, comments } = story

    return (
        <div className="story">
            <div className="image-section">
                <img src={imgUrl} alt="Post" className="post-image" />
            </div>
            <div className='content-container'>
                <div className="post-info">
                    <div className="user-info">
                        <div className="circle-container">
                            <img src={by.imgUrl} alt="User" className="user-img circle-image" />
                        </div>
                        <span className="username">{by.fullname}</span>
                    </div>
                    <p className="post-location">{loc.name}</p>
                </div>
                <div className="comments-section">
                    <div className="comment">
                        <CommentCmp comment={{ by, txt }} /> {/* Render the main post text using the Comment component */}
                        <button className="like-button" onClick={() => {/* Handle like functionality here */ }}>
                            <i className="far fa-heart"></i>
                        </button>
                    </div>
                    {comments.map((comment, index) => (
                        <CommentCmp key={index} comment={comment} />
                    ))}
                </div>
            </div>
        </div>
    )

}
