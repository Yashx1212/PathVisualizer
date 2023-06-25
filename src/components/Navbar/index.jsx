import React from 'react'
import './index.css'

function Navbar() {
  return (
    <div>
      <nav>
        <ul>
          <li><a href="#a">To Be Decided</a></li>
          <li><a href="#a">To Be Decided</a></li>
          <li className='dropdown'>
            <select>
              <option>Option 1</option>
              <option>Option 2</option>
              <option>Option 3</option>
            </select>
          </li>
          <li><a href="#a">To Be Decided</a></li>
          <li><a href="#a">To Be Decided</a></li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar;