import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../Img/Diang Tech3-3-02-02.png'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
     <div className='logo'>
        <img src={logo} alt="" />
        </div>
        <div className="menu">
            <Link to="">
             <h1>Cours</h1> 
              </Link>
            <Link to="">
              <h1>Exercice</h1>
              </Link>
            <Link to="/cadeaux">
              <h1>Récompense</h1>
              </Link>
            <Link to="">
              <h1>Jouer</h1>
              </Link>
            <Link to="">
             <h1>Se Connecter</h1> 
              </Link>
            </div>      
    </div>
  )
}

export default Navbar
