import React from 'react'
import './services.css'
import Hero from '../../Components/Hero/Hero'
import { LuCircleCheckBig, LuClock, LuHeadphones, LuPhone, LuShield, LuTruck, LuUsers } from 'react-icons/lu'

function Services() {
  return (
    <div className="services main-container">
      <Hero
        tag="Advanced Healthcare Innovations"
        title="Niveohealthcare Private Limited"
        subtitle="Cutting-edge medical devices from Innaccel - WHO recognized and award-winning solutions"
        background="https://media.gettyimages.com/id/2183509884/photo/group-of-medical-professionals.jpg?b=1&s=2048x2048&w=0&k=20&c=XlPqfShISo7SqDu7GyhDgnmHCOh0Nbh6cc1BlYZZD78="
      >
      </Hero>

      <section className="services">
        <h2>What We Offer</h2>
        <h5>Advanced medical equipment solutions with reliable performance and comprehensive support</h5>


        <div className="card">
          <div className="svg-wrapper">
            <LuShield />
          </div>
          <h3>Equipment Sales</h3>
          <p>We offer high-quality medical equipment for hospitals, clinics, and home care</p>
          <ul>
            <li><LuCircleCheckBig /> Diagnostic tools</li>
            <li><LuCircleCheckBig /> Surgical instruments</li>
            <li><LuCircleCheckBig /> Mobility aids</li>
            <li><LuCircleCheckBig /> Patient monitors</li>
            <li><LuCircleCheckBig /> Ensuring safety, reliability, and top performance</li>
          </ul>
        </div>

        <div className="card">
          <div className="svg-wrapper">
            <LuTruck />
          </div>
          <h3>Commitment to Quality and Safety</h3>
          <p>We provide reliable, high-quality medical equipment, ensuring safety and effectiveness</p>
          <ul>
            <li><LuCircleCheckBig /> Rigorous quality standards</li>
            <li><LuCircleCheckBig /> Safety certifications</li>
            <li><LuCircleCheckBig /> Performance testing</li>
            <li><LuCircleCheckBig /> Compliance with regulations</li>
            <li><LuCircleCheckBig /> Healthcare providers can deliver the best care</li>
          </ul>
        </div>

        <div className="card">
          <div className="svg-wrapper">
            <LuUsers />
          </div>
          <h3>Personalized Customer Assistance</h3>
          <p>We prioritize your satisfaction with ongoing support</p>
          <ul>
            <li><LuCircleCheckBig /> Dedicated account managers</li>
            <li><LuCircleCheckBig /> Customized solutions</li>
            <li><LuCircleCheckBig /> Expert consultation</li>
            <li><LuCircleCheckBig /> Smooth, hassle-free experience</li>
            <li><LuCircleCheckBig /> Long-term partnership focus</li>
          </ul>
        </div>

        <div className="card">
          <div className="svg-wrapper">
            <LuHeadphones />
          </div>
          <h3>24/7 Availability</h3>
          <p>Our 24/7 support ensures you get assistance anytime</p>
          <ul>
            <li><LuCircleCheckBig /> Day or night support</li>
            <li><LuCircleCheckBig /> Weekdays and weekends</li>
            <li><LuCircleCheckBig /> Emergency assistance</li>
            <li><LuCircleCheckBig /> Quick response time</li>
            <li><LuCircleCheckBig /> Always available when you need help</li>
          </ul>
        </div>

        <div className="card">
          <div className="svg-wrapper">
            <LuHeadphones />
          </div>
          <h3>Advanced Medical Equipment Solutions</h3>
          <p>We offer advanced medical equipment, ensuring precision, reliability, and top performance</p>
          <ul>
            <li><LuCircleCheckBig /> Cutting-edge technology</li>
            <li><LuCircleCheckBig /> Precision instruments</li>
            <li><LuCircleCheckBig /> Reliable performance</li>
            <li><LuCircleCheckBig /> Innovation-driven solutions</li>
            <li><LuCircleCheckBig /> Meeting healthcare needs</li>
          </ul>
        </div>

        <div className="card">
          <div className="svg-wrapper">
            <LuHeadphones />
          </div>
          <h3>Advanced Medical Equipment Solutions</h3>
          <p>We offer advanced medical equipment, ensuring precision, reliability, and top performance</p>
          <ul>
            <li><LuCircleCheckBig /> Cutting-edge technology</li>
            <li><LuCircleCheckBig /> Precision instruments</li>
            <li><LuCircleCheckBig /> Reliable performance</li>
            <li><LuCircleCheckBig /> Innovation-driven solutions</li>
            <li><LuCircleCheckBig /> Meeting healthcare needs</li>
          </ul>
        </div>

        <div className="card">
          <div className="svg-wrapper">
            <LuClock />
          </div>
          <h3>Maintenance & Repair</h3>
          <p>Comprehensive maintenance and repair services by skilled biomedical engineers</p>
          <ul>
            <li><LuCircleCheckBig /> Preventive maintenance</li>
            <li><LuCircleCheckBig /> Emergency repairs</li>
            <li><LuCircleCheckBig /> Genuine spare parts</li>
            <li><LuCircleCheckBig /> Certified biomedical engineers</li>
            <li><LuCircleCheckBig /> Service contracts available</li>
          </ul>
        </div>
      </section>

      <section className="Why-choose-us">
        <h2>Why Choose Our Services</h2>
        <h4>Experience the difference with our professional healthcare equipment services</h4>
        <div className="value-wrapper">
          <div className="svg-wrapper">
            <LuCircleCheckBig />
          </div>
          <h3>Certified Technicians</h3>
          <p>All our technicians are factory-trained and certified</p>
        </div>
        <div className="value-wrapper">
          <div className="svg-wrapper">
            <LuClock />
          </div>
          <h3>Quick Response</h3>
          <p>Fast response times for all service requests</p>
        </div>
        <div className="value-wrapper">
          <div className="svg-wrapper">
            <LuShield />
          </div>
          <h3>Genuine Parts</h3>
          <p>Only authentic spare parts from manufacturers</p>
        </div>
        <div className="value-wrapper">
          <div className="svg-wrapper">
            <LuHeadphones />
          </div>
          <h3>24/7 Support</h3>
          <p>Round-the-clock technical assistance available</p>
        </div>
      </section>

      <section className="Service-process">
        <h2>Our Service Process</h2>
        <h4>Simple and efficient process to get you the support you need</h4>
        <div className="value-wrapper">
          <div className="svg-wrapper">
            <h1>1</h1>
          </div>
          <h3>Contact Us</h3>
          <p>Reach out via phone, email, or our contact form</p>
        </div>
        <div className="value-wrapper">
          <div className="svg-wrapper">
            <h1>2</h1>
          </div>
          <h3>Assessment</h3>
          <p>We evaluate your needs and provide recommendations</p>
        </div>
        <div className="value-wrapper">
          <div className="svg-wrapper">
           <h1>3</h1>
          </div>
          <h3>Service Delivery</h3>
          <p>Our team executes the service professionally</p>
        </div>
        <div className="value-wrapper">
          <div className="svg-wrapper">
            <h1>4</h1>
          </div>
          <h3>Follow-up</h3>
          <p>We ensure your complete satisfaction</p>
        </div>
      </section>

      <section className="support">
        <h2>Need Service or Support?</h2>
        <h4>Our team is ready to assist you with all your healthcare equipment needs</h4>
        <div className="btn-wrapper">
          <button onClick={() => navigate("/contact")} ><LuPhone /> Contact Us</button>
          <button onClick={() => navigate("/products")} >View Products</button>
        </div>
      </section>
    </div>
  )
}

export default Services
