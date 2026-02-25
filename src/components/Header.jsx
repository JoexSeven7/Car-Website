import React, { useContext, useState } from 'react';
import './header.css';
import NavListItem from './NavListItem';
import navListData from '../data/navListData';
import { useLocation, Link } from 'react-router-dom';
import { AppContext } from '../App';

function Header() {
  const { library } = useContext(AppContext);
  const [open, setOpen] = useState(false);
  const [navList, setNavList] = useState(navListData);
  const location = useLocation();

  const handleToggleMenu = () => {
    setOpen(!open);
  };

  const handleNavOnClick = (id) => {
    const newNavList = navList.map((nav) => {
      nav.active = false;
      if (nav._id === id) nav.active = true;
      return nav;
    });
    setNavList(newNavList);
  };

  return (
    <header>
      <Link
        to="/"
        className="logo"
        style={
          location.pathname === '/'
            ? { color: '#afb2b3' }
            : { color: '#bdf0f8' }
        }>
        <i className="bi bi-suit-diamond-fill"></i>Cars
        <i className="bi bi-suit-diamond-fill"></i>
      </Link>
      <div>
        <Link to="/library" className="like">
          <i className="bi bi-heart-fill"></i>
          <span className="likeNumbers">{library.length}</span>
        </Link>
        <a href="##" className="menu" onClick={handleToggleMenu}>
          {open ? <i className="bi bi-x"></i> : <i className="bi bi-list"></i>}
        </a>
      </div>
      <ul className={`nav ${open ? 'active' : undefined}`}>
        {navList.map((nav) => (
          <NavListItem key={nav._id} nav={nav} navOnClick={handleNavOnClick} />
        ))}
      </ul>
    </header>
  );
}

export default Header;
