import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IoIosList } from 'react-icons/io';
import logo from '../img/logo.png';
import { auth } from '../config/firebase-config';
import { signOut } from 'firebase/auth';
import '../css/navbar.css';

const NavBar = () => {
  const [showmenu, setShowMenu] = useState(false);
  const navigate = useNavigate();
  const user = auth.currentUser;

  const removeMenu = () => {
    setShowMenu(false);
  };

  const showLoginPage = () => {
    navigate('/login');
    setShowMenu(!showmenu);
  };

  const logOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setShowMenu(!showmenu);
      navigate('/');
    });
  };

  return (
    <header>
      <section className="logo-container">
        <img src={logo} alt="logo" />
      </section>
      <nav>
        <IoIosList onClick={() => setShowMenu(!showmenu)} />

        <ul className={showmenu === true ? 'toggle-class' : ''}>
          <li className="nav-links" onClick={removeMenu}>
            <a href="/">Home </a>
          </li>
          <li className="nav-links" onClick={removeMenu}>
            <a href="/dashboard">Dashboard </a>
          </li>
          <li className="nav-links" onClick={removeMenu}>
            <a href="#services">Services</a>
          </li>
          <li className="nav-links" onClick={removeMenu}>
            <a href="#calculator">Calculator </a>
          </li>
          <li className="nav-links">
            <a href="#support">Support</a>
          </li>
          <li className="nav-links">
            <a href="/locations">Locations</a>
          </li>

          {user ? (
            <li className="delivery_btn" onClick={logOut}>
              Logout
            </li>
          ) : (
            <li className="delivery_btn" onClick={showLoginPage}>
              Sign In / Sign Up
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
