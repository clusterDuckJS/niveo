import React from 'react'
import './footer.css'
import LogoLg from '../../assets/niveo_logo_lg.png'
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer>
      <div className="footer-details">
        <div className="about">
          <div className="name-wrapper">
            <img src={LogoLg} alt="Logo" />
            <h4>Niveo Healthcare</h4>
          </div>
          <small>Advancing healthcare technology through quality biomedical equipment sales and expert maintenance services</small>
        </div>
        <div className="quick-links-wrapper">
          <div className="list-wrapper">
            <h6 className='bold-5 mb-1'>Products</h6>
            <ul>
              <li><Link to="/innovations">Innovations</Link></li>
              <li><Link to="/innovations">Critical Care</Link></li>
              <li><Link to="/innovations">Wound Care</Link></li>
              <li><Link to="/innovations">Respiratory</Link></li>
            </ul>
          </div>

          <div className="list-wrapper">
            <h6 className='bold-5 mb-1'>Company</h6>
            <ul>
              <li><Link to="/innovations">About Us</Link></li>
              <li><Link to="/innovations">Services</Link></li>
              <li><Link to="/innovations">Contact</Link></li>
            </ul>
          </div>

          <div className="list-wrapper">
            <h6 className='bold-5 mb-1'>Partners</h6>
            <ul>
              <li><Link to="/innovations">Yafho</Link></li>
              <li><Link to="/innovations">Innaccel</Link></li>
            </ul>
          </div>

          <div className="list-wrapper">
            <h6 className='bold-5 mb-1'>Contact</h6>
            <ul>
              <li>+91 9567679964</li>
              <li>info@niveohealthcare.com</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="rights">
        <small>© 2025 Niveohealthcare Private Limited. All rights reserved</small>
        <Link to="/contact">Contact Us</Link>
      </div>
    </footer>
  )
}

export default Footer
