import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';

import Signup from './components/Signup';
import Login from './components/Login';
import AuthorizedOnly from './components/AuthorizedOnly';

const App = () => {
  const [currUser, setCurrUser] = useState({});

  return (
    <Router>
      <Routes>
        <Route
          path="/signup"
          element={<Signup signupHandler={setCurrUser} />}
        />

        <Route path="/login" element={<Login loginHandler={setCurrUser} />} />

        <Route path="/" element={<Navigate replace to={'/home'} />} />

        <Route
          path="/:page"
          element={
            <AuthorizedOnly
              user={currUser}
              logoutHandler={() => setCurrUser({})}
            />
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
