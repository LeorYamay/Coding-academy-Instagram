import React from 'react'
import { Routes, Route } from 'react-router'

import routes from './routes'

import { AppHeader } from './cmps/AppHeader'
import { AppFooter } from './cmps/AppFooter'
import { UserDetails } from './pages/UserDetails'
import { NavBar } from './cmps/NavBar'

export function RootCmp() {

    return (
        <div className='main-container '>
            {/* <AppHeader /> */}
            <NavBar/>
            <main>
                {/* <Routes>
                    {routes.map(route => <Route key={route.path} exact={true} element={route.component} path={route.path} />)}
                    <Route path="user/:id" element={<UserDetails />} />
                </Routes> */}
            </main>
            {/* <AppFooter /> */}
        </div>
    )
}


