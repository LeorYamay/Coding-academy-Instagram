import React from "react";
import { Routes, Route, useLocation } from "react-router";

import routes from "./routes";

import { AppHeader } from "./cmps/AppHeader";
// import { AppFooter } from './cmps/AppFooter'
import { NavBar } from "./cmps/NavBar";
import { StoryView } from "./pages/StoryView";

import { UserDetails } from "./pages/UserDetails";
import { Explore } from "./pages/Explore";
import { Reels } from "./pages/Reels";
import { ChatApp } from "./pages/Chat";
import { HomePage } from "./pages/HomePage";
import { ViewModal } from "./cmps/ViewModal";

export function RootCmp() {
  const location = useLocation();
  const state = location.state;
  return (
    <div className="main-container ">
      {/* <AppHeader /> */}
      <NavBar />
      <Routes location={state?.backgroundLocation || location}>
        <Route path="/" element={<HomePage />} />
        <Route path="/:id" element={<UserDetails />} />

        <Route path="/explore/" element={<Explore />} />
        <Route path="/explore/tags/:tagName" element={<Explore />} />

        <Route path="/reels" element={<Reels />} />
        <Route path="/reels/:reelId" element={<Reels />} />

        <Route path="/direct/:folderId" element={<ChatApp />} />
        <Route path="/direct/:folderId/:chatid" element={<ChatApp />} />
        <Route path="/p/:storyId" element={<StoryView />} />
      </Routes>
      <Routes location={state===null?{...location,pathname:""}:location}>
        <Route path="/p/:storyId" element={<ViewModal />} />
        <Route path=""/>
      </Routes>
    </div>
  );
}
