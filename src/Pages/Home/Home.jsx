import React from 'react'
import './home.css'
import Hero from '../../Components/Hero/Hero'
import Card from '../../Components/Card/Card'
import { LuHeart, LuShield, LuStethoscope, LuWind } from "react-icons/lu";
import products from '../../data/products';
import innovations from '../../data/innovations';
import InnovationCard from '../../Components/InnovationCard/InnovationCard';

function Home() {
  return (
    <div className="main-container home">
      <Hero />
      <section className='products'>
        <h2>Our Product Categories</h2>
        <h3>Comprehensive healthcare solutions across critical care, wound care, and respiratory therapy</h3>
        <div className='products-container'>
          {products.map((item, index) => (
            <Card
              key={index}
              title={item.title}
              desc={item.desc}
              image={item.image}
              features={item.features}
              linkTo={item.linkTo}
              icon={item.icon}
            />
          ))}
        </div>
      </section>
      <section className='innovation'>
        <span className="tag">
          <small>WHO Recognized Technology</small>
        </span>
        <h2>Featured Innovations from Innaccel</h2>
        <h3>World-class medical technology recognized by WHO and winning numerous awards</h3>
        <div className="innovations-container">
          {innovations.map((item, index) => (
        <InnovationCard
          key={index}
          {...item}
        />
      ))}
          
        </div>
        <button>View All Innovations</button>
      </section>
      <section className='dealer'>
        <span className="tag">
          <small>Trusted Partnerships</small>
        </span>
        <h2>Authorized Dealer</h2>
        <h3>We are proud authorized dealers for leading healthcare equipment manufacturers</h3>
        <p>Innaccel is a leading medical technology company dedicated to developing innovative healthcare solutions that improve patient outcomes and enhance clinical workflows. With a focus on critical care, wound care, and respiratory therapy, Innaccel combines cutting-edge technology with user-centric design to create products that meet the evolving needs of healthcare professionals worldwide.</p>
        <button>Learn More About Us</button>
      </section>
    </div>
  )
}

export default Home
