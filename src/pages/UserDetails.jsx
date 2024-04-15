import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import { loadUser } from '../store/user.actions'
import { store } from '../store/store'
import { showSuccessMsg } from '../services/event-bus.service'
import { socketService, SOCKET_EVENT_USER_UPDATED, SOCKET_EMIT_USER_WATCH } from '../services/socket.service'
import { ADD_FOLLOW_RELATION } from '../store/user.reducer'

import { Follow } from '../cmps/Follow'

export function UserDetails() {
    const params = useParams()
    const user = useSelector(storeState => storeState.userModule.watchedUser)
    const loggedInUser = useSelector(storeState => storeState.userModule.user)

    const isLoggedInUser =(user && user._id === loggedInUser._id)

    useEffect(() => {
        loadUser({userName:params.id})

        socketService.emit(SOCKET_EMIT_USER_WATCH, params.id)
        socketService.on(SOCKET_EVENT_USER_UPDATED, onUserUpdate)

        return () => {
            socketService.off(SOCKET_EVENT_USER_UPDATED, onUserUpdate)
        }

    }, [])
    
    function onUserUpdate(user) {
        showSuccessMsg(`This user ${user.fullname} just got updated from socket`)
        store.dispatch({ type: 'SET_WATCHED_USER', user })
    }
    return (
        <section className="user-details">
            {user && <>
                <div className='square-container'>
                    <div className="circle-container">
                        <img src={user.imgUrl} alt="User" className="user-img circle-image" />
                    </div>
                </div>
                <div className='profile-username'>
                    {user.username.toLowerCase()}
                </div>
                {isLoggedInUser ? <>
                    <div className='edit-profile-button profile-button'>
                        Edit profile
                    </div>
                    <div className='profile-archive-button profile-button'>
                        View archive
                    </div>
                </> : <>
                    <Follow 
                    following={loggedInUser.following}
                    userId ={user._id}
                    loggedInId={loggedInUser._id}
                    />
                    <div className='profile-message-button profile-button'>
                            Message
                        </div>
                </>
                }
                <div className='profile-statistics'>
                    <div className='number-posts'>
                        {user.myStoryIds.length} posts
                    </div>
                    <div className='number-followers'>
                        {user.followers.length} followers
                    </div>
                    <div className='number-following'>
                        {user.following.length} following
                    </div>
                </div>
                {/* Demo for dynamic images: */}
                <div className="user-img" style={{ backgroundImage: `url('/img/u${0}.png')` }}>
                </div>
                <pre>
                    {JSON.stringify(user, null, 2)}
                </pre>
            </>}
        </section>
    )
}