import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { loadUser } from "../store/user.actions";
import { store } from "../store/store";
import { showSuccessMsg } from "../services/event-bus.service";
import {
  socketService,
  SOCKET_EVENT_USER_UPDATED,
  SOCKET_EMIT_USER_WATCH,
} from "../services/socket.service";

import { Follow } from "../cmps/Follow";
import { Explore } from "./Explore";

export function UserDetails() {
  const params = useParams();
  const user = useSelector((storeState) => storeState.userModule.watchedUser);
  const loggedInUser = useSelector((storeState) => storeState.userModule.user);

  const isLoggedInUser = user && user._id === loggedInUser._id;
  useEffect(() => {
    loadUser({ userName: params.id });

    // socketService.emit(SOCKET_EMIT_USER_WATCH, params.id)
    // socketService.on(SOCKET_EVENT_USER_UPDATED, onUserUpdate)

    return () => {
      loadUser();
      // socketService.off(SOCKET_EVENT_USER_UPDATED, onUserUpdate)
    };
  }, [user]);

  function onUserUpdate(user) {
    showSuccessMsg(`This user ${user.fullname} just got updated from socket`);
    store.dispatch({ type: "SET_WATCHED_USER", user });
  }
  if (!user || user === undefined) {
    return <></>;
  }
  return (
    <main className="user-details">
      <section className="info-container">
        <div className="square-container">
          <div className="circle-container">
            <img
              src={user.imgUrl}
              alt="User"
              className="user-img circle-image"
            />
          </div>
        </div>
        <div className="text-container">
          <div className="options">
            <div className="profile-username">
              {user.username.toLowerCase()}
            </div>
            {isLoggedInUser ? (
              <>
                <button className="edit-profile-button profile-button">
                  Edit profile
                </button>
                <button className="profile-archive-button profile-button">
                  View archive
                </button>
              </>
            ) : (
              <>
                <Follow userId={user._id} />
                <button className="profile-message-button profile-button">
                  Message
                </button>
              </>
            )}
          </div>

          <div className="profile-statistics">
            <div className="number-posts">
              <span className="bold-number">{user.myStoryIds.length}</span>{" "}
              posts
            </div>
            <div className="number-followers">
              <span className="bold-number">{user.followers.length}</span>{" "}
              followers
            </div>
            <div className="number-following">
              <span className="bold-number">{user.following.length}</span>{" "}
              following
            </div>
          </div>
          <span className="user-fullname">{user.fullname}</span>
          <p className="user-bio">{user.bio}</p>
          {/* Demo for dynamic images: */}
          {/* <div className="user-img" style={{ backgroundImage: `url('/img/u${0}.png')` }}>
                </div> */}
          {/* <pre>
                    {JSON.stringify(user, null, 2)}
                  </pre> */}
        </div>
      </section>
      <Explore userId={user._id} />
    </main>
  );
}
