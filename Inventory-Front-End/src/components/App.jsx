import { BrowserRouter as Router } from "react-router-dom";
import React from 'react'
import Routes from "./Routes";

export default function App() {
  return (
    <div>
        <Router>
            <Routes/>
        </Router>
    </div>
  )
}
