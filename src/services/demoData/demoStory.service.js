import { faker } from '@faker-js/faker'

export const demoStoryService = {
    generateRandomStory
}
function generateRandomStory(user =null) {
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
      "fullname": user ? user.fullname : "", // You can remove this if not needed
      "imgUrl": user ? user.imgUrl : "" // You can remove this if not needed
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

