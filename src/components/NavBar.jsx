import React from 'react'
import { Link } from 'react-router-dom'
import { Link as LinkScroll } from 'react-scroll'

const NavBar = () => {
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
        <li>
          <LinkScroll to="exercises" smooth={true} duration={600}>
            Exercise
          </LinkScroll>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar
