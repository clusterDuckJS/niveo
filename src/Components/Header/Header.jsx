import React from 'react'
import './header.css'
import Logo from '../../assets/logo.webp'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header>
      <img src={Logo} alt="Logo" />
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/innovations">Innovations</Link>
        <Link to="/products">Products</Link>
        <Link to="/services">Services</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  )
}

export default Header
