import { storageService } from './async-storage.service'
import { demoUserService } from './demoData/demoUser.service'
import { httpService } from './http.service'

// import { storageService } from './async-storage.service.js'

const STORAGE_KEY_LOGGEDIN_USER = 'loggedinUser'
const STORAGE_KEY = 'user'

export const userService = {
    login,
    logout,
    signup,
    getLoggedinUser,
    saveLocalUser,
    getUsers,
    getById,
    getByUserName,
    remove,
    update,
     updateLocalUserFields,
     getMiniUser
}

window.userService = userService


async function getUsers() {
    let users = await storageService.query(STORAGE_KEY)
    if (!users || users.length ===0){
        users = demoUserService.generateRandomUsers(15)
        const admin =await demoUserService.generateAdminUser()
        users.push(admin)
        demoUserService.randomFollowRelations(users)
        storageService._save(STORAGE_KEY, users)
    }
    return users

}



async function getById(userId) {
    const user = await storageService.get(STORAGE_KEY, userId)

    return user
}
async function getByUserName(userName) {
    const users = await storageService.query(STORAGE_KEY)
    const regexUserName = new RegExp(`${userName}`, 'i')
    const user = users.filter(user=>regexUserName.test(user.username)).find(() => true)
    return user
}
function remove(userId) {
    return storageService.remove(STORAGE_KEY, userId)

}

async function update(user) {
    // const user = await storageService.get(STORAGE_KEY, _id)
    // user.likedBy = likedBy
    // user.followers = followers
    // user.following = following
    await storageService.put(STORAGE_KEY, user)

    return user
}

async function login(userCred) {
    const users = await getUsers()
    const user = users.find(user => user.username === userCred.username)

    if (user) {
        return saveLocalUser(user)
    }
}
async function signup(userCred) {
    userCred.score = 10000
    if (!userCred.imgUrl) userCred.imgUrl = 'https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png'
    const user = await storageService.post(STORAGE_KEY, userCred)

    return saveLocalUser(user)
}

async function logout() {
    sessionStorage.removeItem(STORAGE_KEY_LOGGEDIN_USER)
    return await storageService.post('auth/logout')
}



function saveLocalUser(user) {
    // user = { _id: user._id, fullname: user.fullname, imgUrl: user.imgUrl, score: user.score }
    sessionStorage.setItem(STORAGE_KEY_LOGGEDIN_USER, JSON.stringify(user))
    return user
}

function updateLocalUserFields(user) {
    const currUser = getLoggedinUser()
    const userToSave = { ...currUser, ...user }
    sessionStorage.setItem(STORAGE_KEY_LOGGEDIN_USER, JSON.stringify(userToSave))
    return user
}

function getLoggedinUser() {
    return JSON.parse(sessionStorage.getItem(STORAGE_KEY_LOGGEDIN_USER))
}

function getMiniUser(user){
    return{
        _id:user._id,
        username:user.username,
        imgUrl:user.imgUrl
    }
}

// ;(async ()=>{
//     await userService.signup({fullname: 'Puki Norma', username: 'puki', password:'123',score: 10000, isAdmin: false})
//     await userService.signup({fullname: 'Master Adminov', username: 'admin', password:'123', score: 10000, isAdmin: true})
//     await userService.signup({fullname: 'Muki G', username: 'muki', password:'123', score: 10000})
// })()



