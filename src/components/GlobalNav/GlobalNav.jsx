import React, { useContext } from 'react'
import { Link } from "react-router-dom"
import { UserContext } from '../../context'
import styles from "./GlobalNav.module.css"

function GlobalNav() {
  const [user, setUser] = useContext(UserContext)

  return (
    <nav className={styles.global_nav}>
        <ul>
            <li><Link to="/">TechEqual</Link></li>
        </ul>

        <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/courses">Courses</Link>
            </li>
            <li>
              <Link to="/courses">Blog</Link>
            </li>
            <li>
              <Link to="/mycourses" >MyCourses</Link>
            </li>
            <li>
              <Link to="/">{!user.name? "Login" : "Logout"}</Link>
            </li>
        </ul>

        <ul>
          <li>
            <Link to="/courses">{user.name}</Link>
          </li>
        </ul>
    </nav>
  )
}

export default GlobalNav
