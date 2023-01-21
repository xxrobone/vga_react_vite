import React from 'react'

import './Nav.scss'

export default function Nav() {
  return (
    <nav className="nav">
            <ul className="nav_wrapper">
                <li className="nav_item"><a href="/" className="nav_link">Games</a></li>
                <li className="nav_item"><a href="/" className="nav_link" aria-disabled>Movies</a></li>
            </ul>
        </nav>
  )
}
