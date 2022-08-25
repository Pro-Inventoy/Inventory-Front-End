import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from 'react'
import Homepage from './Homepage/Homepage.jsx'
import Inventory from './Inventory/Inventory.jsx'
import Orders from './Orders/Orders.jsx'
import Users from './Users/Users.jsx'
import Profile from './Profile/Profile.jsx'
import Layout from './Page/Layout.jsx'

export default function App() {
  return (
    <div>
        <Router>
            <Routes>
                {/* <Route element={<AuthPage />} /> */}
                <Route element={<Layout />}>
                    <Route index element={<Homepage />} />
                    <Route path="inventory" element={<Inventory />} />
                    <Route path="orders" element={<Orders />} />
                    <Route path="users" element={<Users />} />
                    <Route path="profile" element={<Profile />} />
                </Route>
            </Routes>
        </Router>
    </div>
  )
}
