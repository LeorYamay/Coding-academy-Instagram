
import { storageService } from './async-storage.service.js'
import { utilService } from './util.service.js'
import { userService } from './user.service.local.js'
import { demoStoryService } from './demoData/demoStory.service.js'
import { demoDataService } from './demoData/demoData.service.js'

const STORAGE_KEY = 'story'

export const storyService = {
    query,
    getById,
    save,
    remove,
    getEmptyStory,
    addStoryMsg
}
window.cs = storyService


async function query(filterBy = { txt: '', tag: '' }) {
    let stories = await storageService.query(STORAGE_KEY)
    if (!stories || stories.length === 0) {
        const users = await userService.getUsers()
        stories=demoStoryService.generateRandomStories(15)
        demoDataService.UpdateStoriesWithUsers(stories, users)
        storageService._save(STORAGE_KEY, stories)
    }
    if (filterBy.txt) {
        const regex = new RegExp(filterBy.txt, 'i')
        stories = stories.filter(story => regex.test(story.txt) || regex.test(story.description))
    }
    if (filterBy.tag) {
        stories = stories.filter(story => story.tags.some(tag=>tag===filterBy.tag))
    }
    if (filterBy.byUserName) {
        const regexName = new RegExp(filterBy.byUserName, 'i')
        stories = stories.filter(story => regex.test(story.by.fullname))
    }
    if (filterBy.likedById) {
        stories = stories.filter(story => story.likedBy.some(miniUser => miniUser._id === filterBy.likedById))
    }
    return stories
}

function getById(storyId) {
    return storageService.get(STORAGE_KEY, storyId)
}

async function remove(storyId) {
    // throw new Error('Nope')
    await storageService.remove(STORAGE_KEY, storyId)
}

async function save(story) {
    var savedStory
    if (story._id) {
        savedStory = await storageService.put(STORAGE_KEY, story)
    } else {
        // Later, owner is set by the backend
        story.owner = userService.getLoggedinUser()
        savedStory = await storageService.post(STORAGE_KEY, story)
    }
    return savedStory
}

async function addStoryMsg(storyId, txt) {
    // Later, this is all done by the backend
    const story = await getById(storyId)
    if (!story.msgs) story.msgs = []

    const msg = {
        id: utilService.makeId(),
        by: userService.getLoggedinUser(),
        txt
    }
    story.msgs.push(msg)
    await storageService.put(STORAGE_KEY, story)

    return msg
}

function getEmptyStory() {
    //todo fix this
    return {
        
    }
}


// TEST DATA
// storageService.post(STORAGE_KEY, {vendor: 'Subali Rahok 2', price: 980}).then(x => console.log(x))




