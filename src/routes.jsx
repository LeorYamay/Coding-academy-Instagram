import { HomePage } from './pages/HomePage.jsx'
import { AboutUs } from './pages/AboutUs.jsx'
import { StoryIndex } from './pages/StoryIndex.jsx'
// import { ReviewIndex } from './pages/ReviewIndex.jsx'
import { ChatApp } from './pages/Chat.jsx'
import { AdminApp } from './pages/AdminIndex.jsx'
import { StoryView } from './pages/StoryView.jsx'
import { UserDetails } from './pages/UserDetails.jsx'
import { Explore } from './pages/Explore.jsx'
import { Reels } from './pages/Reels.jsx'

// Routes accesible from the main navigation (in AppHeader)
const routes = [
    { path: "/p/:storyId", component: StoryView },
    { path: "/:id", component: UserDetails },
    { path: "/explore/", component: Explore },
    { path: "/explore/tags/:tagName", component: Explore },
    { path: "/reels", component: Reels },
    { path: "/reels/:reelId", component: Reels },
    { path: "/direct/:folderId", component: ChatApp },
    { path: "/direct/:folderId/:chatid", component: ChatApp },
    { path: "/", component: HomePage },
  ];
  
  export default routes;