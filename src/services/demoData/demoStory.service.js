import { faker } from '@faker-js/faker'
import {demoUserService } from './demoUser.service'

export const demoStoryService = {
    generateRandomStory,
    generateRandomStories
}
function generateRandomStory(byUser =null) {
  const user = !byUser && demoUserService.generateRandomUser()
  const randomTagsCount = Math.floor(Math.random() * 5) + 1; // Random number of tags (1 to 5)
  const tags = Array.from({ length: randomTagsCount }, () => faker.lorem.word());

  const randomLat = faker.location.latitude();
  const randomLng = faker.location.longitude();

  const story = {
    "txt": faker.lorem.sentence(),
    "imgUrl": faker.image.url(),
    "status": "public",
    "createdAt": new Date(),
    "by": {
      "fullname": user ? user.fullname : "",
      "imgUrl": user ? user.imgUrl : ""
    },
    "loc": {
      "lat": randomLat,
      "lng": randomLng,
      "name": faker.location.city()
    },
    "comments": [],
    "likedBy": [],
    "tags": tags
  }

  return story
}

function generateRandomStories(n){
  const stories = []
  for (let i = 0; i < n; i++) {
    stories.push(generateRandomStory())
  }
  return stories
}