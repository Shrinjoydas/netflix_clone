import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './Components/Home';
import Login from './Components/Login';


import './Styles/App.scss';
import './Styles/Navbar.scss';
import './Styles/Home.scss';
import './Styles/Row.scss';
import './Styles/Banner.scss';
import './Styles/Login.scss';
import './Styles/SignIn.scss';

import { auth } from './firebase';



function App() {
  const [user, setUser] = useState(null)
 

  useEffect(() => {
    const unsubsribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        setUser(userAuth)
      } else {
        setUser(null)
           }
    });
    return unsubsribe;
  }, []);

  return (
    <Router basename="/netflix_clone">
      {!user ? (
        <Login />
      ) : (
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      )}
    </Router>
  );
}

export default App;
