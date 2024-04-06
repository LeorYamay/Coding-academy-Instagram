import { faker } from '@faker-js/faker';

export const demoUserService = {
    createRandomUser,
    randomFollowRelations
}

function generateRandomName() {
    const username = faker.internet.userName().toLowerCase().replace(/\s/g, '')
    const fullname = faker.person.fullName()
    return { username, fullname }
}

function generateRandomPassword(length = 8) {
    const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_=+'
    let password = ''
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length)
        password += charset[randomIndex]
    }
    return password
}

function generateRandomImage() {
    const imgUrl = faker.image.avatar()
    return imgUrl
}

function getRandomStatus() {
    return Math.random() < 0.5 ? 'public' : 'private'
}

function generateRandomTags(numTags = 5) {
    const tags = []
    for (let i = 0; i < numTags; i++) {
        tags.push(faker.lorem.word())
    }
    return tags
}

function createRandomUser() {
    try {
        const { username, fullname } = generateRandomName()
        const password = generateRandomPassword()
        const imgUrl = generateRandomImage()
        const status = getRandomStatus()
        const followedTags = generateRandomTags()

        const user = {
            username,
            password,
            fullname,
            imgUrl,
            status,
            followedTags
        }

        return user
    } catch (error) {
        console.error('Error creating random user:', error)
        throw error
    }
}

function randomlyAssignFollowers(user, userList) {
    const numFollowers = Math.floor(Math.random() * userList.length)
    const followers = []
    for (let i = 0; i < numFollowers; i++) {
        const followerIndex = Math.floor(Math.random() * userList.length)
        if (userList[followerIndex]._id !== user._id) {
            followers.push({
                _id: userList[followerIndex]._id,
                fullname: userList[followerIndex].fullname,
                imgUrl: userList[followerIndex].imgUrl
            })
        }
    }
    return followers
}

async function randomlyAssignFollowing(user, userList) {
    const numFollowing = Math.floor(Math.random() * userList.length)
    const following = []
    for (let i = 0; i < numFollowing; i++) {
        const followingIndex = Math.floor(Math.random() * userList.length)
        if (userList[followingIndex]._id !== user._id) {
            following.push({
                _id: userList[followingIndex]._id,
                fullname: userList[followingIndex].fullname,
                imgUrl: userList[followingIndex].imgUrl
            })
        }
    }
    return following
}

async function randomFollowRelations(user, userList) {
    const followers = randomlyAssignFollowers(user, userList)
    const following = await randomlyAssignFollowing(user, userList)

    return {
        followers,
        following
    }
}
