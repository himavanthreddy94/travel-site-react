import React, {useState} from 'react'
import './Navbar.css'
import {FiMenu, FiX} from "react-icons/fi"

const Navbar = ({navbarLinks}) => {

    const [menuClicked, setMenuClicked] = useState(false);

    const togglemenuClick = () => {
        setMenuClicked(!menuClicked);
    }

  return (
    <>
        <nav className='navbar'>
        <span className='navbar-logo'>TRAVEL</span>
        {menuClicked ? (<FiMenu size={25} className="navbar-menu" onClick={togglemenuClick} />) : (<FiX size={25} className="navbar-menu" onClick={togglemenuClick} />)}
            <ul className={menuClicked ? "navbar-list" : "navbar-list navbar-list--active"}>
                {
                    navbarLinks.map((items) => {
                        return <li className='navbar-item' key={items.title}>
                            <a className='navbar-link' href={items.url}>{items.title}</a>
                        </li>
                    })
                }
            </ul>
        </nav>
    </>
  )
}

export default Navbar
