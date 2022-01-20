import React from 'react'

function GlobalNav() {
  return (
    <nav>
        <div>MyLogoMyLogo</div>
        <div>
            <ul>
                <li>About</li>
                <li>
                    Courses
                    <ul>
                        <li>Engineering Mathematics</li>
                        <li>Engineering Thermodynamics</li>
                        <li>Engineering Mechanics</li>
                        <li>Strength of Materials</li>
                    </ul>
                </li>
                <li>My Courses</li>
                <li>Blog</li>
            </ul>
        </div>
    </nav>
  )
}

export default GlobalNav
