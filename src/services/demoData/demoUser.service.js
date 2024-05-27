import { faker } from "@faker-js/faker";
import { utilService } from "../util.service";
import { userService } from "../user.service.local";

export const demoUserService = {
  generateRandomUser,
  generateRandomUsers,
  generateAdminUser,
  randomFollowRelations,
};
function generateRandomUsers(num = 10) {
  const users = [];
  for (let i = 0; i < num; i++) {
    users.push(generateRandomUser());
  }
  return users;
}
function generateRandomName() {
  const username = faker.internet.userName().toLowerCase().replace(/\s/g, "");
  const fullname = faker.person.fullName();
  return { username, fullname };
}

function generateRandomPassword(length = 8) {
  const charset =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_=+";
  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    password += charset[randomIndex];
  }
  return password;
}

function generateRandomImage() {
  const imgUrl = faker.image.avatar();
  return imgUrl;
}

function getRandomStatus() {
  return Math.random() < 0.5 ? "public" : "private";
}

function generateRandomTags(numTags = 5) {
  const tags = [];
  for (let i = 0; i < numTags; i++) {
    tags.push(faker.lorem.word());
  }
  return tags;
}
function generateRandomBio(min = 3, max = 15) {
  const bio = faker.lorem.sentence({ min: min, max: max });
  return bio;
}
function generateRandomUser() {
  try {
    const { username, fullname } = generateRandomName();
    const password = generateRandomPassword();
    const imgUrl = generateRandomImage();
    const status = getRandomStatus();
    const followedTags = generateRandomTags();
    const _id = utilService.makeId();
    const bio = generateRandomBio();

    const user = {
      _id,
      username,
      password,
      fullname,
      imgUrl,
      status,
      followedTags,
      followers: [],
      following: [],
      myStoryIds: [],
      savedStoryIds: [],
      bio,
    };

    return user;
  } catch (error) {
    console.error("Error creating random user:", error);
    throw error;
  }
}

function randomlyAssignFollowers(user, userList) {
  const numFollowers = Math.floor(Math.random() * userList.length);
  const followers = [];
  for (let i = 0; i < numFollowers; i++) {
    const followerIndex = Math.floor(Math.random() * userList.length);
    if (
      userList[followerIndex]._id !== user._id &&
      !followers.some(
        (follower) => follower._id === userList[followerIndex]._id
      )
    ) {
      followers.push(userService.getMiniUser(userList[followerIndex]));
    }
  }
  return followers;
}

// not used
async function randomFollowRelations(userList) {
  try {
    for (const user of userList) {
      const followers = randomlyAssignFollowers(user, userList);

      user.followers = followers;

      for (const follower of followers) {
        const followerToUpdate = userList.find((u) => u._id === follower._id);
        if (followerToUpdate) {
          if (!followerToUpdate.following) {
            followerToUpdate.following = [];
          }
          followerToUpdate.following.push(userService.getMiniUser(user));
        }
      }
    }

    return userList;
  } catch (error) {
    console.error("Error assigning random follow relations:", error);
    throw error;
  }
}

async function generateAdminUser() {
  let user = await generateRandomUser();
  user = {
    ...user,
    username: "Admin",
    fullname: "Leor Yamay",
    password: "12345",
  };
  return user;
}
