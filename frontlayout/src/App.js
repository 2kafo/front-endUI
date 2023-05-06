import React from 'react';
import { Home,Login,Signup } from './pages';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className='App'>
      <Home />
    </div>
  )
}

export default App