import { storyService } from "../services/story.service.local.js";
import { userService } from "../services/user.service.local.js";
import { store } from "./store.js";
import { showSuccessMsg, showErrorMsg } from "../services/event-bus.service.js";
import {
  ADD_STORY,
  ADD_TO_STORYT,
  CLEAR_STORYT,
  REMOVE_STORY,
  REMOVE_FROM_STORYT,
  SET_STORIES,
  UNDO_REMOVE_STORY,
  UPDATE_STORY,
  SET_CURRENT_STORY,
  UPDATE_CURRENT_STORY,
} from "./story.reducer.js";
import { useSelector } from "react-redux";
// import { SET_SCORE } from "./user.reducer.js";

// Action Creators:
export function getActionRemoveStory(storyId) {
  return {
    type: REMOVE_STORY,
    storyId,
  };
}
export function getActionAddStory(story) {
  return {
    type: ADD_STORY,
    story,
  };
}
export function getActionUpdateStory(story) {
  return {
    type: UPDATE_STORY,
    story,
  };
}

export async function loadStories(filterBy = {}) {
  try {
    const stories = await storyService.query(filterBy);
    store.dispatch({
      type: SET_STORIES,
      stories,
    });
  } catch (err) {
    console.error("Cannot load stories", err);
    throw err;
  }
}

export async function removeStory(storyId) {
  try {
    await storyService.remove(storyId);
    store.dispatch(getActionRemoveStory(storyId));
  } catch (err) {
    console.error("Cannot remove story", err);
    throw err;
  }
}

export async function addStory(story) {
  try {
    const savedStory = await storyService.save(story);
    console.log("Added Story", savedStory);
    store.dispatch(getActionAddStory(savedStory));
    return savedStory;
  } catch (err) {
    console.error("Cannot add story", err);
    throw err;
  }
}

export async function updateStory(story) {
  try {
    const savedStory = await storyService.save(story);
    console.log("Updated Story:", savedStory);
    store.dispatch(getActionUpdateStory(savedStory));
    updateCurrentStory(savedStory);
  } catch (err) {
    console.error("Cannot save story", err);
  }
}

export function addToStoryt(story) {
  store.dispatch({
    type: ADD_TO_STORYT,
    story,
  });
}

export function removeFromStoryt(storyId) {
  store.dispatch({
    type: REMOVE_FROM_STORYT,
    storyId,
  });
}

// Demo for Optimistic Mutation
// (IOW - Assuming the server call will work, so updating the UI first)
export function onRemoveStoryOptimistic(storyId) {
  store.dispatch({
    type: REMOVE_STORY,
    storyId,
  });
  showSuccessMsg("Story removed");

  storyService
    .remove(storyId)
    .then(() => {
      console.log("Server Reported - Deleted Succesfully");
    })
    .catch((err) => {
      showErrorMsg("Cannot remove story");
      console.error("Cannot load stories", err);
      store.dispatch({
        type: UNDO_REMOVE_STORY,
      });
    });
}

export async function setCurrentStory(storyId) {
  const stories = store.getState().storyModule.stories;
  const story = stories.find((story) => story._id === storyId);
  if (story) {
    store.dispatch({ type: SET_CURRENT_STORY, story });
  } else {
    const storyFromStorage = await storyService.getById(storyId);
    if (storyFromStorage){
      store.dispatch({ type: SET_CURRENT_STORY, story:storyFromStorage });
    }else{
      store.dispatch({ type: SET_CURRENT_STORY, story:null });
    }
  }
}

function updateCurrentStory(story) {
  const currentStory = store.getState().storyModule.currentStory;
  if (currentStory?._id === story._id) {
    store.dispatch({ type: UPDATE_CURRENT_STORY, story });
  }
}
