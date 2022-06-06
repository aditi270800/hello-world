import React, { useState } from 'react';
import './App.css';
import {BrowserRouter, Link, NavLink, Route, Routes} from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li><Link to="/hello-world">Go to hello world</Link></li>
            <li><Link to="/">Go home</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/hello-world">
            I am at hello world
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;
