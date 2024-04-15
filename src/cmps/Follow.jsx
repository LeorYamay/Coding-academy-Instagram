import { store } from "../store/store"
import { ADD_FOLLOW_RELATION, REMOVE_FOLLOW_RELATION } from "../store/user.reducer"



export function Follow({ following, userId }) {
    const inFollowList = following.some(followedUser => followedUser._id === userId)

    const toggleFollow = () => {
        if (!inFollowList) {
            store.dispatch({ type: ADD_FOLLOW_RELATION,  userId: userId })
        } else {
            store.dispatch({ type: REMOVE_FOLLOW_RELATION,  userId: userId  })
        }
    }


    return (
        <div className='profile-following-button profile-button' onClick={() => (toggleFollow())}>
            {inFollowList ? 'Following' : 'Follow'}
        </div>


    )
}
