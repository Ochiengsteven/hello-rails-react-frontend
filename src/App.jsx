// eslint-disable-next-line no-unused-vars
import React from 'react';
import {
  BrowserRouter as Router, Routes, Route, Link,
} from 'react-router-dom';
import Greeting from './components/greeting';
import Home from './components/home';

function App() {
  return (
    <div>
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/greeting">Greeting</Link>
            </li>
          </ul>
        </nav>
        <hr />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/greeting" element={<Greeting />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
