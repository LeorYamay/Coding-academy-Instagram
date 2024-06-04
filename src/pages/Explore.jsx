import { useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { loadStories } from "../store/story.actions";
import { useSelector } from "react-redux";

export function Explore({userId = ""}) {
  const params = useParams();
  const Navigate = useNavigate();
  const location = useLocation();

  const tag = params?.tagName;
  const stories = useSelector((storeState) => storeState.storyModule.stories);
  useEffect(() => {
    loadStories({ tag: tag ? tag : "", byUserId: userId });
  }, [tag,userId]);
  return (
    <div className="explore-container">
      
      {tag &&<><div>explore{tag ? " tag = " + tag : ""}</div>  <span>Top posts</span></>}
      <div className="explore-img-container">
        {stories &&
          stories.map((story) => (
            <img
              src={story.imgUrl}
              index={story._id}
              key={story._id}
              className="explore-img"
              onClick={() => {
                Navigate(`/p/${story._id}`, {
                  state: { backgroundLocation: location },
                });
              }}
            />
          ))}
      </div>
    </div>
  );
}
