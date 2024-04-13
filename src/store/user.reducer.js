import { demoUserService } from '../services/demoData/demoUser.service.js'
import { userService } from '../services/user.service.local.js'

export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'
export const CHANGE_COUNT = 'CHANGE_COUNT'
export const SET_USER = 'SET_USER'
export const SET_WATCHED_USER = 'SET_WATCHED_USER'
export const REMOVE_USER = 'REMOVE_USER'
export const SET_USERS = 'SET_USERS'
export const ADD_FOLLOW_RELATION = 'ADD_FOLLOW_RELATION'
export const REMOVE_FOLLOW_RELATION = 'REMOVE_FOLLOW_RELATION'

const initialState = {
    user: userService.getLoggedinUser(),
    users: [],
    stories: [],
    watchedUser : null
}
const addFollowRelation = (action, state) => {
    const follower = action.folower
    const miniFollower = demoUserService.getMiniUser(follower)
    const followed = action.followed
    const miniFollowed = demoUserService.getMiniUser(followed)
    follower.followers.push(miniFollowed)
    followed.following.push(miniFollower)
    userService.update(follower)
    userService.update(followed)
    const newState = { ...state, user: { ...users, followed, follower } }
    return newState
}
const removeFollowRelation = (action, state) => {
    const follower = action.folower
    const followed = action.followed
    follower.followers=follower.followers.filter(user=>user._id != followed._id)
    followed.following=followed.following.filter(user=>user._id != follower._id)
    userService.update(follower)
    userService.update(followed)
    const newState = { ...state, user: { ...users, followed, follower } }
    return newState
}
export function userReducer(state = initialState, action) {
    var newState = state
    switch (action.type) {
        case SET_USER:
            newState = { ...state, user: action.user }
            break
        case SET_WATCHED_USER:
            newState = { ...state, watchedUser: action.user }
            break
        case REMOVE_USER:
            newState = {
                ...state,
                users: state.users.filter(user => user._id !== action.userId)
            }
            break
        case SET_USERS:
            newState = { ...state, users: action.users }
            break
        case ADD_FOLLOW_RELATION:
            newState =addFollowRelation(action,state)
            break
        case REMOVE_FOLLOW_RELATION:
            newState =removeFollowRelation(action,state)
            break
        default:
        
    }
    // For debug:
    // window.userState = newState
    // console.log('State:', newState)
    return newState

}
