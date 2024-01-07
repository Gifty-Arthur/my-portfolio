import React from 'react';
import {FaReact} from 'react-icons/fa';
import { Link } from 'react-router-dom'; 
const data= [
    {
      label: 'HOME',
      to : '/home'  
    },
    {
        label : 'ABOUT ME',
        to : '/about'
    },
    {
        label : 'SKILLS',
        to : '/skills'
    },
    {
        label : 'PORTFOLIO',
        to : '/portfolio'
    },
    {
        label : 'RESUME',
        to : '/resume'
    },
    {
        label : 'CONTACT',
        to : '/contact'
    },
]

const Navbar = ()=>{
  return (
    <div>
      <nav className="navbar">
        <div className="navbar_container">
            <Link to={"/"} class>
            <FaReact size={30}/> 
            </Link>
        </div>
        <ul className="navbar_container_menu">
            {
                data.map=(item, key)=>(
                    <li key={key}className="navbar_container_menu_item">
                        <Link className='navbar_container_menu_item_links' to={item.to}>
                            {item.label}
                        </Link>
                    </li>
                )
            }

        </ul>
      </nav>
    </div>
  )
}

export default Navbar 
