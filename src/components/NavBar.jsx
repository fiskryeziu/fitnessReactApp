import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Link as LinkScroll } from 'react-scroll'

const NavBar = () => {
  const location = useLocation()

  return (
    <nav>
      <Link to="/">
        <h1>
          Alpha <span>Gym</span>
        </h1>
      </Link>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        {location.pathname === '/' && (
          <li style={{ cursor: 'pointer' }}>
            <LinkScroll to="exercises" smooth={true} duration={1000}>
              Exercise
            </LinkScroll>
          </li>
        )}
      </ul>
    </nav>
  )
}

export default NavBar
