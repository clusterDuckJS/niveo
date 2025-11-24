import React from 'react'
import './product-card.css'
import { LuCircleCheckBig } from 'react-icons/lu'

function ProductCard({ 
  title, 
  description, 
  features = [], 
  applications = [] 
}) {
  return (
    <div className="card product-card">
      <h3 className='bold-5'>{title}</h3>

      <p className='mb-1'>{description}</p>

      <p className='bold-5 mb-1'>Key Features:</p>
      <ul className='mb-1'>
        {features.map((feature, index) => (
          <li key={index}>
            <LuCircleCheckBig /> {feature}
          </li>
        ))}
      </ul>

      <p className='bold-5 mb-1'>Applications:</p>
      <div className="tags-container flex gp-02 wrap">
        {applications.map((app, index) => (
          <span className='tag primary' key={index}>
            <small>{app}</small>
          </span>
        ))}
      </div>
    </div>
  )
}

export default ProductCard