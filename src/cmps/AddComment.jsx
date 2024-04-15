import { store } from '../store/store'

import { useState } from "react"
import { EmojiSVG } from "./Svglist"
import { ADD_COMMENT_TO_STORY } from '../store/story.reducer'


export function AddComment({loggedInUserId,storyId}) {
    const [comment, setComment] = useState('')
    const handleInputChange = (event) => {
        setComment(event.target.value)
    }
    const emojis = ['😊', '😄', '😍', '😎', '🤩']
    const addEmojiToComment = () => {
        const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)]
        setComment(prevComment => prevComment + randomEmoji)
    }

    const postComment = () =>{
        store.dispatch({type:ADD_COMMENT_TO_STORY,storyId:storyId,txt:comment,loggedInUserId:loggedInUserId})
    }
    return (
        <div className="story-add-comment">
            <input
                type="text"
                className="add-comment-input"
                placeholder="Add a comment..."
                value={comment}
                onChange={handleInputChange}
            />
            <div className="story-comment-buttons">
                {comment &&
                    <button className="post-button" onClick={postComment}>Post</button>
                }
                <div className="story-emoji-button" onClick={addEmojiToComment}>
                    <EmojiSVG label='emoji' type='story-comment-emoji' />
                </div>
            </div>
        </div>
    )

}