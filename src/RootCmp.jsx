import React from 'react'
import { Routes, Route } from 'react-router'

import routes from './routes'

import { AppHeader } from './cmps/AppHeader'
import { AppFooter } from './cmps/AppFooter'
import { NavBar } from './cmps/NavBar'
import { StoryView } from './cmps/StoryView'

import { UserDetails } from './pages/UserDetails'
import { Explore } from './pages/Explore'
import { Reels } from './pages/Reels'
import { ChatApp } from './pages/Chat'
import { HomePage } from './pages/HomePage'

export function RootCmp() {

    return (
        <div className='main-container '>
            {/* <AppHeader /> */}
            <NavBar />
            <main>
                <Routes>
                    <Route path="/" element={<HomePage/>} />

                    <Route path="/:id" element={<UserDetails />} />

                    <Route path="/explore/" element={<Explore />} />
                    <Route path="/explore/tags/:tagName" element={<Explore />} />

                    <Route path="/reels" element={<Reels />} />
                    <Route path="/reels/:reelId" element={<Reels />} />

                    <Route path="/direct/:folderId" element={<ChatApp />} />
                    <Route path="/direct/:folderId/:chatid" element={<ChatApp />} />
                    <Route path="/p/:storyId" element={<StoryView />} />
                </Routes>
                {/* <Routes>
                    {routes.map(route => <Route key={route.path} exact={true} element={route.component} path={route.path} />)}
                    <Route path="user/:id" element={<UserDetails />} />
                </Routes> */}
            </main>
            {/* <AppFooter /> */}
        </div>
    )
}


