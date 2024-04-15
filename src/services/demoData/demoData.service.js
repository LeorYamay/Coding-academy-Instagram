import { faker } from '@faker-js/faker'

import { demoUserService } from './demoUser.service'
import { demoStoryService } from './demoStory.service'
import { utilService } from '../util.service'
import { userService } from '../user.service.local'

export const demoDataService = {
    createDemoData,
    UpdateStoriesWithUsers
}

function createDemoData() {
    const users = demoUserService.generateRandomUsers(10)
    const stories = demoStoryService.generateRandomStories(10)
    UpdateStoriesWithUsers(stories, users)
    return {users, stories}
}
function UpdateStoriesWithUsers(stories, users) {
    setAuthors(stories, users)
    randomLikestoStories(stories, users)
    randomComments(stories, users)
}

function setAuthors(stories, users) {
    for (const story of stories) {
        const randomUserIndex = Math.floor(Math.random() * users.length)
        const randomUser = users[randomUserIndex]
        story.by = userService.getMiniUser(randomUser)
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

        for (let i = 0; i < numLikes; i++) {
            const likerIndex = Math.floor(Math.random() * users.length)
            if (!story.likedBy.some(user => user._id === users[likerIndex]._id)) {
                story.likedBy.push(userService.getMiniUser(users[likerIndex]))
            }
        }
    }
}
function randomComment(story, users) {
    const _id = utilService.makeId()
    const txt = faker.lorem.sentence()
    const posterIndex = Math.floor(Math.random() * users.length)
    const by = userService.getMiniUser(users[posterIndex])
    const numLikes = Math.floor(Math.random() * users.length)
    const likedBy = []
    for (let i = 0; i < numLikes; i++) {
        const likerIndex = Math.floor(Math.random() * users.length)
        likedBy.push(userService.getMiniUser(users[likerIndex]))
    }
    const comment = { _id, by, txt, likedBy }

    story.comments.push(comment)
}
function randomComments(stories, users, maxRandomComments = 15) {
    for (const story of stories) {
        const numComments = Math.floor(Math.random() * maxRandomComments)
        for (let i = 0; i < numComments; i++) {
            randomComment(story, users)
        }
    }
}