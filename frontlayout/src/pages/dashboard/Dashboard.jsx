import React from 'react';
import { Sidenav, Form,ToDo } from '../../components';
import './dashboard.css';

function Dashboard() {
  return (
    <div>
      <div className="container clearfix">

        <Sidenav />

        <div className="section" id="project">
          <Form />

         <ToDo />
        </div>
      </div>
    </div>

  )
}

export default Dashboard