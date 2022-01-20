import React from 'react'
import { Link } from "react-router-dom"

function GlobalNav() {
  return (
    <nav>
        <div><Link to="/">MyLogoMyLogo</Link></div>
        <div>
            <ul>
                <li>About</li>
                <li>
                    <Link to="/courses">Courses</Link>
                </li>
                <li>My Courses</li>
                <li>Blog</li>
            </ul>
        </div>
    </nav>
  )
}

export default GlobalNav
