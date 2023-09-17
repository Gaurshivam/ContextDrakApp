import React, { useContext } from 'react';
import './Navbar.css'
import { Link } from 'react-router-dom';
import { ThemeContext } from '../../App';

const Navbar = () => {
  const {ThemeChange,title} = useContext(ThemeContext);
  return (
    <div className='Nav' >
      <div className='NavLeft' style={{color:"red"}}>
        <Link to='/'><h1>Shivam Gaur</h1></Link>
      </div>
      <div className='NavRight'>
        <Link to ='/' >Home</Link>
        <Link to ='/profile' >Profile</Link>
        <Link to ='/service' >service</Link>
        <Link to ='/contact' >Contact</Link>
        <button onClick={ThemeChange}>{title}</button>
      </div>
    </div>
  );
}

export default Navbar;
