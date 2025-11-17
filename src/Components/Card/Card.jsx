import React, { use } from 'react'
import './card.css'
import { LuCircleCheckBig, LuStethoscope } from "react-icons/lu";
import { GoArrowRight } from 'react-icons/go';
import { useNavigate } from 'react-router-dom';

function Card({ title, desc, image, features, linkTo = "/products", icon: Icon }) {
    const navigate = useNavigate();
    return (
        <div className="product-card">
            <div className="product-icon-wrapper">
                {Icon && <Icon />}
            </div>
            <h4>{title}</h4>
            <p>{desc}</p>

            <img src={image} alt={title} />

            <ul className="features-list">
                {features.map((item, idx) => (
                    <li key={idx}>
                        <LuCircleCheckBig /> {item}
                    </li>
                ))}
            </ul>
            <button onClick={() => navigate(linkTo)} className="card-btn">
                View Products <GoArrowRight />
            </button>
        </div>
    )
}

export default Card
