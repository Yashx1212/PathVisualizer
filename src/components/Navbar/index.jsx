import React, { useState } from 'react';
import RunAlgo from '../../Utils/Utils';
import './index.css';

function Navbar(props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <nav>
        <ul>
          <li>
            <a href="#a">To Be Decided</a>
          </li>
          <li>
            <a href="#a">To Be Decided</a>
          </li>
          <li className="dropdown">
            <a href="#a" onClick={toggleDropdown}>
              {props.selectedAlgorithm || "Select an Algorithm"}
            </a>
            {isOpen && (
              <ul className="dropdown-menu">
                <li>
                  <a href="#a" onClick = {() => props.handleSelectedAlgorithm("BFS")}>BFS</a>
                </li>
                <li>
                  <a href="#a" onClick = {() => props.handleSelectedAlgorithm("DFS")}>DFS</a>
                </li>
              </ul>
            )}
          </li>
          <li>
            <a href="#a">Visualize</a>
          </li>
          <li>
            <a href="#a">To Be Decided</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
