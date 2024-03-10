import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import HomePage from './HomePage';
import CreateProfile from './CreateProfile'
import SignIn from './SignIn'
import Profile from './Profile'
function App() {
  return (
    <Router>

      <div>
      <Routes>

        {<Route path="/" element={<HomePage />} />}
        {<Route path="/SignIn" element={<SignIn />}/>}
        {<Route path="/CreateProfile" element={<CreateProfile />} />}
        <Route path="/profile/:profileId" element={<Profile />} />
        </Routes>

      </div>
    </Router>

  );
}

export default App;