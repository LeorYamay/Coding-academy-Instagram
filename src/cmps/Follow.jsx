import { useSelector } from "react-redux";
import { store } from "../store/store";
import { removeUserFollowingId, setUserFollowingId } from "../store/user.actions";


export function Follow({ userId }) {
  const loggedInUser = useSelector((storeState) => storeState.userModule.user);
  const inFollowList = loggedInUser.following.some(
    (followedUser) => followedUser._id === userId
  );
  const toggleFollow = () => {
    if (!inFollowList) {
      setUserFollowingId(loggedInUser._id, userId);
    } else {
      removeUserFollowingId(loggedInUser._id, userId);
    }
  };

  return (
    <button
      className="profile-following-button profile-button"
      onClick={() => toggleFollow()}
    >
      {inFollowList ? "Following" : "Follow"}
    </button>
    //follow back option
  );
}
