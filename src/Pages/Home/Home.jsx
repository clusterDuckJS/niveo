import React from 'react'
import './home.css'
import Hero from '../../Components/Hero/Hero'
import Card from '../../Components/Card/Card'
import { LuArrowRight, LuCircleCheckBig, LuMail, LuMapPin, LuPhone } from "react-icons/lu";
import products from '../../data/products';
import innovations from '../../data/innovations';
import InnovationCard from '../../Components/InnovationCard/InnovationCard';
import { GoArrowRight } from 'react-icons/go';
import { useNavigate } from 'react-router-dom';


function Home() {
  const navigate = useNavigate();
  return (
    <div className="main-container home">
      <Hero
        tag="Authorized Healthcare Equipment Dealer"
        title="Niveohealthcare Private Limited"
        subtitle="Advancing healthcare technology through quality biomedical equipment sales and expert maintenance services"
        background="https://media.gettyimages.com/id/2222386343/photo/doctors-discussing-patients-medical-history-in-modern-hospital-lobby.jpg?b=1&s=2048x2048&w=0&k=20&c=lRQ-S6XVzrSaU1msqElsXB8gSd5zeB16DVF-5EsssMY="
      >
        <div className="btn-wrapper">
          <button onClick={() => navigate('/innovations')} className="primary">View Innovations <LuArrowRight /></button>
          <button onClick={() => navigate('/contact')} className="blur">Contact Us</button>
        </div>
      </Hero>

      {/* PRODUCTS */}
      <section className='products'>
        <h2>Our Product Categories</h2>
        <p>Comprehensive healthcare solutions across critical care, wound care, and<br /> respiratory therapy</p>
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

      {/* INNOVATION */}
      <section className='innovation'>
        <span className="tag primary">
          <small>WHO Recognized Technology</small>
        </span>
        <h2>Featured Innovations from Innaccel</h2>
        <p>World-class medical technology recognized by WHO and winning numerous awards</p>
        <div className="innovations-container">
          {innovations.map((item, index) => (
            <InnovationCard
              key={index}
              {...item}
            />
          ))}

        </div>
        <button className='primary'>View All Innovations <LuArrowRight /> </button>
      </section>

      {/* AUTHORIZED DEALER */}
      <section className='dealer'>
        <span className="tag primary">
          <small>Trusted Partnerships</small>
        </span>
        <h2>Authorized Dealer</h2>
        <p>We are proud authorized dealers for leading healthcare equipment manufacturers</p>
        <div className="dealers-wrapper">
          <div className="dealer-card">
            <div className="svg-wrapper lg round">
              <LuCircleCheckBig />
            </div>
            <h2>Innaccel</h2>
            <p>Premium medical equipment and solutions</p>
            <a className='btn secondary' href="https://innaccel.com/" target="_blank" rel="noopener noreferrer">
              Visit Website <LuArrowRight />
            </a>
          </div>

          <div className="dealer-card">
            <div className="svg-wrapper lg round">
              <LuCircleCheckBig />
            </div>
            <h2>Yafho</h2>
            <p>Advanced healthcare technology products</p>
            <a className='btn secondary' href="https://www.yafho.com/" target="_blank" rel="noopener noreferrer">
              <p>Visit Website</p> <LuArrowRight />
            </a>
          </div>
        </div>
      </section>

      {/* CHOOSE US */}
      <section className='choice'>
        <h2>Why Choose Niveo Health Care?</h2>
        <p>Your trusted partner for quality healthcare equipment and exceptional service</p>
        <div className="choice-container">
          <div className="choice-wrapper">
            <div className="svg-wrapper md">
              <LuCircleCheckBig />
            </div>
            <h3>Quality Products</h3>
            <p>Premium equipment from trusted manufacturers</p>
          </div>

          <div className="choice-wrapper">
            <div className="svg-wrapper md">
              <LuCircleCheckBig />
            </div>
            <h3>Biomedical Engineering</h3>
            <p>Skilled biomedical engineers for installation and maintenance</p>
          </div>

          <div className="choice-wrapper">
            <div className="svg-wrapper md">
              <LuCircleCheckBig />
            </div>
            <h3>Authorized Dealer</h3>
            <p>Official partnerships with leading brands</p>
          </div>

          <div className="choice-wrapper">
            <div className="svg-wrapper md">
              <LuCircleCheckBig />
            </div>
            <h3>24/7 Support</h3>
            <p>Round-the-clock customer assistance</p>
          </div>
        </div>
      </section>

      <div className="contact">
        <div className="get-started">
          <h2>Ready to Get Started?</h2>
          <h3>Contact us today to discuss your healthcare equipment needs</h3>
          <div className="btn-wrapper">
            <button onClick={() => navigate('/contact')}><LuPhone /> Contact Us</button>
            <button onClick={() => navigate('/services')}>Learn About Our Services</button>
          </div>
        </div>
        <div className="contact-details">
          <div className="contact-item">
            <LuPhone />
            <p className='bold-5'>Call Us</p>
            <p>+91 9567679964</p>
          </div>

          <div className="contact-item">
            <LuMail />
            <p className='bold-5'>Email</p>
            <p>info@niveohealthcare.com</p>
          </div>

          <div className="contact-item">
            <LuMapPin />
            <p className='bold-5'>Visit Us</p>
            <p>Third floor, JC Chambers,<br/> 60/44, Panampilly Nagar,<br/> Kochi,
              Ernakulam, Kerala 682036</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
