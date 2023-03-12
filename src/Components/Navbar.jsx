import React, { useEffect, useState } from 'react';
import { auth } from '../firebase';


import logo from '../Images/logo.png';
import avtar from '../Images/Netflix-avatar.png';


function NavBar() {
  const [show, setShow] = useState(false);
  // const navigate = useNavigate();

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        setShow(true);
      } else setShow(false);
    });
  }, []);

  return (
    <nav className={`nav ${show && 'nav_black'}`}>

      <img src={logo} alt="logo" />

      <img onClick={() => auth.signOut()} className='avatar' src={avtar} alt="avatar"  />

      
    </nav>
  );
}

export default NavBar;
