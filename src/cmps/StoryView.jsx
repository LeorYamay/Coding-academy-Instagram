// import { useParams } from 'react-router-dom'
// import { useState } from 'react'
import { useNavigate, useParams } from "react-router"

import { demoStoryService } from '../services/demoData/demoStory.service'
import { demoUserService } from '../services/demoData/demoUser.service'
import { utilService } from '../services/util.service'

import { CommentCmp } from './Comment'
import { CommentSvg, HeartSvg, SaveSvg, ShareSvg, ThreeDotsSVG } from './Svglist'

export function StoryView({ story }) {
    const navigate = useNavigate()
    
    const createdDateFormated=utilService.formatDate(story.createdAt)

    const hasLikes = story.likedBy.length > 0
    const firstLikedbyUser = (story.likedBy.length > 0) ? story.likedBy[0].fullname : ""
    const firstLikedBy = <span className='story-liked-by story-bold-link' onClick={() => navigate(firstLikedbyUser)}>{firstLikedbyUser}</span>
    const andOthers = <>{(story.likedBy.length > 1) && <>and <span className='story-others story-bold-link'>others</span> </>}</>
    const likeSection = <div className='likes-section'>
        Liked by {firstLikedBy} {andOthers}
    </div>

    return (
        <div className="story-view">
            <div className="story-info">
                <div className="circle-container">
                    <img src={story.by.imgUrl} alt="User" className="user-img circle-image" />
                </div>
                <div className='story-info-text'>
                    <span className="username story-bold-link">{story.by.fullname}</span>
                    <span className=''>{"•"+createdDateFormated+"•follow"}</span>
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
                <img src={story.imgUrl} alt="Post" className="story-image" />
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
            {hasLikes && likeSection}
                
            <div className="comments-section">
                <div className="comment">
                    <CommentCmp comment={{by:story.by, txt:story.txt}} /> {/* Render the main post text using the Comment component */}
                </div>
                {story.comments.map((comment, index) => (
                    <CommentCmp key={index} comment={comment} />
                ))}
            </div>
        </div>
    )
}
