import React from 'react';
import logo from '../Img/Diang Tech3-3-02-02.png';
import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-left'>
        <img src={logo} alt="" />
        <p>lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim </p>
      </div>
      <div className='les-links'>
      <h3>Nos Services</h3>
      <ul>
          <Link style={{ textDecoration: "none", color: "#8C4303" }} to="/">
            Marketing Digital
          </Link>
          <Link style={{ textDecoration: "none", color: "#8C4303" }} to="">
            Demande 
          </Link>
          <Link style={{ textDecoration: "none", color: "#8C4303" }} to="">
          Partenariat
          </Link>
      </ul>
      </div>
      <div className='mention-legal'>
      <h3>Mentions légales</h3>
      <ul>
          <Link style={{ textDecoration: "none", color: "#8C4303" }} to="">
            Conditions d'utilisation
          </Link>
          <Link style={{ textDecoration: "none", color: "#8C4303" }} to="">
          Confidentialité
          </Link>
      </ul>
      </div>
      <div className='support'>
      <h3>Support</h3>
      <ul>
          <Link style={{ textDecoration: "none", color: "#8C4303" }} to="">
          Centre d’aide
          </Link>
          <Link style={{ textDecoration: "none", color: '#8C4303' }} to="">
          Comment ça marche
          </Link>
          <Link style={{ textDecoration: "none", color: "#8C4303" }} to="">
          Aide
          </Link>
      </ul>
      </div>
    </div>
  )
}

export default Footer
