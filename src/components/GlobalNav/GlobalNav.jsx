import React, { useContext } from 'react'
import { Link } from "react-router-dom"
import { UserContext } from '../../context'

function GlobalNav() {
  const [user, setUser] = useContext(UserContext)

  return (
    <nav>
        <div><Link to="/">MyLogoMyLogo</Link></div>
        <div>
            <ul>
                <li>About</li>
                <li>
                    <Link to="/courses">Courses</Link>
                </li>
                <li><Link to="/mycourses" >My Courses</Link></li>
                <li>Blog</li>
            </ul>
        </div>
        <div>
          {user.name}
        </div>
    </nav>
  )
}

export default GlobalNav
