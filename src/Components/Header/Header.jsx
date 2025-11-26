import React, { useState } from 'react'
import './header.css'
import LogoLg from '../../assets/niveo_logo_lg.png'
import { Link } from 'react-router-dom'
import { LuAlignJustify } from 'react-icons/lu';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <img src={LogoLg} alt="Logo" className="logo" />

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
