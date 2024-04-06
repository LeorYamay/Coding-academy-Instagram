

export function CommentCmp({ comment }) {
    const { by, txt, likedBy } = comment
    return (
        <div className="comment">
            <div className="user-info">
                <div className="circle-container">
                    <img src={by.imgUrl} alt="User" className="user-img circle-image" />
                </div>
                <span className="username">{by.fullname}</span>
            </div>
            <p className="comment-text">{txt}</p>
            {likedBy && likedBy.length > 0 && (
                <div className="likes">
                    <i className="far fa-heart"></i>
                    <span>{likedBy.length}</span>
                </div>
            )}
            <button className="like-button" onClick={() => {/* Handle like functionality here */ }}>
                <i className="far fa-heart"></i>
            </button>
        </div>
    )
}
