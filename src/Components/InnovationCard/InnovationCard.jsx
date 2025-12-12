import React from 'react'
import './innovation-card.css'
import { useNavigate } from 'react-router-dom';

function InnovationCard({ title, short, image, tag, long, icon: Icon }) {

  return (
    <div className="innovation-card">
      <div className="svg-wrapper md mb-1">
        {Icon && <Icon />}
      </div>

      <h4>{title}</h4>
      <p>{short}</p> 

      <img src={image} alt={title} />

      {tag && (
        <span className="tag primary">
          <small>{tag}</small>
        </span>
      )}

      <p>{long}</p>
    </div>
  ) 
}

export default InnovationCard
