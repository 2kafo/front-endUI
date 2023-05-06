import React from 'react';
import { Link } from 'react-router-dom';
import './sidenav.css';

function Sidenav() {
  return (
    <div>
      <div className="sidebar">
        <h3> ToDo List Application</h3><hr />
        <div className="navigation">
          <ul>

            <li><a href="#project">To do List</a></li>

            <li><Link to='/logout  '>Log Out</Link></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Sidenav