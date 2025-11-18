import React, { use } from 'react'
import './card.css'
import { LuArrowRight, LuCircleCheckBig } from "react-icons/lu";
import { GoArrowRight } from 'react-icons/go';
import { useNavigate } from 'react-router-dom';

function Card({ title, desc, image, features, linkTo = "/products", icon: Icon }) {
    const navigate = useNavigate();
    return (
        <div className="product-card">
            <div className="svg-wrapper md">
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
            <button className='secondary' onClick={() => navigate(linkTo)} >
                View Products <LuArrowRight />
            </button>
        </div>
    )
}

export default Card
