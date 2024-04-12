import { demoUserService } from './demoUser.service'
import { demoStoryService } from './demoStory.service'

export const demoDataService = {
    createDemoData
}

function createDemoData() {
    const users = demoUserService.generateRandomUsers(10)
    const stories = demoStoryService.generateRandomStories(10)
    setAuthors(stories, users)
    randomLikestoStories(stories, users)
    return {users, stories}
}
function setAuthors(stories, users) {
    for (const story of stories) {
        const randomUserIndex = Math.floor(Math.random() * users.length)
        const randomUser = users[randomUserIndex]
        story.by = demoUserService.getMiniUser(randomUser)
        if (randomUser.myStoryIds) {
            users[randomUserIndex].myStoryIds.push(story._id)
        }
        else {
            users[randomUserIndex].myStoryIds = [story._id]
        }
    }
}

function randomLikestoStories(stories, users) {
    for (const story of stories) {
        const numLikes = Math.floor(Math.random() * users.length)
        const likedBy = []
        for (let i = 0; i < numLikes; i++) {
            const likerIndex = Math.floor(Math.random() * users.length)
            if (!story.likedBy.some(user => user._id === users[likerIndex]._id)) {
                story.likedBy.push(demoUserService.getMiniUser(users[likerIndex]))
            }
        }
    }
}
