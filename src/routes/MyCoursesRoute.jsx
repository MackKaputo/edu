import React, { useContext } from 'react'
import { Outlet } from 'react-router'
import { UserContext } from "../context"

function MyCoursesRoute() {
    const [user] = useContext(UserContext)
  
    if (user.name === "elie") {
        return <div> Hey Elie, not authorized</div>
    }

    return <Outlet />
}

export default MyCoursesRoute
