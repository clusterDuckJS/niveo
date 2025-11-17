import React from 'react'
import './innovation-card.css'
import { useNavigate } from 'react-router-dom';

function InnovationCard({ title, short, image, tag, long, icon: Icon, linkTo }) {

    const navigate = useNavigate();
  return (
    <div className="innovation-card" onClick={() => linkTo && navigate(linkTo)}>
      <div className="product-icon-wrapper">
        {Icon && <Icon />}
      </div>

      <h4>{title}</h4>
      <p>{short}</p>

      <img src={image} alt={title} />

      {tag && (
        <span className="tag">
          <small>{tag}</small>
        </span>
      )}

      <p>{long}</p>
    </div>
  ) 
}

export default InnovationCard
