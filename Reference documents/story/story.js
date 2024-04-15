const story = {
  "_id": "s101",
  "txt": "Best trip ever",
  "imgUrl": "http://some-img", //Can be an array if decide to support multiple imgs
  "status":"public",
  "createdAt":"datenow()",
  "by": {
    "_id": "u101",
    "username": "Ulash Ulashi", // do we need this?
    "imgUrl": "http://some-img" // do we need this?
  },
  "loc": {
    "lat": 11.11,
    "lng": 22.22,
    "name": "Tel Aviv"
  },
  "comments": [
    {
      "id": "c1001",
      "by": {
        "_id": "u105",
        "username": "Bob", // do we need this?
        "imgUrl": "http://some-img" // do we need this?
      },
      "txt": "good one!",
      "likedBy": [ // Optional
        {
          "_id": "u105",
          "username": "Bob", // do we need this?
          "imgUrl": "http://some-img" // do we need this?
        }
        //add comments to comments (two levels)
      ]
    },
    {
      "id": "c1002",
      "by": {
        "_id": "u106",
        "username": "Dob", // do we need this?
        "imgUrl": "http://some-img" // do we need this?
      },
      "txt": "not good!",
    }
  ],
  "likedBy": [
    {
      "_id": "u105",
      "username": "Bob", // do we need this?
      "imgUrl": "http://some-img" // do we need this?
    },
    {
      "_id": "u106",
      "username": "Dob", // do we need this?
      "imgUrl": "http://some-img" // do we need this?
    }
  ],
  "tags":["fun", "kids"]
}

const user = {
  "_id": "u101",
  "username": "Muko",
  "password": "mukmuk",
  "fullname": "Muki Muka",
  "imgUrl": "http://some-img",
  "status":"public",//private
  "following": [
    {
      "_id": "u106",
      "username": "Dob",
      "imgUrl": "http://some-img"
    }
  ],
  "followers": [
    {
      "_id": "u105",
      "username": "Bob",
      "imgUrl": "http://some-img"
    }
  ],
  "myStoryIds": ["s104", "s111", "s123"],
  "savedStoryIds": ["s104", "s111", "s123"],
  "followedTags":["fun", "kids"]
}

const tag ={
  "_id":t123,
  "tagname":"tagLife",
  "numberOfStories":100
}