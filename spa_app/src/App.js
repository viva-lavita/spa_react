import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navibar from './components/Navibar';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Home from './Home';
import Partnership from './Partnership';
import About from './About';

function App() {
  return (
    <div>
      <Router>
        <Navibar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="partnership" element={<Partnership />} />
          <Route path="about" element={<About />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;