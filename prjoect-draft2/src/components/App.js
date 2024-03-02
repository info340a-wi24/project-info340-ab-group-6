import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
        {/* <Route path="/" element={<SignIn />}/> */}
        {/* {<Route path="/" element={<CreateProfile />} />} */}
        {/* {<Route path="/" element={<Profile />} />} */}
        </Routes>

      </div>
    </Router>

  );
}

export default App;