import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from 'react'
import AuthPage from './AuthPage/AuthPage.jsx'
import HomePage from './HomePage/HomePage.jsx'
import Inventory from './Inventory/Inventory.jsx'
import Orders from './Orders/Orders.jsx'
import Layout from './Layout/Layout.jsx'
import Users from './Users/Users.jsx'
import Profile from './Profile/Profile.jsx'


export default function App() {
  return (
    <div>
        <Router>
            <Routes>
                <Route element={<AuthPage />} />
                <Route element={<Layout />}>
                    <Route element={<HomePage />} />
                    <Route element={<Inventory />} />
                    <Route element={<Orders />} />
                    <Route element={<Users />} />
                    <Route element={<Profile />} />
                </Route>
            </Routes>
        </Router>
    </div>
  )
}
