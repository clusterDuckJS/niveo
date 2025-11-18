import React, { useState } from 'react'
import './header.css'
import Logo from '../../assets/logo.webp'
import { Link } from 'react-router-dom'
import { LuAlignJustify } from 'react-icons/lu';

// function Header() {
//   return (
//     <header>
//         <img src={Logo} alt="Logo" />
//       <nav>
//         <Link to="/">Home</Link>
//         <Link to="/about">About</Link>
//         <Link to="/innovations">Innovations</Link>
//         <Link to="/products">Products</Link>
//         <Link to="/services">Services</Link>
//         <Link to="/contact">Contact</Link>
//       </nav>
//     </header>
//   )
// }

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <img src={Logo} alt="Logo" className="logo" />

      {/* Desktop nav */}
      <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
        <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
        <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
        <Link to="/innovations" onClick={() => setMenuOpen(false)}>Innovations</Link>
        <Link to="/products" onClick={() => setMenuOpen(false)}>Products</Link>
        <Link to="/services" onClick={() => setMenuOpen(false)}>Services</Link>
        <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
      </nav>

      {/* Hamburger icon */}
      <button 
        className="menu-btn"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <LuAlignJustify />
      </button>
    </header>
  );
}


export default Header
