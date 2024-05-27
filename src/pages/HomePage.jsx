import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

// import { demoStoryService } from '../services/demoData/demoStory.service'
// import { demoDataService } from '../services/demoData/demoData.service'

import { StoryPreview } from '../cmps/StoryPreview.jsx'
import { loadStories } from '../store/story.actions'

import { SOCKET_EVENT_STORY_REMOVED, socketService, SOCKET_EVENT_STORY_ADDED, SOCKET_EVENT_STORY_UPDATED } from '../services/socket.service.js'
// import { SOCKET_EVENT_STORY_REMOVED, socketService } from '../services/socket.service.js'

export function HomePage() {
    const stories = useSelector(storeState => storeState.storyModule.stories)
    const loggedInUser = useSelector(storeState => storeState.userModule.user)
    
    const dispatch = useDispatch()

    useEffect(() => {
        loadStories()

        // socketService.on(SOCKET_EVENT_STORY_ADDED, story => {
        //     dispatch(getActionAddStory(story))
        // })

        // socketService.on(SOCKET_EVENT_STORY_UPDATED, story => {
        //     dispatch(getActionUpdateStory(story))
        // })

        // socketService.on(SOCKET_EVENT_STORY_REMOVED, storyId => {
        //     dispatch(getActionRemoveStory(storyId))
        // })

        return () => {
            // socketService.off(SOCKET_EVENT_STORY_ADDED)
            // socketService.off(SOCKET_EVENT_STORY_UPDATED)
            // socketService.off(SOCKET_EVENT_STORY_REMOVED)
        }
    }, [])
    // const {users,stories}=demoDataService.createDemoData()
    // const stories = demoStoryService.generateRandomStories(2);
    return (
        <main className="stories-container">
            {(stories)&&stories.map((s) =>(<StoryPreview story={s} index={s._id} key ={s._id} />))}
        </main >
    )
}