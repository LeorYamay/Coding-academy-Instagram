import { HeartSvg } from "./Svglist"


export function CommentCmp({ comment }) {
    const { by, txt, likedBy } = comment
    return (
        <div className="comment">
            <div className="circle-container">
                <img src={comment.by.imgUrl} alt="User" className="user-img circle-image" />
            </div>
            <span className="username">{by.fullname}</span>
            <p className="comment-text">{txt}</p>
            {likedBy && likedBy.length > 0 && (
                <div className="likes">
                    <span>{likedBy.length}</span>
                </div>
            )}
            <HeartSvg label='like' type='like-button-icon' />
        </div>
    )
}
