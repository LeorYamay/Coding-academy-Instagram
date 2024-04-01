
import { storageService } from './async-storage.service.js'
import { utilService } from './util.service.js'
import { userService } from './user.service.js'

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


async function query(filterBy = { txt: '', price: 0 }) {
    //todo: fix this for stories
    var stories = await storageService.query(STORAGE_KEY)
    if (filterBy.txt) {
        const regex = new RegExp(filterBy.txt, 'i')
        stories = stories.filter(story => regex.test(story.vendor) || regex.test(story.description))
    }
    if (filterBy.price) {
        stories = stories.filter(story => story.price <= filterBy.price)
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
        vendor: 'Susita-' + (Date.now() % 1000),
        price: utilService.getRandomIntInclusive(1000, 9000),
    }
}


// TEST DATA
// storageService.post(STORAGE_KEY, {vendor: 'Subali Rahok 2', price: 980}).then(x => console.log(x))




