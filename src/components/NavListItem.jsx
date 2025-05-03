import React from 'react';
import './navListItem.css';
import { Link } from 'react-router-dom';

function NavListItem({nav, navOnClick }) {

    const icons = {
        home: "bi-house-fill",
        Vehicles: "bi-circle-fill",
        Services: "bi-tools",
        Contact: "bi-envelope-fill",
      };
    
  return (
    <li>
        <Link className={nav.active ? 'active' : undefined} to={nav.link}
        onClick={()=>navOnClick(nav._id)} >
        { nav.active ? <i className={icons[nav.name]}></i> :nav.name}
         </Link>
    </li>
  );
}

export default NavListItem;
