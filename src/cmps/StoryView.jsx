import { useParams } from 'react-router-dom'
import { useState } from 'react'

import { CommentCmp } from './Comment'
import { demoStoryService } from '../services/demoData/demoStory.service'
import { demoUserService } from '../services/demoData/demoUser.service'
import { CommentSvg, HeartSvg, SaveSvg, ShareSvg, ThreeDotsSVG } from './Svglist'


export function StoryView({ story }) {

    const params = useParams()

    const [showModal, setShowModal] = useState(false) // maybe remove for now?
    const storyId = params.storyId

    const handleCloseModal = () => setShowModal(false)
    const handleShowModal = () => setShowModal(true)

    const { imgUrl, by, loc, txt, comments } = story
    let likeText = ""
    const hasLikes = story.likedBy.length > 0
    if (story.likedBy.length > 0) {
        const firstLikedBy = story.likedBy[0]
        likeText = "Liked by " + story.likedBy[0] + (story.likedBy.length > 1) ? "and more" : ""
    }
    return (
        <div className="story">
            <div className="story-info">
                <div className="circle-container">
                    <img src={story.by.imgUrl} alt="User" className="user-img circle-image" />
                </div>
                <div className='story-info-text'>
                    <span className="username">{story.by.fullname}</span>
                    {(story.loc.name) &&
                        <div className="story-location">
                            {story.loc.name}
                        </div>
                    }
                </div>
                <div className='story-info-button'>
                <ThreeDotsSVG label='more options' type ='more-button'/>
                </div>
            </div>
            <div className="image-section">
                <img src={imgUrl} alt="Post" className="story-image" />
            </div>
            <div className='actions-section'>
                <div className='action-button'>
                    <HeartSvg label='like' type='like-button' />
                </div>
                <div className='action-button'>
                    <CommentSvg label='comment' type='comment-button' />
                </div>
                <div className='action-button'>
                    <ShareSvg label='share' type='share-button' />
                </div>
                <div className='action-button'>
                    <SaveSvg label='save' type='save-button' />
                </div>
            </div>
            {hasLikes &&
                <div className='likes-section'>
                    {likeText}
                </div>}
            <div className="comments-section">
                <div className="comment">
                    <CommentCmp comment={{ by, txt }} /> {/* Render the main post text using the Comment component */}
                </div>
                {comments.map((comment, index) => (
                    <CommentCmp key={index} comment={comment} />
                ))}
            </div>
        </div>
    )
}
